import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';

@Module({
  exports: [DogModule],
  controllers: [DogController],
  providers: [DogService],
})
export class DogModule {}
