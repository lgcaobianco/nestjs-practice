import { Injectable } from '@nestjs/common';
import { CreateDog } from 'src/model/CreateDog';
import { Dog } from 'src/model/Dog';

const dogs = [
  { name: 'max', id: 1, age: 3 },
  {
    name: 'Nina',
    id: 2,
    age: 5,
  },
] as Dog[];

@Injectable()
export class DogService {
  getAllDogs(): Dog[] {
    return dogs;
  }

  findById(id: number): Dog {
    return dogs.filter((dog) => dog.id === id)[0];
  }

  save(dog: CreateDog): Dog[] {
    const lastId = dogs.at(-1).id;
    dogs.push({
      ...dog,
      id: lastId + 1,
    });
    return dogs;
  }
}
