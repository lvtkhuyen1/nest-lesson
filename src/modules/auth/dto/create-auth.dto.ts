import { IsEmail, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateAuthDto {
    @IsString()
    name: string;

    @IsPhoneNumber()
    phone: number;

    @IsEmail()
    @IsOptional()
    email: string;
}