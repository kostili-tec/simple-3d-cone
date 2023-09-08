import { IsNotEmpty, Max, Min, IsNumber } from 'class-validator';

export class CreateTriangulationDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(100)
  readonly height: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(100)
  readonly radius: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(3)
  @Max(100)
  readonly segments: number;
}
