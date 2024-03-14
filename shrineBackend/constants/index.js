import env from 'dotenv';

env.config();


export default {
    nodemail: process.env.EMAIL,
    nodepass: process.env.PASSWORD,
}