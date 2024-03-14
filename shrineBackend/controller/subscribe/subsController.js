import { mailService } from "../../helper/mailService.js";
import { subscriptionSubject } from "./subscriptionSubject.js";
const mailer = mailService();


export const sendSubscribeMail = async (req, res) => {

    try {
        const mailOptions = {
            to: JSON.parse(req.query.email),
            subject: "Yayyy!! you are subscribed",
            html: subscriptionSubject,
        };

        mailer.sendMail(mailOptions, (error, info) => {
            if (error) {
                throw new Error();
            }
        });


        return res.status(200).json({ message: "email sent", data: {} });
    } catch (err) {
        return res.status(400).json({ message: "error occured", data: null });
    }
}