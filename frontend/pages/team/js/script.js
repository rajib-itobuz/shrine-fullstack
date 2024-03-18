import { cartWidget, footer, navBar, pagingBreadcrumb, createHeading, createElement, carouselMoveNext, carouselMoveBack, createTeamCard } from "../../../helper/helper.js";


const pathElement = document.querySelector(".path");
const currentPath = window.location.pathname;
const path = ("home" + currentPath).trim().split("/");
const headingElement = document.querySelector('.heading');
const teamContainer = document.getElementById("teamContainer");
const carouselSlider = document.querySelector('.slider');
let currentIndex = 0;

const headings =
{
    heading: "Your Guide to Understanding<br class=\"d-none d-md-block\"/> Our Church",
    subHeading: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
};

const teamMembers = [
    {
        imageUrl: "/images/home/team/ronnie.png",
        name: "Gerry Serano",
        penName: "Sir Gerry Serano",
    },
    {
        imageUrl: "/images/home/team/ronnie.png",
        name: "Gerry Serano",
        penName: "Sir Gerry Serano",
    },
    {
        imageUrl: "/images/home/team/ronnie.png",
        name: "Gerry Serano",
        penName: "Sir Gerry Serano",
    },
    {
        imageUrl: "/images/home/team/ronnie.png",
        name: "Gerry Serano",
        penName: "Sir Gerry Serano",
    },
    {
        imageUrl: "/images/home/team/ronnie.png",
        name: "Gerry Serano",
        penName: "Sir Gerry Serano",
    },
    {
        imageUrl: "/images/home/team/ronnie.png",
        name: "Gerry Serano",
        penName: "Sir Gerry Serano",
    }
]


navBar();
cartWidget();

pagingBreadcrumb(pathElement, path.slice(0, path.length));
createHeading(headingElement, headings.heading, headings.subHeading, true);

[1, 2, 3, 4, 5].forEach((item, index) => {
    const image = createElement({ type: "img", src: "http://localhost:3000/images/team/carousel/hero.png", alt: `sliderimage${index}`, className: " sliderImage w-100 flex-shrink-0 h-100" });
    carouselSlider.append(image);
})

teamMembers.forEach((member,index)=>{
    teamContainer.append(createTeamCard({...member,customColWrapper:"col-6 col-md-4",imgCustomClass:"rounded",}))
});

setInterval(() => {
    backBtn.click();
}, 4000);

footer();



backBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % 5;
    carouselMoveNext({ carouselSlider, item: carouselSlider.children[0], currentIndex });

})

nextBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0)
        currentIndex = 4;
    carouselMoveBack({ carouselSlider, item: carouselSlider.children[0], currentIndex })
});