const backendUrl = "http://localhost:3000"


const cartItemCount = () => {
    return 2;
}

export const cartWidget = () => {
    const cart = document.querySelector(".cart");
    const cartIconWrapper = document.createElement("a");
    cartIconWrapper.setAttribute("class", "position-relative");

    const cartIcon = document.createElement("img");
    cartIcon.src = "http://localhost:3000/images/navbar/bag.svg";
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

export const navBar = (navbarBgClass) => {
    const navBar = document.querySelector(".navbar");
    navBar.setAttribute("class", `navbar navbar-expand-lg border border-0 border-bottom nav-height ${navbarBgClass}`)

    const navbarBrandWrapper = document.createElement('DIV');
    navbarBrandWrapper.setAttribute('class', 'container');

    const navbarBrand = document.createElement('div');
    navbarBrand.setAttribute('class', 'navbar-brand d-flex align-items-center d-lg-none navbar-logo-2');
    navbarBrand.setAttribute('href', '#');

    const navbarLogoMin = document.createElement('img');
    navbarLogoMin.setAttribute('src', 'http://localhost:3000/images/navbar/logo-min.svg');
    navbarLogoMin.setAttribute('alt', 'logo');
    navbarLogoMin.setAttribute('width', '50px');


    const navbarLogoText = document.createElement('h3');
    navbarLogoText.setAttribute('class', 'glitten-all-caps ms-2 d-inline-block fit-content m-0 mt-2');
    navbarLogoText.innerText = "Shrine"
    console.log(navbarLogoMin, navbarLogoText);
    navbarBrand.append(navbarLogoMin, navbarLogoText);

    navbarBrandWrapper.appendChild(navbarBrand);


    const navbarToggle = document.createElement('BUTTON');
    navbarToggle.setAttribute('class', 'navbar-toggler');
    navbarToggle.setAttribute('type', 'button');
    navbarToggle.setAttribute('data-bs-toggle', 'collapse');
    navbarToggle.setAttribute('data-bs-target', '#navbarSupportedContent');
    navbarToggle.setAttribute('aria-controls', 'navbarSupportedContent');
    navbarToggle.setAttribute('aria-expanded', 'false');
    navbarToggle.setAttribute('aria-label', 'Toggle navigation');
    navbarBrandWrapper.appendChild(navbarToggle);

    const navbarToggleIcon = document.createElement('SPAN');
    navbarToggleIcon.setAttribute('class', 'navbar-toggler-icon');
    navbarToggle.appendChild(navbarToggleIcon);

    const navbarLinksWrapper = document.createElement('DIV');
    navbarLinksWrapper.setAttribute('class', 'collapse navbar-collapse me-lg-5');
    navbarLinksWrapper.setAttribute('id', 'navbarSupportedContent');
    navbarBrandWrapper.appendChild(navbarLinksWrapper);

    const navbarNav = document.createElement('UL');
    navbarNav.setAttribute('class', 'navbar-nav mx-auto gap-4 mb-2 mb-lg-0  d-flex align-items-center justify-content-center');
    navbarLinksWrapper.appendChild(navbarNav);

    const createNavItem = (linkName) => {
        const navItem = document.createElement('LI');
        navItem.setAttribute('class', 'nav-item');

        const navItemAnchor = document.createElement('A');
        navItemAnchor.setAttribute('class', 'nav-link position-relative hover-link');
        navItemAnchor.setAttribute('aria-current', 'page');
        navItemAnchor.setAttribute('href', '#');
        navItemAnchor.append(linkName);

        navItem.append(navItemAnchor);
        return navItem;
    }

    const homeNavItem = createNavItem("Home");
    const pagesNavItem = createNavItem("Pages");
    const blogNavItem = createNavItem("Blog");
    const donationNavItem = createNavItem("Donation");


    const navbarLgLogo = document.createElement('A');
    navbarLgLogo.setAttribute('class', `navbar-brand ${navbarBgClass} mx-3 position-relative navbar-logo d-none d-lg-inline-flex  align-items-center fit-content px-4`);
    navbarLgLogo.setAttribute('href', '#');

    const navbarLogoLg = document.createElement('img');
    navbarLogoLg.setAttribute('src', 'http://localhost:3000/images/navbar/logo-min.svg');
    navbarLogoLg.setAttribute('alt', 'logo');
    navbarLogoLg.setAttribute('width', '50px');
    navbarLgLogo.appendChild(navbarLogoLg);

    const navbarLgLogoText = document.createElement('H3');
    navbarLgLogoText.setAttribute('class', 'glitten-all-caps ms-2 d-inline-block fit-content m-0 mt-3');
    navbarLgLogoText.innerText = "SHRINE";
    navbarLgLogo.appendChild(navbarLgLogoText);

    const shopNavItem = createNavItem("Shop");
    const contactNavItem = createNavItem("Contacts");

    const searchIcon = document.createElement('IMG');
    searchIcon.setAttribute('src', 'http://localhost:3000/images/navbar/search.svg');
    searchIcon.setAttribute('alt', 'search');

    const searchNavItem = createNavItem(searchIcon);


    const cartNavItem = document.createElement('LI');
    cartNavItem.setAttribute('class', 'nav-item cart');
    navbarNav.appendChild(cartNavItem);

    navbarNav.append(homeNavItem, pagesNavItem, blogNavItem, donationNavItem, navbarLgLogo, shopNavItem, contactNavItem, searchNavItem, cartNavItem);

    navBar.appendChild(navbarBrandWrapper);
}

export const footer = (footerClass) => {
    const footer = document.querySelector(".footer-section");

    const footerLogoWrapper = document.createElement('DIV');
    footerLogoWrapper.setAttribute('class', 'container border-secondary border-0 border-bottom border-1 p-3 d-flex flex-column align-items-start align-items-lg-end flex-md-row justify-content-between ');

    const footerLogo = document.createElement('IMG');
    footerLogo.setAttribute('src', 'http://localhost:3000/images/footer/logo.svg');
    footerLogo.setAttribute('alt', 'logo');
    footerLogoWrapper.appendChild(footerLogo);

    const footerText = document.createElement('P');
    footerText.setAttribute('class', 'font-10 mt-3 font-tertiary');
    footerText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br> eiusmod tempor incididunt";
    footerLogoWrapper.appendChild(footerText);

    const footerContainer = document.createElement('DIV');
    footerContainer.setAttribute('class', 'container');

    const footerContentWrapper = document.createElement('DIV');
    footerContentWrapper.setAttribute('class', 'row mt-5');
    footerContainer.appendChild(footerContentWrapper);

    const footerLinksWrapper = document.createElement('DIV');
    footerLinksWrapper.setAttribute('class', 'col-12 col-lg-8');
    footerContentWrapper.appendChild(footerLinksWrapper);

    const footerColumnWrapper = document.createElement('DIV');
    footerColumnWrapper.setAttribute('class', 'row mx-auto');
    footerLinksWrapper.appendChild(footerColumnWrapper);

    const createFooterLinkHeader = (headerName) => {
        const linkHeader = document.createElement('H3');
        linkHeader.setAttribute('class', 'fw-bold font-20 text-white');
        linkHeader.innerHTML = headerName;
        return linkHeader

    }

    const createFooterLinkItem = (linkName) => {
        const link = document.createElement('H3');
        link.setAttribute('class', 'my-4 font-16 font-tertiary');
        link.setAttribute('role', 'button');
        link.innerHTML = linkName;
        return link

    }


    const quickLinks = document.createElement('DIV');
    quickLinks.setAttribute('class', 'col-4');
    quickLinks.appendChild(createFooterLinkHeader("Quick Links"));
    quickLinks.appendChild(createFooterLinkItem("Features"));
    quickLinks.appendChild(createFooterLinkItem("Pricing"));
    quickLinks.appendChild(createFooterLinkItem("Case Study"));
    quickLinks.appendChild(createFooterLinkItem("Reviews"));
    quickLinks.appendChild(createFooterLinkItem("Updates"));
    footerColumnWrapper.appendChild(quickLinks);

    const companyLinks = document.createElement('DIV');
    companyLinks.setAttribute('class', 'col-4');
    companyLinks.appendChild(createFooterLinkHeader("Company"));
    companyLinks.appendChild(createFooterLinkItem("About"));
    companyLinks.appendChild(createFooterLinkItem("Pricing"));
    companyLinks.appendChild(createFooterLinkItem("Case Study"));
    companyLinks.appendChild(createFooterLinkItem("Reviews"));
    companyLinks.appendChild(createFooterLinkItem("Updates"));
    footerColumnWrapper.appendChild(companyLinks);

    const supportLinks = document.createElement('DIV');
    supportLinks.setAttribute('class', 'col-4');
    supportLinks.appendChild(createFooterLinkHeader("Company"));
    supportLinks.appendChild(createFooterLinkItem("About"));
    supportLinks.appendChild(createFooterLinkItem("Pricing"));
    supportLinks.appendChild(createFooterLinkItem("Case Study"));
    supportLinks.appendChild(createFooterLinkItem("Reviews"));
    supportLinks.appendChild(createFooterLinkItem("Updates"));
    footerColumnWrapper.appendChild(supportLinks);

    const newsletterWrapper = document.createElement('DIV');
    newsletterWrapper.setAttribute('class', 'col-12 col-lg-4 mt-5 mt-lg-0 d-flex flex-column align-items-center align-items-md-start ');
    footerContentWrapper.appendChild(newsletterWrapper);

    const newsLetterHeading = document.createElement('H3');
    newsLetterHeading.setAttribute('class', 'f2-bold font-20 text-white');
    newsLetterHeading.innerText = "Subscribe to our news Letter";
    newsletterWrapper.appendChild(newsLetterHeading);

    const newsletterSubTitle = document.createElement('H4');
    newsletterSubTitle.setAttribute('class', 'my-4 font-16 font-tertiary');
    newsletterSubTitle.innerText = "Lorem ipsum dolor sit amet consectetur adipiscing elit\\n aliquam.";
    newsletterWrapper.appendChild(newsletterSubTitle);

    const subscribeEmailInput = document.createElement('INPUT');
    subscribeEmailInput.setAttribute('type', 'email');
    subscribeEmailInput.setAttribute('placeholder', 'Enter your email');
    subscribeEmailInput.setAttribute('class', 'bg-input border border-0 p-2 px-3 rounded rounded-3 focus-ring text-white ');
    subscribeEmailInput.setAttribute('style', '--bs-focus-ring-color: rgba(const(--bs-success-rgb), 0)');
    newsletterWrapper.appendChild(subscribeEmailInput);

    const subscribeButton = document.createElement('BUTTON');
    subscribeButton.setAttribute('class', 'bg-primary-red border border-0 px-3 py-2 my-4 rounded rounded-3 text-white hover-icon');
    subscribeButton.innerText = "Subscribe";
    newsletterWrapper.appendChild(subscribeButton);

    const footerCopyright = document.createElement('DIV');
    footerCopyright.setAttribute('class', 'container border-secondary border-0 border-top border-1 mt-4 p-2 d-flex flex-column flex-md-row justify-content-between align-items-center ');

    const copyrightText = document.createElement('P');
    copyrightText.setAttribute('class', 'my-4 font-10 font-tertiary');
    copyrightText.innerHTML = "Copyright &#169; 2022 Shrine | All Rights Reserved";
    footerCopyright.appendChild(copyrightText);

    const footerIconsWrapper = document.createElement('DIV');
    footerIconsWrapper.setAttribute('class', 'd-flex gap-3 mb-5 mb-md-0');
    footerCopyright.appendChild(footerIconsWrapper);

    const createFooterIcon = (iconName, iconUrl) => {
        const footerIcon = document.createElement('IMG');
        footerIcon.setAttribute('role', 'button');
        footerIcon.setAttribute('src', iconUrl);
        footerIcon.setAttribute('alt', iconName);
        footerIcon.setAttribute('class', 'hover-icon');

        return footerIcon
    }


    footerIconsWrapper.appendChild(createFooterIcon('instagram', 'http://localhost:3000/images/footer/instagram.svg'));
    footerIconsWrapper.appendChild(createFooterIcon('twitter', 'http://localhost:3000/images/footer/twitter.svg'));
    footerIconsWrapper.appendChild(createFooterIcon('whatsapp', 'http://localhost:3000/images/footer/whatsapp.svg'));
    footerIconsWrapper.appendChild(createFooterIcon('youtube', 'http://localhost:3000/images/footer/youtube.svg'));
    footerIconsWrapper.appendChild(createFooterIcon('facebook', 'http://localhost:3000/images/footer/facebook.svg'));


    footer.append(footerLogoWrapper, footerContainer, footerCopyright);
}

export const createHeading = (headingElement, title, subtitle, spacing = false, customClassSubt = "") => {
    const heading = document.createElement("h4");
    heading.setAttribute("class", `text-wrap font-45 fw-semibold roboto-serif my-3 border-3 ps-3 border-danger border-start w-100 ${spacing ? 'my-4' : ''}`);
    heading.innerHTML = title;


    const subHeading = document.createElement("h5");
    subHeading.setAttribute("class", `font-16 mw-75 ${spacing ? 'pt-2' : ''} ${customClassSubt}`);
    subHeading.innerHTML = subtitle;

    headingElement.append(heading, subHeading);
}

export const createEventCard = ({ imgUrl, title, description: subtitle, button = "See more", date, location, time, imgCustomClass = '', bodyCustomClass = '', cardCustomClass = '' }) => {

    const card = document.createElement("div");
    card.setAttribute("class", `card mb-3 overflow-hidden flex-shrink-0 ${cardCustomClass}`);

    const rowWrapper = document.createElement("div");
    rowWrapper.setAttribute("class", "row g-0");

    const imageWrapper = document.createElement("div");
    imageWrapper.setAttribute("class", "col-12 col-md-4");


    const image = document.createElement("img");
    image.src = backendUrl + imgUrl;
    image.setAttribute("class", `w-100 h-100 object-fit-cover ${imgCustomClass}`);
    image.alt = title;


    const cardBodyWrapper = document.createElement("div");
    cardBodyWrapper.setAttribute("class", "col-12 col-md-8 d-flex align-items-center");

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", `card-body ${bodyCustomClass}`);

    if (date) {
        const dateElement = document.createElement("h6");
        dateElement.setAttribute("class", "font-16 fw-light")
        dateElement.textContent = date;
        cardBody.append(dateElement);
    }
    if (location) {
        const locationElement = document.createElement("h6");
        locationElement.setAttribute("class", "font-16 fw-light")
        locationElement.textContent = location;
        cardBody.append(locationElement);
    }
    if (time) {
        const timeElement = document.createElement("h6");
        timeElement.setAttribute("class", "font-16 fw-light")
        timeElement.textContent = time;
        cardBody.append(timeElement);
    }

    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title mt-3 roboto-serif fw-bold font-26");
    cardTitle.innerHTML = title;

    const cardText = document.createElement("p");
    cardText.innerHTML = subtitle;
    cardText.setAttribute("class", "card-text mb-4 fw-light font-16");
    cardBody.append(cardTitle, cardText);


    if (button) {
        const buttonElement = document.createElement("button");
        buttonElement.textContent = button;
        buttonElement.setAttribute("class", "btn btn-dark")
        cardBody.append(buttonElement);
    }


    cardBodyWrapper.append(cardBody);
    imageWrapper.append(image);
    rowWrapper.append(imageWrapper, cardBodyWrapper);
    card.append(rowWrapper);

    return card;

}

export const createBlogCard = ({ imageUrl: imgUrl, title, description: subtitle, authorImgUrl: userImgUrl, readTime = "2min read", imgCustomClass = '', bodyCustomClass = '', cardCustomClass = '' }) => {

    const cardWrapper = document.createElement('div');
    cardWrapper.setAttribute('class', 'card flex-shrink-0 position-relative z-1');
    cardWrapper.setAttribute('style', 'max-width: 280px;aspect-ratio:1');

    const cardImage = document.createElement('img');
    cardImage.src = backendUrl + imgUrl
    cardImage.setAttribute('class', `card-img-top ${imgUrl}`);
    cardImage.alt = title;

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.setAttribute('class', 'card-title font-26 fw-semibold');
    cardTitle.innerHTML = title;


    const cardText = document.createElement('p');
    cardText.setAttribute('class', 'card-text py-1 font-16');
    cardText.innerHTML = subtitle;


    const userDiv = document.createElement('div');
    userDiv.setAttribute('class', 'd-flex align-items-center');


    const userImg = document.createElement("img");
    userImg.src = backendUrl + userImgUrl;
    userImg.alt = "user";

    const readTimeText = document.createElement("p");
    readTimeText.textContent = readTime;
    readTimeText.setAttribute("class", "m-0 font-12")


    userDiv.append(userImg, readTimeText);
    cardBody.append(cardTitle, cardText, userDiv);
    cardWrapper.append(cardImage, cardBody);


    return cardWrapper;

}

export const createServiceCard = ({ imgUrl, title, subtitle, imgCustomClass = '', bodyCustomClass = '', cardCustomClass = 'rounded-0 rounded-top-5 rounded-end-5' }) => {
    const divWrapper = document.createElement("div");
    divWrapper.setAttribute("class", `card p-3 hover-card border border-0 flex-shrink-0 d-flex flex-column align-items-center ${cardCustomClass}`);
    divWrapper.setAttribute("style", "max-width:250px");
    divWrapper.setAttribute("role", "button");

    const imgWrapper = document.createElement("img");
    imgWrapper.setAttribute("alt", title);
    imgWrapper.setAttribute("src", backendUrl + imgUrl);
    imgWrapper.setAttribute("width", "50px");


    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body text-center fit-content");

    const cardTitle = document.createElement("h4");
    cardTitle.setAttribute("class", "card-title font-26 fw-semibold");
    cardTitle.innerHTML = title;


    const subTitle = document.createElement("p");
    subTitle.setAttribute("class", "card-text font-16 fw-light");
    subTitle.innerHTML = subtitle;

    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("class", "font-16 w-100 text-uppercase btn-square d-flex align-items-center justify-content-center border-0 bg-transparent gap-2");

    const readMoreSpan = document.createElement("span");
    readMoreSpan.setAttribute("class", "text-content");
    readMoreSpan.innerText = "Read More";

    const nextIconSpan = document.createElement("span");
    nextIconSpan.setAttribute("class", "rounded-circle d-flex align-items-center justify-content-center bg-danger text-white h-100");

    const nextIcon = document.createElement("img");
    nextIcon.src = backendUrl + "/images/icons/arrow-right.svg";
    nextIcon.alt = "next-icon";
    nextIcon.setAttribute("width", "20px");


    nextIconSpan.appendChild(nextIcon);
    buttonElement.append(readMoreSpan, nextIconSpan);
    cardBody.append(cardTitle, subTitle, buttonElement);
    divWrapper.append(imgWrapper, cardBody);

    return divWrapper;

}

export const createTeamCard = ({ imageUrl, name: title, penName: subtitle, imgCustomClass = '', bodyCustomClass = '', cardCustomClass = '' }) => {

    const teamWrapper = document.createElement('div');
    teamWrapper.setAttribute('class', 'col-6 col-sm-4 col-md-3 d-flex justify-content-center');

    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'card team-card border border-0');


    const imgElement = document.createElement('img');
    imgElement.src = backendUrl + imageUrl;
    imgElement.setAttribute('class', `rounded-pill ${imgCustomClass}`);
    imgElement.alt = title;

    const cardBodyWrapper = document.createElement('div');
    cardBodyWrapper.setAttribute('class', `d-flex flex-md-row flex-column-reverse gap-2 justify-content-md-evenly align-items-center mt-3 ${bodyCustomClass}`);

    const shareIconDiv = document.createElement('div');
    shareIconDiv.setAttribute('class', 'share-icon rounded-circle d-flex justify-content-center align-items-center');
    shareIconDiv.role = "button"


    const shareIcon = document.createElement('img');
    shareIcon.src = 'http://localhost:3000/images/team/share.svg';
    shareIcon.alt = 'share-icon';

    const nameWrapper = document.createElement('div');

    const name = document.createElement('h4');
    name.setAttribute('class', 'fw-bold font-26');
    name.textContent = title;

    const subTitle = document.createElement('h6');
    subTitle.setAttribute('class', 'fw-light font-16');
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

export const pagingBreadcrumb = (pathElement, url) => {

    pathElement.setAttribute("class", "d-flex justify-content-center my-3");
    pathElement.setAttribute("style", "--bs-breadcrumb-divider: '>';");

    const breadcrumbList = document.createElement("ol");
    breadcrumbList.setAttribute("class", "breadcrumb m-0 font-16");


    url.forEach((urlItem, index) => {
        if (urlItem) {
            const item = document.createElement("li");
            item.classList.add("breadcrumb-item");

            if (index > 0) {
                item.classList.add("fw-bold");
            }

            const link = document.createElement("a");
            link.setAttribute("class", "text-decoration-none font-12 text-black text-uppercase")
            link.href = "#";
            link.innerText = urlItem;

            item.append(link);
            breadcrumbList.append(item);
        }
    })

    pathElement.append(breadcrumbList);

}