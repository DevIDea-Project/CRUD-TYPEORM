import NewController from "../controller/NewController";
import { Router } from 'express'

const routes = Router();

routes.post('/New', NewController.createNew);
routes.get('/New', NewController.listNew);

export default routes;




