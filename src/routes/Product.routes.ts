import CaraParaController from "../controller/ProductController";
import { Router } from 'express'

const routes = Router();

routes.post('/product', CaraParaController.createProduct);
routes.get('/product', CaraParaController.listProduct);
routes.get('/product/:id', CaraParaController.listProductOne);
routes.delete('/product/:id', CaraParaController.deleteProductOne);
routes.put('/product/:id', CaraParaController.updateProductOne);

export default routes;
