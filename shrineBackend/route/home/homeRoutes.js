import { blogData, eventsData, growingData, servicesData, teamData } from "../../controller/homePage.js";

export const homeRoutes = (route) => {
    route.get("/home/teamData", teamData);
    route.get("/home/servicesData", servicesData);
    route.get("/home/growingData", growingData);
    route.get("/home/eventsData", eventsData);
    route.get("/home/blogData", blogData);
}