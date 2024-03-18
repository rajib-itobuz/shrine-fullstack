import { cartWidget, createElement, footer, navBar, createHeading, pagingBreadcrumb, backendUrl, createServiceCard, createHorizontalEventCard } from '../../../helper/helper.js';


const pathElement = document.querySelector(".path");
const currentPath = window.location.pathname;
const path = ("home" + currentPath).trim().split("/");
const headingElement = document.querySelectorAll('.heading');
const missionContainer = document.getElementById("missionContainer");
const eventCardContainer = document.querySelector(".event-card-container");


const headings =
{
    heading: "Do onto others as you would<br class=\"d-none d-md-block\"/> have them do ministries",
    subHeading: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
};

const missioncards = [
    {
        imgUrl: "/images/aboutus/community/mission.svg",
        title: "Children Ministries",
        subtitle: "A long established fact that a reader will be A long."
    },
    {
        imgUrl: "/images/aboutus/community/vision.svg",
        title: "Charity Ministries",
        subtitle: "A long established fact that a reader will be A long."
    },
    {
        imgUrl: "/images/aboutus/community/passion.svg",
        title: "Elderly Ministries",
        subtitle: "A long established fact that a reader will be A long."
    }
]
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

navBar('bg-white');
cartWidget();
createHeading(headingElement[0], headings.heading, headings.subHeading, true);
createHeading(headingElement[1], headings.heading, headings.subHeading, true);

missioncards.forEach((item, index) => {
    missionContainer.append(createServiceCard({ ...item, cardCustomClass: 'service-card rounded-2 mission-card-bg d-flex flex-row flex-md-column border border-0 align-items-center rounded-0 rounded-top-5 rounded-end-5', subtitleCustomClass: "font-12 fw-lighter", titleCustomClass: "font-16 fw-lighter", cardStyle: "" }));

})


eventCards.forEach((e) => {
    const cardWrapper = createElement({ type: "div", className: "col-12 col-sm-6 col-lg-4 d-flex justify-content-center" })
    cardWrapper.append(createHorizontalEventCard({ ...e, cardCustomClass: "event-card", button: "Learn More" }));
    eventCardContainer.append(cardWrapper);
})

pagingBreadcrumb(pathElement, path.slice(0, path.length));

footer();