import { cartWidget, createBlogCard, createEventCard, createHeading } from './helper/helper.js';


const headings=document.querySelectorAll(".heading");

const sectionHeaders = [
    {
        heading: "Your Satisfaction is<br/> your business",
        subHeading: "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long."
    },
    {
        heading: "Feel god closer to<br> your members",
        subHeading: "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long."
    },
    {
        heading: "See our all<br>events",
        subHeading: "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long.",
        eventCardObject:[
            {
                imgUrl:'./images/events/events.png',
                title:'Mindfullness Meidtation',
                subtitle:'A long established fact that a reader will be distracted by the readable content of...',
                date:'24.12.2023-28.12.2023',
                location:'Russian Federation St. Peter\'s Church',
                time:'4:38-8:24',
                button:'Join Now',
            },
            {
                imgUrl:'./images/events/events.png',
                title:'The positive aura seminar',
                subtitle:'A long established fact that a reader will be distracted by the readable content of...',
                date:'24.12.2023-28.12.2023',
                location:'Russian Federation St. Peter\'s Church',
                time:'4:38-8:24',
                button:'Join Now',
            },
            {
                imgUrl:'./images/events/events.png',
                title:'Mindfullness Meidtation',
                subtitle:'A long established fact that a reader will be distracted by the readable content of...',
                date:'24.12.2023-28.12.2023',
                location:'Russian Federation St. Peter\'s Church',
                time:'4:38-8:24',
                button:'Join Now',
            }
        ]
    },{
        heading: "Our latest<br>Articles",
        subHeading: "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long.",
        blogCards:[
            {
                imgUrl:'./images/articles/church.png',
                title:'Baptism Sunday of<br/> church',
                subtitle:'Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...',
                userImgUrl:'./images/subscribe/mary.png',
                readTime:'2min read'
            },
            {
                imgUrl:'./images/articles/church.png',
                title:'Baptism Sunday of<br/> church',
                subtitle:'Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...',
                userImgUrl:'./images/subscribe/mary.png',
                readTime:'2min read'
            },
            {
                imgUrl:'./images/articles/church.png',
                title:'Baptism Sunday of<br/> church',
                subtitle:'Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...',
                userImgUrl:'./images/subscribe/mary.png',
                readTime:'2min read'
            }
        ]
    }
]

cartWidget();


headings.forEach((headingElement,index)=>{
    createHeading(headingElement,sectionHeaders[index]);
    const eventCards=sectionHeaders[index].eventCardObject;
    
    
    
    if(eventCards){
        const cardContainer=headingElement.parentElement.querySelector('.cardContainer');
        
        eventCards.forEach(e=>{
            cardContainer.append(createEventCard({...e,imgCustomClass:'event-image',cardCustomClass:'event-card'}))
        })
    }


    const blogCards=sectionHeaders[index].blogCards;
    if(blogCards){
        const cardContainer=headingElement.parentElement.querySelector(`.cardContainer`);
        blogCards.forEach(e=>{
            cardContainer.append(createBlogCard({...e}))
        })
    }
})
