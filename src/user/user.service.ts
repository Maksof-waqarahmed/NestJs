import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDto } from './dto/user-update.dto';
import { CreateUserDto } from './dto/user-create.dto';

@Injectable()
export class UserService {

    get(){
        return {name: "Waqar", age: 25};
    }

    singleUser(id: number){
        return id
    }

    // create(req: Request){
    //     return req.body
    // }
    create(craeteuserDto: CreateUserDto){
        return craeteuserDto
    }

    update(udateuserDto: UpdateUserDto, params: {userid: number}){
        return {body: udateuserDto, Params: params}
    }

    delete(id: number){
        return id
    }
}
