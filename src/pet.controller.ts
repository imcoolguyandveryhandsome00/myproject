import { Body,Controller, Get, Param,Post,Put, Req, Delete} from "@nestjs/common";
import { PetService } from "./pet.service";
import { ParamsTokenFactory } from "@nestjs/core/pipes";
import { Request } from "express";
import { request } from "http";
import { Pet } from "./pet.entities";
import { CreatePetDTO,UpdatePetDTO } from "./pet.dto";

@Controller('pet')
export class PetController {
    constructor(private readonly petService : PetService){

    }
   @Get()
   getIndex(@Req() request : Request ) : Promise<Pet[]> {
    return this.petService.findALL();
   }
   
    @Get(':id')
    getCatById(@Param('id') id : number) :Promise<Pet> {
       return this.petService.findOne(id)
    }
    @Post()
    postCreate(@Body() createPetDTO : CreatePetDTO): any{
      
      return this.petService.create(createPetDTO)
    }
  
    @Put(':id')
    updatePetById(@Param('id') id :number, @Body() updatePetDTO : UpdatePetDTO) : Promise<Pet> {
      return this.petService.update(updatePetDTO)
    }
    @Delete(":id")
    deletePetById(@Param('id') id : number) :string {
      this.petService.deleteById(id);
      return "OK"
    }
  }