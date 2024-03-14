import { cartWidget, createHeading, createServiceCard, footer, navBar, pagingBreadcrumb } from '../../helper/helper.js';

const aboutUsHeading = document.getElementById("aboutUsHeading");
const visionHeading = document.getElementById("visionHeading");
const missionContainer = document.getElementById("missionContainer");

const pathElement = document.querySelector(".path");
const currentPath = window.location.pathname;
const path = ("home" + currentPath).trim().split("/");

const communityData = [
    {
        imgUrl: "/images/aboutus/community/mission.svg",
        title: "Our Mission",
        subtitle: "A long established fact that a reader will be A long."
    },
    {
        imgUrl: "/images/aboutus/community/mission.svg",
        title: "Our Mission",
        subtitle: "A long established fact that a reader will be A long."
    },
    {
        imgUrl: "/images/aboutus/community/mission.svg",
        title: "Our Mission",
        subtitle: "A long established fact that a reader will be A long."
    }
]


navBar('bg-white');
cartWidget();


pagingBreadcrumb(pathElement, path.slice(0, path.length));
createHeading(aboutUsHeading, "About us", `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, <br/><br/>or randomised words which don't look even slightly believable. If you are going to use`);
createHeading(visionHeading, "walking together,growing in faith", `A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long.`, false, 'w-md-50');

missionContainer.append(createServiceCard({ ...communityData[0], cardCustomClass: 'rounded-1 mission-card-bg' }))

footer();