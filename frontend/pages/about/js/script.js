import { cartWidget, createHeading, createServiceCard, footer, navBar, pagingBreadcrumb } from '../../../helper/helper.js';

const aboutUsHeading = document.getElementById("aboutUsHeading");
const visionHeading = document.getElementById("visionHeading");
const missionContainer = document.getElementById("missionContainer");

const pathElement = document.querySelector(".path");
const currentPath = window.location.pathname;
const path = ("home" + currentPath).trim().split("/");

const missioncards = [
    {
        imgUrl: "/images/aboutus/community/mission.svg",
        title: "Our Mission",
        subtitle: "A long established fact that a reader will be A long."
    },
    {
        imgUrl: "/images/aboutus/community/vision.svg",
        title: "Our Vision",
        subtitle: "A long established fact that a reader will be A long."
    },
    {
        imgUrl: "/images/aboutus/community/passion.svg",
        title: "Our Passion",
        subtitle: "A long established fact that a reader will be A long."
    }
]


navBar('bg-white');
cartWidget();


pagingBreadcrumb(pathElement, path.slice(0, path.length));
createHeading(aboutUsHeading, "About us", `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, <br/><br/>or randomised words which don't look even slightly believable. If you are going to use`);
createHeading(visionHeading, "walking together,growing in faith", `A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long.`, false, 'w-md-50');

missioncards.forEach((item, index) => {
    missionContainer.append(createServiceCard({ ...item, cardCustomClass: 'service-card rounded-2 mission-card-bg d-flex flex-row flex-md-column border border-0 align-items-center', subtitleCustomClass: "font-12 fw-lighter", titleCustomClass: "font-16 fw-lighter", cardStyle: "" }));

})


footer();