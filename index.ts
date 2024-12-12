import express, { Express, Request, Response } from 'express';
import path from 'path'

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src','views'));


app.get('/', (req: Request, res: Response) => {
    res.render('index')
});

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});