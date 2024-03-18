import { cartWidget, footer, navBar, createHeading, pagingBreadcrumb, createElement, createTabList } from '../../../helper/helper.js'

const pathElement = document.querySelector(".path");
const currentPath = window.location.pathname;
const path = ("home" + currentPath).trim().split("/");
const headingElement = document.querySelector('.heading');
const eventBody = document.querySelector(".event-body");
const tabDisplayContainer = document.querySelector(".tab-display");
const baseUrl = "http://localhost:3000"
const tabContainer = document.querySelector(".tab-container")
let currentIndex = 0;
let navTabs = [];
const headings =
{
  heading: "Where Faith Finds Hope, and<br class=\"d-none d-md-block\"/> Love Knows No Bounds",
  subHeading: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
};

const createEventBody = ({ imageUrl, title, content }) => {
  const imgDiv = createElement({ type: "div", className: "rounded-card-4 w-100 my-4" });
  const imgElement = createElement({ type: "img", src: baseUrl + imageUrl, alt: title, className: "rounded-card-4 w-100 object-fit-cover" });
  imgDiv.append(imgElement);

  const titleDiv = createElement({ type: "h2", innerText: title, className: "font-45 mb-5 fw-bold roboto-serif" });
  const dateContent=createElement({ type: "p", innerText: title, className: "font-12 fw-light roboto-serif",innerText:`<img class="me-2" src="http:\\\\localhost:3000/images/icons/calendar.svg" width="20px" alt="calendar">October 26, 2023- October 28, 2023` });
  const timeContent=createElement({ type: "p", innerText: title, className: "font-12 fw-light roboto-serif",innerText:`<img class="me-2" src="http:\\\\localhost:3000/images/icons/time.svg" width="20px" alt="time">6:00 pm -12:00 pm` });
  const locationContent=createElement({ type: "p", innerText: title, className: "font-12 fw-light roboto-serif",innerText:`<img class="me-2" src="http:\\\\localhost:3000/images/icons/map.svg" width="20px" alt="map">Durham` });
  const textContent=createElement({ type: "p", innerText: title, className: "font-12 fw-light roboto-serif",innerText:`<img class="me-2" src="http:\\\\localhost:3000/images/icons/content.svg" width="20px" alt="content">Where Faith Finds Hope, Bounds Church` });


  const button = createElement({ type: "button", innerText: "Booking Now", className: "btn my-3 btn-dark font-16 w-25 py-3" });

  const contentDiv = createElement({ type: "p", innerText: content, className: "font-16" })


  eventBody.prepend(imgDiv, titleDiv,dateContent,timeContent,locationContent,textContent, button, contentDiv);
}

const tags = [
  "Blog",
  "Book"
]
const navBarCategories = [
  "Location",
  "Contact-Details",
  "Gallery",
]

const galleryobj = [
  {
    category: "charity",
    imgUrl: "http://localhost:3000/images/gallery/gallery/charity/candle.png"
  },
  {
    category: "charity",
    imgUrl: "http://localhost:3000/images/gallery/gallery/charity/pray.png"
  },
  {
    category: "church",
    imgUrl: "http://localhost:3000/images/gallery/gallery/church/cup.png"
  },
  {
    category: "church",
    imgUrl: "http://localhost:3000/images/gallery/gallery/church/hallway.png"
  },
  {
    category: "church",
    imgUrl: "http://localhost:3000/images/gallery/gallery/church/tomb.png"
  },
  {
    category: "donation",
    imgUrl: "http://localhost:3000/images/gallery/gallery/donation/gold.png"
  },
];

const renderMap = (displayContainer) => {
  const mapContainer = createElement({ type: 'div', id: "map", className: "map-container mt-4" })
  displayContainer.append(mapContainer);
  initMap();

  const tagDiv = createElement({ type: "h4", className: "font-16 fw-bold mt-4" });
  tagDiv.innerHTML = "Tags:&nbsp;";
  tags.forEach((e) => tagDiv.append(createElement({ type: "span", className: "font-12 fw-semibold border px-3 py-2 mx-2 text-uppercase", innerText: e })));

  // const socialDiv=createElement({ type: "div", className: "font-16 fw-bold" });



  displayContainer.append(tagDiv);
}


const rendergallery = (gallery) => {
  galleryobj.forEach((e, index) => {
    const itemDiv = createElement({ type: "div", className: "rounded overflow-hidden col-6 col-md-4", });

    const img = createElement({ type: "img", className: "h-100 w-100 rounded object-fit-cover", src: e.imgUrl, alt: e.category + index });
    itemDiv.append(img);


    gallery.append(itemDiv);

  });
}

const renderTabCategory = (hashName) => {
  tabDisplayContainer.innerHTML = ""
  if (hashName === "#location") {
    renderMap(tabDisplayContainer);
  } else if (hashName === "#gallery") {
    const galleryWrapper=createElement({type:"div",className:"row g-2"});
    tabDisplayContainer.appendChild(galleryWrapper)
    rendergallery(galleryWrapper);
  }
}

let map;

async function initMap() {
  const position = { lat: 22.57769901797826, lng: 88.43137841746523 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 18,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}


navBar();
cartWidget();
createHeading(headingElement, headings.heading, headings.subHeading, true);

createEventBody({
  imageUrl: "/images/events/hero/hero.png",
  title: "Where Faith Finds Hope,",
  content: "long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to.long established.<br><br>1.Worship: Experience an uplifting time of worship through music, hymns, and prayers.<br><br>2.Message: Listen to a powerful message from our pastor, as he shares insights and reflections on the significance of the resurrection of Jesus Christ.<br><br>3.Fellowship: Enjoy a time of fellowship and connect with others in the community over light refreshments and snacks.<br><br>long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to.long established."
});


navTabs = createTabList(tabContainer, navBarCategories, false)

navTabs[currentIndex].classList.add("active")
renderTabCategory("#location");
pagingBreadcrumb(pathElement, path.slice(0, path.length));
footer();

window.addEventListener("hashchange", () => {
  console.log(navTabs[currentIndex]);
  navTabs[currentIndex].classList.remove("active")
  currentIndex = navTabs.findIndex((item) => item.getAttribute("href") === location.hash);
  navTabs[currentIndex].classList.add("active")
  renderTabCategory(location.hash);
})