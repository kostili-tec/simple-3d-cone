import { Body, Controller, Post } from '@nestjs/common';
import { CreateTriangulationDto } from './dto/create-triangulation.dto';
import { TriangulationService } from './triangulation.service';

@Controller('triangulation')
export class TriangulationController {
  constructor(private readonly triangulationService: TriangulationService) {}

  @Post()
  async create(@Body() dto: CreateTriangulationDto) {
    return this.triangulationService.createTringulation(dto);
  }
}
