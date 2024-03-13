export const teamData = (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "teamMember data",
        data: {
            heading: "Feel god closer to<br class=\"d-none d-lg-block\"/> your members",
            subHeading: "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long.",
            teamMembers: [
                {
                    imgUrl: '/images/team/pope.png',
                    title: 'Vonda Sanders',
                    subtitle: 'Sir Gerry Serrano',
                },
                {
                    imgUrl: '/images/team/lori.png',
                    title: 'Lori Vega',
                    subtitle: 'Sir Gerry Serrano',
                },
                {
                    imgUrl: '/images/team/annie.png',
                    title: 'Annie Trevano',
                    subtitle: 'Sir Gerry Serrano',
                },
                {
                    imgUrl: '/images/team/ronnie.png',
                    title: 'Ronnie Ferrel',
                    subtitle: 'Sir Gerry Serrano',
                },
            ]
        }
    });
}

export const servicesData = (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "satisfaction section data",
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

export const growingData = (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "satisfaction section data",
        data: {
            "heading": "Growing Stronger in<br class=\"d-none d-lg-block\"/> God's our work",
            "subHeading": "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long."
        },
    });
}

export const eventsData = (req, res) => {
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
                    "subtitle": "A long established fact that a reader will be distracted by the readable content of...",
                    "date": "24.12.2023-28.12.2023",
                    "location": "Russian Federation St. Peter's Church",
                    "time": "4:38-8:24",
                    "button": "Join Now"
                },
                {
                    "imgUrl": "/images/events/events.png",
                    "title": "The positive aura seminar",
                    "subtitle": "A long established fact that a reader will be distracted by the readable content of...",
                    "date": "24.12.2023-28.12.2023",
                    "location": "Russian Federation St. Peter's Church",
                    "time": "4:38-8:24",
                    "button": "Join Now"
                },
                {
                    "imgUrl": "/images/events/events.png",
                    "title": "Mindfullness Meidtation",
                    "subtitle": "A long established fact that a reader will be distracted by the readable content of...",
                    "date": "24.12.2023-28.12.2023",
                    "location": "Russian Federation St. Peter's Church",
                    "time": "4:38-8:24",
                    "button": "Join Now"
                },
                {
                    "imgUrl": "/images/events/events.png",
                    "title": "Mindfullness Meidtation",
                    "subtitle": "A long established fact that a reader will be distracted by the readable content of...",
                    "date": "24.12.2023-28.12.2023",
                    "location": "Russian Federation St. Peter's Church",
                    "time": "4:38-8:24",
                    "button": "Join Now"
                },
                {
                    "imgUrl": "/images/events/events.png",
                    "title": "The positive aura seminar",
                    "subtitle": "A long established fact that a reader will be distracted by the readable content of...",
                    "date": "24.12.2023-28.12.2023",
                    "location": "Russian Federation St. Peter's Church",
                    "time": "4:38-8:24",
                    "button": "Join Now"
                },
                {
                    "imgUrl": "/images/events/events.png",
                    "title": "Mindfullness Meidtation",
                    "subtitle": "A long established fact that a reader will be distracted by the readable content of...",
                    "date": "24.12.2023-28.12.2023",
                    "location": "Russian Federation St. Peter's Church",
                    "time": "4:38-8:24",
                    "button": "Join Now"
                }
            ]
        },
    });
}

export const blogData = (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "blog data",
        data: {
            "heading": "Our latest<br class=\"d-none d-lg-block\"/> Articles",
            "subHeading": "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long.",
            "featured": {
                "title": "Growing Together in God’s Word",
                "subtitle": "A long established fact that a reader will be distracted by the readable content of...",
                "date": "8 march 2023"
            },
            "blogCards": [
                {
                    "imgUrl": "/images/articles/church.png",
                    "title": "Baptism Sunday of<br/> church",
                    "subtitle": "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...",
                    "userImgUrl": "/images/subscribe/mary.png",
                    "readTime": "2min read"
                },
                {
                    "imgUrl": "/images/articles/church.png",
                    "title": "Baptism Sunday of<br/> church",
                    "subtitle": "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...",
                    "userImgUrl": "/images/subscribe/mary.png",
                    "readTime": "2min read"
                },
                {
                    "imgUrl": "/images/articles/church.png",
                    "title": "Baptism Sunday of<br/> church",
                    "subtitle": "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...",
                    "userImgUrl": "/images/subscribe/mary.png",
                    "readTime": "2min read"
                }
            ]
        },
    });
}