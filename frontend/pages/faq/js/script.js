import { cartWidget, createAccordion, createElement, carouselMoveNext, createHeading, footer, navBar, pagingBreadcrumb, carouselMoveBack } from "../../../helper/helper.js";

const headingElement = document.querySelector('.heading');
const carouselSlider = document.querySelector('.slider');
const accordionContainer1 = document.querySelector('.accordion-container-1');
const accordionContainer2 = document.querySelector('.accordion-container-2');

const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");


const pathElement = document.querySelector(".path");
const currentPath = window.location.pathname;
const path = ("home" + currentPath).trim().split("/");

const headings =
{
    heading: "Frequently asked questions",
    subHeading: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like."
};

const accordionFAQs = [
    {
        title: "Accordion 1",
        subtitle: "collapse plugin adds the appropriate classes that we use to style each element. These classescontrol the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"
    },
    {
        title: "Accordion 2",
        subtitle: "collapse plugin adds the appropriate classes that we use to style each element. These classescontrol the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"
    },
    {
        title: "Accordion 3",
        subtitle: "collapse plugin adds the appropriate classes that we use to style each element. These classescontrol the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"
    },
    {
        title: "Accordion 4",
        subtitle: "collapse plugin adds the appropriate classes that we use to style each element. These classescontrol the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"
    },
    {
        title: "Accordion 1",
        subtitle: "collapse plugin adds the appropriate classes that we use to style each element. These classescontrol the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"
    },
    {
        title: "Accordion 2",
        subtitle: "collapse plugin adds the appropriate classes that we use to style each element. These classescontrol the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"
    },
    {
        title: "Accordion 3",
        subtitle: "collapse plugin adds the appropriate classes that we use to style each element. These classescontrol the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"
    },
    {
        title: "Accordion 4",
        subtitle: "collapse plugin adds the appropriate classes that we use to style each element. These classescontrol the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"
    },
]

let currentIndex = 0;

navBar('bg-white');
cartWidget();

pagingBreadcrumb(pathElement, path.slice(0, path.length));
createHeading(headingElement, headings.heading, headings.subHeading, true);

[1, 2, 3, 4, 5].forEach((item, index) => {
    const image = createElement({ type: "img", src: "http://localhost:3000/images/faq/carousel/carouselhero.png", alt: `sliderimage${index}`, className: "sliderImage flex-shrink-0 w-100 h-100" });
    carouselSlider.append(image);
})

const accordionDistribute = (countInleft) => {

    accordionFAQs.forEach((faq, index) => {
        if (index < countInleft)
            accordionContainer1.append(createAccordion({ ...faq, index }));
        else
            accordionContainer2.append(createAccordion({ ...faq, index }));

    })
}


accordionDistribute(5);

footer();

setInterval(() => {
    backBtn.click();
}, 4000);


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