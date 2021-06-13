import {getRepository} from "typeorm";
import {Request, Response} from "express";
import { Product } from "../entity/Product";

class ProductController {

    public async createProduct(request: Request, response: Response) {
        try {
            const createProduct = await getRepository(Product).save(request.body);
            return response.json(createProduct);
        }
        catch(err){
            return response.json({
                message: 'Problem adding Field!!'
            })
        }
    }

    public async listProduct(request: Request, response: Response) {
        try {
            const listProduct = await getRepository(Product).find();
            return response.json(listProduct);
        }
        catch(err){
            return response.json({
                message: 'Problem on list News!'
            })
        }
    }

    public async listProductOne(request: Request, response: Response) {
        try {
            const id = request.params.id;
            const listProductOne = await getRepository(Product).findOne(id);
            return response.json(listProductOne);

        }
        catch(err){
            return response.json({
                message: 'Problem on list One News!'
            })
        }
    }

    public async deleteProductOne(request: Request, response: Response) {
        try {
            const id = request.params.id;
            const deleteProductOne = await getRepository(Product).delete(id)
            return response.json(deleteProductOne);

        }catch(err){
            return response.json({
                message: 'Problem on list One News!'
            })
        }
    }

    public async updateProductOne(request: Request, response: Response) {
        try {
            const id = request.params.id;
            const bodyRequest = request.body;
            const updateProductOne = await getRepository(Product).update(id, bodyRequest);
            return response.json(updateProductOne);

        }catch(err){
            return response.json({
                message: 'Problem on list One News!'
            })
        }

    }

}

export default new ProductController()
