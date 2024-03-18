import { cartWidget, createElement, footer, navBar, createHeading, pagingBreadcrumb, backendUrl } from '../../../helper/helper.js';


const pathElement = document.querySelector(".path");
const headingElement = document.querySelector('.heading');
const quoteText = document.getElementById("quoteText");
const currentPath = window.location.pathname;
const path = ("home" + currentPath).trim().split("/");
const headings =
{
    heading: "Where Faith Finds Hope, and<br class=\"d-none d-md-block\"/> Love Knows No Bounds",
    subHeading: "long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.<br><br>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on theThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you.are many variations of passages of Lorem Ipsum available,"
};

const quote = "Romans 12:9 Love must be sincere. Hate what is evil; cling to what is good."

navBar('bg-white');
cartWidget();
pagingBreadcrumb(pathElement, path.slice(0, path.length));
createHeading(headingElement, headings.heading, headings.subHeading, true);
quoteText.innerText = quote
footer();