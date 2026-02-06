import { IsEmail, IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { CreateAuthDto } from "./create-auth.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateAuthDto extends PartialType(CreateAuthDto) { }