import { IsInt, IsPositive, IsString, Length } from "class-validator";

export class CreateCatDto {
  @IsString()
  @Length(2,10,{message:'error on length'}) //set length and custom error message
    name: string;
    @IsInt()
    @IsPositive() //age must be positive number
    age: number;
    @IsString()
    @Length(2,10,{message:'error on length',groups:['create']}) //set validation for specific function
    @Length(2,15,{message:'error on length',groups:['update']}) //set validation for specific function
    address: string;
  }
  
export class UpdateCatDto {
    name: string;
    age: number;
    address: string;
  }
  
  
export class ListAllEntities {
    limit: number;
  }
  