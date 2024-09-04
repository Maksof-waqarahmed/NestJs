// import { Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
// import { Request } from 'express';

import { Controller } from "@nestjs/common";

// @Controller('/users')
// export class AppController {
//   @Get()
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
// is trh hum nh krty har chz k lye alag route banaty h

@Controller()
export class AppController{
  
}