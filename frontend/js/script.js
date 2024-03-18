import { cartWidget, createElement, createEventCard, createHeading, createServiceCard, createTeamCard, footer, navBar } from '../helper/helper.js';
let sectionHeaders = null;
const baseUrl = 'http://localhost:3000';

// headings
const eventheading = document.getElementById("eventHeading");
const teamHeading = document.getElementById("teamHeading");
const formHeading = document.getElementById("formHeading");
const quoteHeading = document.getElementById("quoteHeading");
const serviceHeading = document.getElementById("serviceHeading");

// carousel
const carouselContainer = document.getElementById("carouselContainer");
const carouselNextBtn = document.getElementById("btnCarouselNext");
const carouselBackBtn = document.getElementById("btnCarouselBack");

// form part
const emailSubscribe = document.getElementById("emailSubscribe");
const emailSubscribeBtn = document.getElementById("emailSubscribeBtn");
const emailSubscribeCheckbtn = document.getElementById("emailSubscribeCheckbtn");
const emailSubscribeError = document.getElementById("subscribeError");


// featured
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

const createBlogCard = ({ imageUrl: imgUrl, title, description: subtitle, authorImgUrl: userImgUrl, readTime = "2min read", imgCustomClass = '', bodyCustomClass = '', cardCustomClass = '' }) => {

    const cardWrapper = createElement({ type: "div", className: `d-flex flex-column flex-sm-row card w-100 rounded-2 overflow-hidden flex-lg-column position-relative z-1 ${cardCustomClass}` })
    const cardImage = createElement({ type: "img", src: baseUrl + imgUrl, className: `rounded-2 ${imgCustomClass}`, alt: title })
    const cardBody = createElement({ type: "div", className: `card-body d-flex flex-column justify-content-between` })
    const cardTitle = createElement({ type: "h5", className: 'card-title font-26 fw-semibold', innerText: title })
    const cardText = createElement({ type: "p", className: 'card-text py-1 font-16', innerText: subtitle })
    const userDiv = createElement({ type: "div", className: 'd-flex align-items-center' })
    const userImg = createElement({ type: "img", src: baseUrl + userImgUrl, alt: "user" })
    const readTimeText = createElement({ type: "p", className: "m-0 font-12", innerText: readTime })


    userDiv.append(userImg, readTimeText);
    cardBody.append(cardTitle, cardText, userDiv);
    cardWrapper.append(cardImage, cardBody);


    return cardWrapper;

}

const renderEventsData = async () => {
    const data = await fetchData(`${baseUrl}/home/eventsData`);
    const { heading: title, subHeading: subtitle, eventCardObject: eventCards } = data;
    const cardContainer = eventheading.parentElement.querySelector('.cardContainer');

    createHeading(eventheading, title, subtitle);
    eventCards.forEach(e => {
        cardContainer.append(createEventCard({ ...e, imgCustomClass: 'event-image', cardCustomClass: 'event-card' }))
    })

}

const renderTeamData = async () => {
    const data = await fetchData(`${baseUrl}/home/teamData`);
    const { heading: title, subHeading: subtitle, teamMembers } = data;
    const cardContainer = teamHeading.parentElement.querySelector('.team-card-container');

    createHeading(teamHeading, title, subtitle);
    teamMembers.forEach(e => {
        cardContainer.append(createTeamCard({ ...e, customColWrapper: "col-6 col-sm-4 col-md-3 ", imgCustomClass: 'event-image rounded-pill', cardCustomClass: 'event-card' }))
    })

}

const renderBlogData = async () => {
    const data = await fetchData(`${baseUrl}/home/blogData`);
    const { heading: title, subHeading: subtitle, blogCards, featured } = data;
    const cardContainer = formHeading.parentElement.querySelector('.card-container');

    createHeading(formHeading, title, subtitle);
    blogCards.forEach(e => {
        cardContainer.append(createBlogCard({ ...e, imgCustomClass: 'blog-image', cardCustomClass: 'blog-card' }))
    });

    // featuredDate.textContent = featured.date;
    // featuredContent.textContent = featured.description;
    // featuredTitle.textContent = featured.title;
}

const renderQuote = async () => {
    const data = await fetchData(`${baseUrl}/home/quoteData`);
    const { heading: title, subHeading: subtitle, quote } = data;
    const cardContainer = quoteHeading.parentElement.querySelector('.quote-card-container');

    createHeading(quoteHeading, title, subtitle);
    cardContainer.innerHTML = `
    <h5 class="font-16 mw-75">
    ${quote.message}
    </h5>
    <h3>
    <img src="${baseUrl}/images/home/quote/quotemarks.svg" class="me-2" alt="quote" />${quote.author}
    </h3>`

}

const renderServicesData = async () => {
    const data = await fetchData(`${baseUrl}/home/servicesData`);
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
renderQuote();
renderEventsData();
renderTeamData();
renderBlogData();
footer();

const carouselItems = carouselContainer.children;
let carouselIndex = 0;

carouselNextBtn.addEventListener("click", () => {
    carouselIndex = (carouselIndex + 1) % carouselItems.length;
    const carouselItemWidth = carouselItems[0].getClientRects()[0].width + 8;
    carouselContainer.style.transform = `translateX(-${carouselIndex * carouselItemWidth}px)`;
});

// carouselBackBtn.addEventListener("click", () => {
//     carouselIndex = (carouselIndex - 1) % carouselItems.length;
//     const carouselItemWidth = carouselItems[0].getClientRects()[0].width + 8;
//     carouselContainer.style.transform = `translateX(${carouselIndex * carouselItemWidth}px)`;
// });

emailSubscribeBtn.addEventListener("click", async () => {

    if (emailSubscribeCheckbtn.checked) {
        emailSubscribeError.innerText = "";
        emailSubscribeBtn.classList.add("disabled");
        const data = await fetchData(`${baseUrl}/subscribe/newsLetter?email="${emailSubscribe.value}"`);

        if (data != null) {
            emailSubscribe.value = "";
            emailSubscribeBtn.innerText = "Email Sent"
        }
        else {
            emailSubscribeError.innerText = "Email is incorrect";
            emailSubscribeError.style.color = "red";
        }

        emailSubscribeBtn.classList.remove("disabled");
    }
})