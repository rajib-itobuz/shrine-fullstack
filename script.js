import { cartWidget, createBlogCard, createEventCard, createHeading, createServiceCard, createTeamCard, footer, navBar } from './helper/helper.js';


const headings = document.querySelectorAll(".heading");

const sectionHeaders = [
    {
        heading: "Your Satisfaction is<br/> our business",
        subHeading: "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long.",
        serviceCards: [
            {
                imgUrl: '/images/satisfaction/church.svg',
                title: "Our churches",
                subtitle: "A long established fact that a reade."
            },
            {
                imgUrl: '/images/satisfaction/church.svg',
                title: "Our churches",
                subtitle: "A long established fact that a reade."
            },
            {
                imgUrl: '/images/satisfaction/church.svg',
                title: "Our churches",
                subtitle: "A long established fact that a reade."
            },
            {
                imgUrl: '/images/satisfaction/church.svg',
                title: "Our churches",
                subtitle: "A long established fact that a reade."
            },
            {
                imgUrl: '/images/satisfaction/church.svg',
                title: "Our churches",
                subtitle: "A long established fact that a reade."
            },
        ]
    },
    {
        heading: "Growing Stronger in<br class=\"d-none d-lg-block\"/> God\'s our work",
        subHeading: "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long."
    },
    {
        heading: "Feel god closer to<br class=\"d-none d-lg-block\"/> your members",
        subHeading: "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long.",
        teamMembers: [
            {
                imgUrl: './images/team/pope.png',
                title: 'Vonda Sanders',
                subtitle: 'Sir Gerry Serrano',
            },
            {
                imgUrl: './images/team/lori.png',
                title: 'Lori Vega',
                subtitle: 'Sir Gerry Serrano',
            },
            {
                imgUrl: './images/team/annie.png',
                title: 'Annie Trevano',
                subtitle: 'Sir Gerry Serrano',
            },
            {
                imgUrl: './images/team/ronnie.png',
                title: 'Ronnie Ferrel',
                subtitle: 'Sir Gerry Serrano',
            },
        ]
    },
    {
        heading: "See our all<br class=\"d-none d-lg-block\"/> events",
        subHeading: "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long.",
        eventCardObject: [
            {
                imgUrl: './images/events/events.png',
                title: 'Mindfullness Meidtation',
                subtitle: 'A long established fact that a reader will be distracted by the readable content of...',
                date: '24.12.2023-28.12.2023',
                location: 'Russian Federation St. Peter\'s Church',
                time: '4:38-8:24',
                button: 'Join Now',
            },
            {
                imgUrl: './images/events/events.png',
                title: 'The positive aura seminar',
                subtitle: 'A long established fact that a reader will be distracted by the readable content of...',
                date: '24.12.2023-28.12.2023',
                location: 'Russian Federation St. Peter\'s Church',
                time: '4:38-8:24',
                button: 'Join Now',
            },
            {
                imgUrl: './images/events/events.png',
                title: 'Mindfullness Meidtation',
                subtitle: 'A long established fact that a reader will be distracted by the readable content of...',
                date: '24.12.2023-28.12.2023',
                location: 'Russian Federation St. Peter\'s Church',
                time: '4:38-8:24',
                button: 'Join Now',
            }
        ]
    }, {
        heading: "Our latest<br class=\"d-none d-lg-block\"/> Articles",
        subHeading: "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long.",
        blogCards: [
            {
                imgUrl: './images/articles/church.png',
                title: 'Baptism Sunday of<br/> church',
                subtitle: 'Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...',
                userImgUrl: './images/subscribe/mary.png',
                readTime: '2min read'
            },
            {
                imgUrl: './images/articles/church.png',
                title: 'Baptism Sunday of<br/> church',
                subtitle: 'Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...',
                userImgUrl: './images/subscribe/mary.png',
                readTime: '2min read'
            },
            {
                imgUrl: './images/articles/church.png',
                title: 'Baptism Sunday of<br/> church',
                subtitle: 'Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...',
                userImgUrl: './images/subscribe/mary.png',
                readTime: '2min read'
            }
        ]
    }
]

navBar('hero-primary');
cartWidget();
footer();
// footer();


headings.forEach((headingElement, index) => {
    const { heading: title,subHeading: subtitle,serviceCards,eventCardObject: eventCards, blogCards, teamMembers } = sectionHeaders[index];
    
    
    createHeading(headingElement,title,subtitle);

    if (eventCards) {
        const cardContainer = headingElement.parentElement.querySelector('.cardContainer');

        eventCards.forEach(e => {
            cardContainer.append(createEventCard({ ...e, imgCustomClass: 'event-image', cardCustomClass: 'event-card' }))
        })
    }


    if (blogCards) {
        const cardContainer = headingElement.parentElement.querySelector(`.cardContainer`);
        blogCards.forEach(e => {
            cardContainer.append(createBlogCard({ ...e }))
        })
    }

    if (teamMembers) {
        const cardContainer = headingElement.parentElement.querySelector(`.team-card-container`);
        teamMembers.forEach(e => {
            cardContainer.append(createTeamCard({ ...e, bodyCustomClass: 'w-100' }))
        })
    }


    if (serviceCards) {
        const cardContainer = headingElement.parentElement.querySelector(`.service-card-container`);
        serviceCards.forEach(service => {
            cardContainer.append(createServiceCard(service))
        })
    }
})
