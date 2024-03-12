const cart = document.querySelector(".cart");

const cartItemCount = () => {
    return 2;
}

export const cartWidget = () => {
    const cartIconWrapper = document.createElement("a");
    cartIconWrapper.setAttribute("class", "position-relative");

    const cartIcon = document.createElement("img");
    cartIcon.src = "images/navbar/bag.svg";
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
    heading.setAttribute("class", "fs-1 border-3 ps-3 border-danger border-start w-100");
    heading.innerHTML = headingObject.heading;


    const subHeading = document.createElement("h5");
    subHeading.setAttribute("class", "fs-6");
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
    cardWrapper.setAttribute('style', 'max-width: 330px;aspect-ratio:1');

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


export const createTeamCard = ({ imgUrl, title, subtitle, userImgUrl, readTime, imgCustomClass = '', bodyCustomClass = '', cardCustomClass = '' }) => {
    const cardWrapper = document.createElement('div');
    cardWrapper.setAttribute('class', 'card flex-shrink-0');
    cardWrapper.setAttribute('style', 'max-width: 330px;aspect-ratio:1');

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