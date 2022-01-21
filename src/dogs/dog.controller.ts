import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CreateDog } from 'src/model/CreateDog';
import { Dog } from 'src/model/Dog';
import { DogService } from './dog.service';

@Controller('dogs')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  getAllDogs(): Dog[] {
    return this.dogService.getAllDogs();
  }

  @Get(':id')
  findById(@Param('id') id: string): Dog {
    return this.dogService.findById(Number.parseInt(id));
  }

  @Post()
  @HttpCode(201)
  createDog(@Body() newDog: CreateDog): Dog[] {
    return this.dogService.save(newDog);
  }
}
