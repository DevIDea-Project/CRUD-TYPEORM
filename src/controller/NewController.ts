import {getRepository} from "typeorm";
import {Request, Response} from "express";
import { New } from "../entity/New";

class NewController {

    public async createNew(request: Request, response: Response) {
        try {
            const createNew = await getRepository(New).save(request.body);
            return response.json(createNew);
        }
        catch(err){
            return response.json({
                message: 'Problem adding Field!!'
            })
        }
    }

    public async listNew(request: Request, response: Response) {
        try {
            const listNew = await getRepository(New).find();
            return response.json(listNew);
        }
        catch(err){
            return response.json({
                message: 'Problem on list News!'
            })
        }
    }

    public async listOne(request: Request, response: Response) {
        try {
            const id = request.params.id;
            const listNewOne = await getRepository(New).findOne(id);
            return response.json(listNewOne);

        }
        catch(err){
            return response.json({
                message: 'Problem on list One News!'
            })
        }
    }

    public async deleteOne(request: Request, response: Response) {
        try {
            const id = request.params.id;
            const deleteOne = await getRepository(New).delete(id)
            return response.json(deleteOne);

        }catch(err){
            return response.json({
                message: 'Problem on list One News!'
            })
        }
    }

    public async updateOne(request: Request, response: Response) {
        try {
            const id = request.params.id;
            const bodyRequest = request.body;
            const updateOne = await getRepository(New).update(id, bodyRequest);
            return response.json(updateOne);

        }catch(err){
            return response.json({
                message: 'Problem on list One News!'
            })
        }

    }

}

export default new NewController()
