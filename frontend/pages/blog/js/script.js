import { cartWidget, createElement, footer, navBar, createHeading, pagingBreadcrumb, backendUrl, createHorizontalEventCard } from '../../../helper/helper.js';


const pathElement = document.querySelector(".path");
const eventsContainer = document.querySelector(".event-card-container");
const currentPath = window.location.pathname;
const path = ("home" + currentPath).trim().split("/");
const headingElement = document.querySelector('.heading');
const tagContainer = document.querySelector('.tag-container');


const headings =
{
    heading: "A Collection of Our Church`s <br class=\"d-none d-md-block\"/>  Blog Posts",
    subHeading: "long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to.long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
};

const eventCards = [

    {
        imgUrl: "/images/events/events/baptism.png",
        title: "Faithful Hearts,<br> Boundless Grace.",
        description: "long established fact that a reader will be distracted by the readable",
        date: "26.10.2013",
        time: "12:00 am",
        location: "Kingdom Church",
    },
    {
        imgUrl: "/images/events/events/baptism.png",
        title: "Faithful Hearts,<br> Boundless Grace.",
        description: "long established fact that a reader will be distracted by the readable",
        date: "26.10.2013",
        time: "12:00 am",
        location: "Kingdom Church",
    },
    {
        imgUrl: "/images/events/events/baptism.png",
        title: "Faithful Hearts,<br> Boundless Grace.",
        description: "long established fact that a reader will be distracted by the readable",
        date: "26.10.2013",
        time: "12:00 am",
        location: "Kingdom Church",
    },
    {
        imgUrl: "/images/events/events/baptism.png",
        title: "Faithful Hearts,<br> Boundless Grace.",
        description: "long established fact that a reader will be distracted by the readable",
        date: "26.10.2013",
        time: "12:00 am",
        location: "Kingdom Church",
    },
    {
        imgUrl: "/images/events/events/baptism.png",
        title: "Faithful Hearts,<br> Boundless Grace.",
        description: "long established fact that a reader will be distracted by the readable",
        date: "26.10.2013",
        time: "12:00 am",
        location: "Kingdom Church",
    },
    {
        imgUrl: "/images/events/events/baptism.png",
        title: "Faithful Hearts,<br> Boundless Grace.",
        description: "long established fact that a reader will be distracted by the readable",
        date: "26.10.2013",
        time: "12:00 am",
        location: "Kingdom Church",
    }
]
const tags = [
    "Blog",
    "Book"
]



navBar('bg-white');
cartWidget();
pagingBreadcrumb(pathElement, path.slice(0, path.length));
createHeading(headingElement, headings.heading, headings.subHeading, true);
tags.forEach((e) => tagContainer.append(createElement({ isButton: true, type: "span", className: "font-12 fw-semibold border px-3 py-2 rounded-2 text-uppercase", innerText: e })));
eventCards.forEach((event) => {
    const cardWrapper = createElement({ type: "div", className: "col-12 col-sm-6 d-flex justify-content-center" })
    cardWrapper.append(createHorizontalEventCard({ ...event, cardCustomClass: "event-card", button: "Learn More" }));
    eventsContainer.append(cardWrapper);
})
footer();