import { sendSubscribeMail } from "../../controller/subscribe/subsController.js";

export const subscribeRoute = (route) => {
    route.get("/subscribe/newsLetter", sendSubscribeMail);
}