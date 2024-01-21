import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet} from "./pet.entities";
import { CreatePetDTO,UpdatePetDTO } from "./pet.dto";
import { Logger } from '@nestjs/common';
 
@Injectable()
export class PetService {
 
    constructor(
        @InjectRepository(Pet)
        private petRepository: Repository<Pet>,
    ) {

    }
 
     findALL(): Promise<Pet[]> {
        return this.petRepository.find();
    }
 

    findOne(id : number): Promise<Pet | null> {
        return this.petRepository.findOneBy({id:id});
    }

    create(cat : CreatePetDTO) : Promise<Pet|null> {
        return this.petRepository.save(Pet);
    }
 
     update(updatePetDTO: UpdatePetDTO): Promise<Pet | null> {
    
        return this.petRepository.save(updatePetDTO);
    }

    async deleteById(id: number): Promise<void> {
        await this.petRepository.delete(id);
    }
 
}