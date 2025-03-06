import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from '../power/power.module';

@Module({
  imports: [PowerModule], // This gives access to exported providers from PowerModule
  providers: [CpuService],
  exports: [CpuService], // Making CpuService available to other modules
})
export class CpuModule {}
