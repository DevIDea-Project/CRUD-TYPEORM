import NewController from "../controller/NewController";
import { Router } from 'express'

const routes = Router();

routes.post('/New', NewController.createNew);
routes.get('/New', NewController.listNew);
routes.get('/New/:id', NewController.listOne);
routes.delete('/New/:id', NewController.deleteOne);
routes.put('/New/:id', NewController.updateOne);

export default routes;
