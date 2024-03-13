import express from 'express';
import path from 'path';
import cors from 'cors';
import manageRoute from './route/index.js';

const app = express();


app.use(cors());


app.use(manageRoute());
app.use('/images', express.static('images'));


app.listen(3000, () => console.log(`Server is running @ 3000`))