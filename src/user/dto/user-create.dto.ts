import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {
    @IsString()
    name: string;
    @IsNotEmpty()
    age:string;
    @IsEmail()
    email: string
}




// import { z } from "zod";
// import { createZodDto } from 'nestjs-zod';

// const userSchema = z.object({
//     name: z.string(),
//     email: z.string(),
//     age: z.number()
// })
// export class CreateUserDto extends  createZodDto(userSchema) {}