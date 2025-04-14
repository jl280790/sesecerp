import { Router } from 'express';
import { IndexController } from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
    app.use('/api', router);

    router.get('/', indexController.getHome);
    // Define other routes here
}