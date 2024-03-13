import { cartWidget, createAccordion, createHeading, navBar } from "../helper/helper.js";

navBar('bg-white');
cartWidget();


const headingElement = document.querySelector('.heading');
const accordionContainer = document.querySelector('.accordion');

const headings =
{
    heading: "Frequently asked questions",
    subHeading: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like."
};

const accordionFAQs = [
    {
        title: "Accordion 1",
        subtitle: "collapse plugin adds the appropriate classes that we use to style each element. These classescontrol the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"
    },
    {
        title: "Accordion 2",
        subtitle: "collapse plugin adds the appropriate classes that we use to style each element. These classescontrol the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"
    },
    {
        title: "Accordion 3",
        subtitle: "collapse plugin adds the appropriate classes that we use to style each element. These classescontrol the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"
    },
    {
        title: "Accordion 4",
        subtitle: "collapse plugin adds the appropriate classes that we use to style each element. These classescontrol the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"
    },
]

createHeading(headingElement, headings.heading,headings.subHeading,true);


accordionFAQs.forEach((faq, index) => {
    accordionContainer.append(createAccordion({ ...faq, index }));
})