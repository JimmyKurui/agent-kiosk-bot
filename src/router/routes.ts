import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.render('index', { title: 'Home', page: 'home'})
});

router.route('/deposit')
  .get((req, res) => {
    res.render('index', { title: 'Mobile', page: 'mobile' });
  })
  .post((req, res) => {
    console.log(req.body);
    res.json({ message: 'Received'});
  });

router.get('/withdraw', (req, res) => {
    res.render('index', { title: 'Mobile', page: 'mobile' });
});

router.get('/transfer', (req, res) => {
    res.render('index', { title: 'Bank', page: 'bank' });
});

router.get('/airtime', (req, res) => {
    res.render('index', { title: 'Bank', page: 'bank' });
});

export default router;