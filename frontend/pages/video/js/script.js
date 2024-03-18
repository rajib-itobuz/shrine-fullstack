import { cartWidget, createElement, footer, navBar, createHeading, pagingBreadcrumb, backendUrl } from '../../../helper/helper.js'

const pathElement = document.querySelector(".path");
const currentPath = window.location.pathname;
const path = ("home" + currentPath).trim().split("/");
const headingElement = document.querySelector('.heading');
const videoContainer = document.getElementById('videoContainer');
const carouselContainer = document.querySelector(".carousel-container");

const imgUrl = [
    "/images/video/carousel/mary-baby.png",
    "/images/video/carousel/statue.png",
    "/images/video/carousel/jesus.png",
]

const videoCards = [
    {
        title: "Download your worries and get God.",
        imageUrl: "/images/video/videos/hallway.png"
    },
    {
        title: "Download your worries and get God.",
        imageUrl: "/images/video/videos/food.png"
    },
    {
        title: "Download your worries and get God.",
        imageUrl: "/images/video/videos/candles.svg"
    },
    {
        title: "Download your worries and get God.",
        imageUrl: "/images/video/videos/jesus.png"
    },
    {
        title: "Download your worries and get God.",
        imageUrl: "/images/video/videos/cross.png"
    },
    {
        title: "Download your worries and get God.",
        imageUrl: "/images/video/videos/glass.png"
    },
    {
        title: "Download your worries and get God.",
        imageUrl: "/images/video/videos/fair.svg"
    },
    {
        title: "Download your worries and get God.",
        imageUrl: "/images/video/videos/redwine.png"
    }

]

const headings =
{
    heading: "Understanding Our<br class=\"d-none d-md-block\"/> Bible",
    subHeading: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
};


const createCarouselItem = (url) => {
    const carouselItem = createElement({ type: "div", className: "item" });
    const carouselImg = createElement({ type: "img", src: backendUrl + url, alt: "carousel-item", className: "rounded-card-4 w-100 h-100 object-fit-cover", isButton: true });

    const onclickItem = () => {
        console.log(carouselItem);
    }
    carouselItem.onclick = onclickItem;

    carouselItem.append(carouselImg);
    return carouselItem;
}

const createVideoCard = ({ title, imageUrl, index }) => {
    const cardWrapper = createElement({ type: "div", className: `${index !== 3 ? 'col-6 col-md-4' : 'col-6 col-md-8'} video-card` });
    const imageElement = createElement({ type: "img", src: backendUrl + imageUrl, alt: "video-img", className: "w-100 rounded-2" });
    const titleElement = createElement({ type: "h4", innerText: title, className: "font-20 fw-semibold my-3" });
    cardWrapper.append(imageElement, titleElement);


    return cardWrapper;
}

// videoCards.append()
videoCards.forEach((videoItem, index) => {
    videoContainer.append(createVideoCard({ ...videoItem, index }));
})


navBar('bg-white');
cartWidget();

imgUrl.forEach((url) => carouselContainer.append(createCarouselItem(url)));
createHeading(headingElement, headings.heading, headings.subHeading, true);

pagingBreadcrumb(pathElement, path.slice(0, path.length));

footer();