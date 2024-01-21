import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";

export class CreatePetDTO {
    @IsNotEmpty()
    name :string;

    @IsNotEmpty()
    sex : string;

    @IsNotEmpty()
    age : number;

    description? : string;
}
export class UpdatePetDTO {
    
    @IsNotEmpty()
    id : number;

    @IsNotEmpty()
    name : string;

    @IsNotEmpty()
    color : string;

    //optionsl
    description? : string;
}