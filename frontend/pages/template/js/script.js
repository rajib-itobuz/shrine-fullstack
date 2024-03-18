import { cartWidget, createElement, footer, navBar, createHeading, pagingBreadcrumb, backendUrl } from '../../../helper/helper.js';


const pathElement = document.querySelector(".path");
const currentPath = window.location.pathname;
const path = ("home" + currentPath).trim().split("/");


navBar('bg-white');
cartWidget();
pagingBreadcrumb(pathElement, path.slice(0, path.length));

footer();