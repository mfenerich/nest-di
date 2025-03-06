import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from '../power/power.module';

@Module({
  imports: [
    PowerModule.register({ powerMode: 'high' }), // CPU needs high performance
  ],
  providers: [CpuService],
  exports: [CpuService],
})
export class CpuModule {}
