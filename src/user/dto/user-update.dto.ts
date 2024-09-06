import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class UpdateUserDto {
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
// export class UpdateUserDto extends  createZodDto(userSchema) {}