import { IsString } from "class-validator";

export class CreateEncryptDto {
    @IsString()
    pwd: string;
}
