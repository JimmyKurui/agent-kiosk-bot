import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path'
import router from './router/routes';
import bodyParser from 'body-parser';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const _env = process.env.NODE_ENV;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});