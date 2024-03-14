
export const teamData = async (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "teamMember data",
        data: {
            heading: "Feel god closer to<br class=\"d-none d-lg-block\"/> your members",
            subHeading: "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long.",
            teamMembers: [
                {
                    imageUrl: '/images/team/pope.png',
                    name: 'Vonda Sanders',
                    penName: 'Sir Gerry Serrano',
                },
                {
                    imageUrl: '/images/team/lori.png',
                    name: 'Lori Vega',
                    penName: 'Sir Gerry Serrano',
                },
                {
                    imageUrl: '/images/team/annie.png',
                    name: 'Annie Trevano',
                    penName: 'Sir Gerry Serrano',
                },
                {
                    imageUrl: '/images/team/ronnie.png',
                    name: 'Ronnie Ferrel',
                    penName: 'Sir Gerry Serrano',
                },
            ]
        }
    });
}

export const servicesData = (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "events section data",
        data: {
            "heading": "Our Satisfaction is<br/> our business",
            "subHeading": "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long.",
            "serviceCards": [
                {
                    "imgUrl": "/images/satisfaction/church.svg",
                    "title": "Our churches",
                    "subtitle": "A long established fact that a reade."
                },
                {
                    "imgUrl": "/images/satisfaction/church.svg",
                    "title": "Our churches",
                    "subtitle": "A long established fact that a reade."
                },
                {
                    "imgUrl": "/images/satisfaction/church.svg",
                    "title": "Our churches",
                    "subtitle": "A long established fact that a reade."
                },
                {
                    "imgUrl": "/images/satisfaction/church.svg",
                    "title": "Our churches",
                    "subtitle": "A long established fact that a reade."
                },
                {
                    "imgUrl": "/images/satisfaction/church.svg",
                    "title": "Our churches",
                    "subtitle": "A long established fact that a reade."
                }
            ]
        },
    });
}

export const eventsData = async (req, res) => {

    return res.status(200).json({
        status: 200,
        message: "events data",
        data: {
            "heading": "See our all<br class=\"d-none d-lg-block\"/> events",
            "subHeading": "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long.",
            "eventCardObject": [
                {
                    "imgUrl": "/images/events/events.png",
                    "title": "Mindfullness Meidtation",
                    "description": "A long established fact that a reader will be distracted by the readable content of...",
                    "date": "24.12.2023-28.12.2023",
                    "location": "Russian Federation St. Peter's Church",
                    "time": "4:38-8:24",
                    "button": "Join Now"
                },
                {
                    "imgUrl": "/images/events/events.png",
                    "title": "The positive aura seminar",
                    "description": "A long established fact that a reader will be distracted by the readable content of...",
                    "date": "24.12.2023-28.12.2023",
                    "location": "Russian Federation St. Peter's Church",
                    "time": "4:38-8:24",
                    "button": "Join Now"
                },
                {
                    "imgUrl": "/images/events/events.png",
                    "title": "Mindfullness Meidtation",
                    "description": "A long established fact that a reader will be distracted by the readable content of...",
                    "date": "24.12.2023-28.12.2023",
                    "location": "Russian Federation St. Peter's Church",
                    "time": "4:38-8:24",
                    "button": "Join Now"
                },
                {
                    "imgUrl": "/images/events/events.png",
                    "title": "Mindfullness Meidtation",
                    "description": "A long established fact that a reader will be distracted by the readable content of...",
                    "date": "24.12.2023-28.12.2023",
                    "location": "Russian Federation St. Peter's Church",
                    "time": "4:38-8:24",
                    "button": "Join Now"
                },
                {
                    "imgUrl": "/images/events/events.png",
                    "title": "The positive aura seminar",
                    "description": "A long established fact that a reader will be distracted by the readable content of...",
                    "date": "24.12.2023-28.12.2023",
                    "location": "Russian Federation St. Peter's Church",
                    "time": "4:38-8:24",
                    "button": "Join Now"
                },
                {
                    "imgUrl": "/images/events/events.png",
                    "title": "Mindfullness Meidtation",
                    "description": "A long established fact that a reader will be distracted by the readable content of...",
                    "date": "24.12.2023-28.12.2023",
                    "location": "Russian Federation St. Peter's Church",
                    "time": "4:38-8:24",
                    "button": "Join Now"
                }
            ]
        },
    });
}

export const blogData = async (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "blog data",
        data: {
            "heading": "Our latest<br class=\"d-none d-lg-block\"/> Articles",
            "subHeading": "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long.",
            // "featured": blogs[featuredContent],
            "blogCards": [
                {
                    "imageUrl": "/images/articles/church.png",
                    "title": "Baptism Sunday of<br/> church",
                    "description": "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...",
                    "authorImgUrl": "/images/subscribe/mary.png",
                    "readTime": "2min read",
                    "author": "Chris"
                },
                {
                    "imageUrl": "/images/articles/church.png",
                    "title": "Baptism Sunday of<br/> church",
                    "description": "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...",
                    "authorImgUrl": "/images/subscribe/mary.png",
                    "readTime": "2min read",
                    "author": "Joe"
                },
                {
                    "imageUrl": "/images/articles/church.png",
                    "title": "Baptism Sunday of<br/> church",
                    "description": "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...",
                    "authorImgUrl": "/images/subscribe/mary.png",
                    "readTime": "2min read",
                    "author": "Ramana"
                }
            ]
        },
    });
}

export const quoteData = (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "blog data",
        data: {
            "heading": "Faithful hearts,<br class=\"d-none d-lg-block\"/> compassionate hands",
            "subHeading": "A long established fact that a reader will be distracted by the readable content of a page when looking.",
            "quote": {
                "message": "“I love you when you bow in your mosque, kneel in your temple, pray in your church. For you and I are sons of one religion, and it is the spirit”“I love you when you bow in your mosque, kneel in your temple.",
                "author": "Martin Luther",
            }
        },
    });
}

