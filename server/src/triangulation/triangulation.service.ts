import { Injectable } from '@nestjs/common';
import { CreateTriangulationDto } from './dto/create-triangulation.dto';
import { getCoords } from '../utils/triangleCoords';

@Injectable()
export class TriangulationService {
  createTringulation(dto: CreateTriangulationDto) {
    const { height, radius, segments } = dto;

    return getCoords(height, radius, segments);
  }
}
