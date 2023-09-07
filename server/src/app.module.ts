import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TriangulationModule } from './triangulation/triangulation.module';
import { TriangulationController } from './triangulation/triangulation.controller';
import { TriangulationService } from './triangulation/triangulation.service';

@Module({
  imports: [TriangulationModule],
  controllers: [AppController, TriangulationController],
  providers: [AppService, TriangulationService],
})
export class AppModule {}
