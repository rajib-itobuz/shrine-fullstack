import { cartWidget, createBlogCard, createEventCard, createHeading, createServiceCard, createTeamCard, footer, navBar } from './helper/helper.js';
let sectionHeaders = null;

const eventheading = document.getElementById("eventHeading");
const teamHeading = document.getElementById("teamHeading");
const formHeading = document.getElementById("formHeading");
const growingHeading = document.getElementById("growingHeading");
const serviceHeading = document.getElementById("serviceHeading");

const featuredTitle = document.getElementById("featuredTitle");
const featuredDate = document.getElementById("featuredContent");
const featuredContent = document.getElementById("featuredDate");

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const apiData = await response.json();

        return apiData.data;

    } catch (error) {
        console.log("Backend error");
        return null;
    }

}

const renderEventsData = async () => {
    const data = await fetchData('http://localhost:3000/home/eventsData');
    const { heading: title, subHeading: subtitle, eventCardObject: eventCards } = data;
    const cardContainer = eventheading.parentElement.querySelector('.cardContainer');

    createHeading(eventheading, title, subtitle);
    eventCards.forEach(e => {
        cardContainer.append(createEventCard({ ...e, imgCustomClass: 'event-image', cardCustomClass: 'event-card' }))
    })

}

const renderTeamData = async () => {
    const data = await fetchData('http://localhost:3000/home/teamData');
    const { heading: title, subHeading: subtitle, teamMembers } = data;
    const cardContainer = teamHeading.parentElement.querySelector('.team-card-container');

    createHeading(teamHeading, title, subtitle);
    teamMembers.forEach(e => {
        cardContainer.append(createTeamCard({ ...e, imgCustomClass: 'event-image', cardCustomClass: 'event-card' }))
    })

}

const renderBlogData = async () => {
    const data = await fetchData('http://localhost:3000/home/blogData');
    const { heading: title, subHeading: subtitle, blogCards, featured } = data;
    const cardContainer = formHeading.parentElement.querySelector('.card-container');

    createHeading(formHeading, title, subtitle);
    blogCards.forEach(e => {
        cardContainer.append(createBlogCard({ ...e, imgCustomClass: 'event-image', cardCustomClass: 'event-card' }))
    });

    featuredDate.textContent = featured.date;
    featuredContent.textContent = featured.subtitle;
    featuredTitle.textContent = featured.title;
}

const renderCommonHeadings = async (element, pathUrl) => {
    const data = await fetchData(`http://localhost:3000${pathUrl}`);
    const { heading: title, subHeading: subtitle } = data;
    createHeading(element, title, subtitle);
}

const renderServicesData = async () => {
    const data = await fetchData(`http://localhost:3000/home/servicesData`);
    const { heading: title, subHeading: subtitle, serviceCards } = data;
    const cardContainer = serviceHeading.parentElement.querySelector('.service-card-container');

    createHeading(serviceHeading, title, subtitle);
    serviceCards.forEach(service => {
        cardContainer.append(createServiceCard(service))
    });
}

navBar('hero-primary');
cartWidget();
renderServicesData();
renderCommonHeadings(growingHeading, "/home/growingData");
renderEventsData();
renderTeamData();
renderBlogData();


footer();

const carouselContainer = document.getElementById("carouselContainer");
const carouselItems = carouselContainer.children;
const carouselNextBtn = document.getElementById("btnCarouselNext");
const carouselBackBtn = document.getElementById("btnCarouselBack");
let carouselIndex = 0;

carouselNextBtn.addEventListener("click", () => {
    carouselIndex = (carouselIndex + 1) % carouselItems.length;
    const carouselItemWidth = carouselItems[0].getClientRects()[0].width + 8;
    carouselContainer.style.transform = `translateX(-${carouselIndex * carouselItemWidth}px)`;
    console.log(carouselContainer);
});

