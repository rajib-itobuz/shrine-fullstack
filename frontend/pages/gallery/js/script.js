import { cartWidget, createElement, createHeading, createTabList, footer, navBar, pagingBreadcrumb } from "../../../helper/helper.js";

const pathElement = document.querySelector(".path");
const headingElement = document.querySelector('.heading');
const tabContainer = document.querySelector(".tab-container");
const gallery = document.querySelector(".gallery");
const navbarTabsCategories=[
    "All",
    "Church",
    "Donation",
    "Charity",
    "Education"
] //categories
let navTabs=[];
const currentPath = window.location.pathname;
const path = ("home" + currentPath).trim().split("/");
let currentIndex = 0;
const headings =
{
    heading: "Our Saviour Jesus Christ<br class=\"d-none d-md-block\"/> Waits Your Gallery",
    subHeading: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
};


const galleryobj = [
    {
        category: "charity",
        imgUrl: "http://localhost:3000/images/gallery/gallery/charity/candle.png"
    },
    {
        category: "charity",
        imgUrl: "http://localhost:3000/images/gallery/gallery/charity/pray.png"
    },
    {
        category: "church",
        imgUrl: "http://localhost:3000/images/gallery/gallery/church/cup.png"
    },
    {
        category: "church",
        imgUrl: "http://localhost:3000/images/gallery/gallery/church/hallway.png"
    },
    {
        category: "church",
        imgUrl: "http://localhost:3000/images/gallery/gallery/church/tomb.png"
    },
    {
        category: "donation",
        imgUrl: "http://localhost:3000/images/gallery/gallery/donation/gold.png"
    },
    {
        category: "donation",
        imgUrl: "http://localhost:3000/images/gallery/gallery/donation/group-donation.png"
    },
    {
        category: "education",
        imgUrl: "http://localhost:3000/images/gallery/gallery/education/baptism.png"
    },
    {
        category: "education",
        imgUrl: "http://localhost:3000/images/gallery/gallery/education/books.png"
    },
];

navBar('bg-white');
cartWidget();


pagingBreadcrumb(pathElement, path.slice(0, path.length))
createHeading(headingElement, headings.heading, headings.subHeading, true);

footer();

const renderGallery = (filterCriteria) => {
    gallery.innerHTML = "";
    galleryobj.filter((e) => {
        if (filterCriteria === "#all")
            return true;
        else
            return e.category === location.hash.substring(1);
    }).forEach((e, index) => {
        const itemDiv = createElement({ type: "div", className: "rounded overflow-hidden col-6 col-md-4", });

        const img = createElement({ type: "img", className: "h-100 w-100 rounded object-fit-cover", src: e.imgUrl, alt: e.category + index });
        itemDiv.append(img);


        gallery.append(itemDiv);

    });
}

renderGallery("#all");

navTabs=createTabList(tabContainer,navbarTabsCategories);

navTabs[currentIndex].classList.add("active");


window.addEventListener("hashchange", (e) => {
    navTabs[currentIndex].classList.remove("active")
    currentIndex = navTabs.findIndex((item) => item.getAttribute("href") === location.hash);
    navTabs[currentIndex].classList.add("active")
    renderGallery(location.hash);
})