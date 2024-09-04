import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {

    get(){
        return {name: "Waqar", age: 25};
    }

    singleUser(id: number){
        return id
    }

    create(req: Request){
        return req.body
    }

    update(req: Request, params: {userid: number}){
        return {body: req.body, Params: params}
    }

    delete(id: number){
        return id
    }
}
