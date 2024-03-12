const cart = document.querySelector(".cart");

const cartItemCount = () => {
    return 2;
}

export const cartWidget = () => {
    const cartIconWrapper = document.createElement("a");
    cartIconWrapper.setAttribute("class", "position-relative");

    const cartIcon = document.createElement("img");
    cartIcon.src = "/images/navbar/bag.svg";
    cartIcon.alt = "bag";

    const cartBadge = document.createElement("span");
    cartBadge.setAttribute("class", "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger");
    const cartCount = cartItemCount();
    if (cartCount === 0)
        cartBadge.style.display = "none";
    cartBadge.append(cartCount);

    cartIconWrapper.append(cartIcon, cartBadge);
    cart.append(cartIconWrapper);

}

export const createHeading = (headingElement, headingObject) => {
    const heading = document.createElement("h4");
    heading.setAttribute("class", "fs-1 my-3 border-3 ps-3 border-danger border-start w-100");
    heading.innerHTML = headingObject.heading;


    const subHeading = document.createElement("h5");
    subHeading.setAttribute("class", "fs-6 mw-75");

    subHeading.innerText = headingObject.subHeading;

    headingElement.append(heading, subHeading);
}


export const createEventCard = ({ imgUrl, title, subtitle, button, date, location, time, imgCustomClass = '', bodyCustomClass = '', cardCustomClass = '' }) => {

    const card = document.createElement("div");
    card.setAttribute("class", `card mb-3 flex-shrink-0 ${cardCustomClass}`);



    const rowWrapper = document.createElement("div");
    rowWrapper.setAttribute("class", "row g-0");

    const imageWrapper = document.createElement("div");
    imageWrapper.setAttribute("class", "col-12 col-sm-5");


    const image = document.createElement("img");
    image.src = imgUrl;
    image.setAttribute("class", `w-100 rounded-start object-fit-cover ${imgCustomClass}`);
    image.alt = title;


    const cardBodyWrapper = document.createElement("div");
    cardBodyWrapper.setAttribute("class", "col-12 col-sm-7");

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", `card-body ${bodyCustomClass}`);

    if (date) {
        const dateElement = document.createElement("h6");
        dateElement.textContent = date;
        cardBody.append(dateElement);
    }
    if (location) {
        const locationElement = document.createElement("h6");
        locationElement.textContent = location;
        cardBody.append(locationElement);
    }
    if (time) {
        const timeElement = document.createElement("h6");
        timeElement.textContent = time;
        cardBody.append(timeElement);
    }

    const cardTitle = document.createElement("h5");
    cardTitle.innerHTML = title;
    cardTitle.setAttribute("class", "card-title");

    const cardText = document.createElement("p");
    cardText.innerHTML = subtitle;
    cardText.setAttribute("class", "card-text");
    cardBody.append(cardTitle, cardText);


    if (button) {
        const buttonElement = document.createElement("button");
        buttonElement.textContent = button;
        buttonElement.setAttribute("class", "btn btn-outline-dark")
        cardBody.append(buttonElement);
    }


    cardBodyWrapper.append(cardBody);
    imageWrapper.append(image);
    rowWrapper.append(imageWrapper, cardBodyWrapper);
    card.append(rowWrapper);

    return card;

}

export const createBlogCard = ({ imgUrl, title, subtitle, userImgUrl, readTime, imgCustomClass = '', bodyCustomClass = '', cardCustomClass = '' }) => {

    const cardWrapper = document.createElement('div');
    cardWrapper.setAttribute('class', 'card flex-shrink-0');
    cardWrapper.setAttribute('style', 'max-width: 280px;aspect-ratio:1');

    const cardImage = document.createElement('img');
    cardImage.src = imgUrl
    cardImage.setAttribute('class', `card-img-top ${imgUrl}`);
    cardImage.alt = title;

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.setAttribute('class', 'card-title');
    cardTitle.innerHTML = title;


    const cardText = document.createElement('p');
    cardText.setAttribute('class', 'card-text py-3');
    cardText.innerHTML = subtitle;


    const userDiv = document.createElement('div');
    userDiv.setAttribute('class', 'd-flex align-items-center');


    const userImg = document.createElement("img");
    userImg.src = userImgUrl;
    userImg.alt = "user";

    const readTimeText = document.createElement("p");
    readTimeText.textContent = readTime;
    readTimeText.setAttribute("class", "m-0")


    userDiv.append(userImg, readTimeText);
    cardBody.append(cardTitle, cardText, userDiv);
    cardWrapper.append(cardImage, cardBody);


    return cardWrapper;

}

export const createServiceCard = ({ imgUrl, title, subtitle, imgCustomClass = '', bodyCustomClass = '', cardCustomClass = '' }) => { }

export const createTeamCard = ({ imgUrl, title, subtitle, imgCustomClass = '', bodyCustomClass = '', cardCustomClass = '' }) => {

    const teamWrapper = document.createElement('div');
    teamWrapper.setAttribute('class', 'col-6 col-lg-3');

    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'card border border-0');


    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
    imgElement.setAttribute('class', `rounded-pill ${imgCustomClass}`);
    imgElement.alt = title;

    const cardBodyWrapper = document.createElement('div');
    cardBodyWrapper.setAttribute('class', `d-flex flex-md-row flex-column-reverse gap-2 justify-content-md-evenly align-items-center mt-3 ${bodyCustomClass}`);

    const shareIconDiv = document.createElement('div');
    shareIconDiv.setAttribute('class', 'share-icon rounded-circle d-flex justify-content-center align-items-center');
    shareIconDiv.role = "button"


    const shareIcon = document.createElement('img');
    shareIcon.src = './images/team/share.svg';
    shareIcon.alt = 'share-icon';

    const nameWrapper = document.createElement('div');

    const name = document.createElement('h4');
    name.setAttribute('class', 'fw-bold fs-5');
    name.textContent = title;

    const subTitle = document.createElement('h6');
    subTitle.textContent = subtitle;

    nameWrapper.append(name, subTitle);
    shareIconDiv.appendChild(shareIcon);
    cardBodyWrapper.append(shareIconDiv, nameWrapper);
    cardDiv.append(imgElement, cardBodyWrapper);
    teamWrapper.appendChild(cardDiv);

    return teamWrapper;
}


export const createAccordion = ({ title, subtitle, index }) => {

    const accordionWrapper = document.createElement('DIV');
    accordionWrapper.setAttribute('class', 'accordion-item border-0 border-bottom flex-shrink-0');

    const accordionTitle = document.createElement('H2');
    accordionTitle.setAttribute('class', 'accordion-header');
    accordionWrapper.appendChild(accordionTitle);

    const accordionButton = document.createElement('BUTTON');
    accordionButton.setAttribute('class', 'accordion-button collapsed');
    accordionButton.setAttribute('type', 'button');
    accordionButton.setAttribute('data-bs-toggle', 'collapse');
    accordionButton.setAttribute('data-bs-target', `#collapse${index}`);
    accordionButton.textContent = title;
    accordionTitle.appendChild(accordionButton);

    const accordionContentDiv = document.createElement('DIV');
    accordionContentDiv.setAttribute('id', `collapse${index}`);
    accordionContentDiv.setAttribute('class', 'accordion-collapse collapse');
    accordionContentDiv.setAttribute('data-bs-parent', '#accordionExample');
    accordionWrapper.appendChild(accordionContentDiv);

    const accordionBody = document.createElement('DIV');
    accordionBody.setAttribute('class', 'accordion-body');
    accordionBody.textContent = subtitle;
    accordionContentDiv.appendChild(accordionBody);


    return accordionWrapper;

}