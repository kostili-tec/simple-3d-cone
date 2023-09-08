import { Module } from '@nestjs/common';
import { TriangulationService } from './triangulation.service';
import { TriangulationController } from './triangulation.controller';

@Module({
  providers: [TriangulationService],
  controllers: [TriangulationController],
})
export class TriangulationModule {}
