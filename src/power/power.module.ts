import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports: [PowerService], // This makes PowerService available to other modules
})
export class PowerModule {}
