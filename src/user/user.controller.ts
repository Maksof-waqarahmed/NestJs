// import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
// import { Request } from "express";

// @Controller('/user')
// export class UserController {
//     @Get()
//   getUsers() {
//     // return 'I am a user';
//     return {name: "Waqae", age: 22};
//   }

//   // @Get('/users') // to seperate a path
//   // getUsers() {
//   //   return [{name: "Waqae", age: 22},{name: "Waqae", age: 22} ];
//   // }

//   @Get('/:userid') // to seperate a path
//   getUser(@Param() params:{userid: number} ) {
//     return params;
//   }

//   @Post()
//   store(@Req() req: Request){
//     return req.body;
//   }

//   @Delete('/:userid')
//   deleteUser(@Param() params:{userid: number}){
//     return params
//   }

//   @Patch('/:userid')
//   updateUser(@Param() params:{userid: number}){
//     return params
//   }
// }

//hum asy be nh krty 


import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { UserService } from "./user.service";
import { Request } from "express";

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {};
  @Get()
  getUser(){
    return this.userService.get();
  }

  @Get('/:id')
  user(@Param('id') id:number){
    return this.userService.singleUser(id);
  }

  @Post()
  storeUser(@Req() req: Request){
    return this.userService.create(req)
  }

  @Patch('/:userid')
  updateUser(@Param() params: {userid: number} , @Req() req: Request) {
    return this.userService.update(req, params );
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}