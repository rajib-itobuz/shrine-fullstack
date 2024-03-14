import { blogData, eventsData, quoteData, servicesData, teamData } from "../../controller/home/homePage.js";

export const homeRoutes = (route) => {
    route.get("/home/teamData", teamData);
    route.get("/home/servicesData", servicesData);
    route.get("/home/eventsData", eventsData);
    route.get("/home/blogData", blogData);
    route.get("/home/quoteData", quoteData);
}