import nodemailer from 'nodemailer';
import constants from '../constants/index.js';

export const mailService = () => nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: constants.nodemail,
        pass: constants.nodepass,
    },
});