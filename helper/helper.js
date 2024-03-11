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