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
                message: 'Problem adding Field!'
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

}

export default new NewController()

