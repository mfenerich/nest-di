import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerModule } from '../power/power.module';

@Module({
  imports: [
    PowerModule.register({ powerMode: 'low' }), // Disk uses low power mode to save energy
  ],
  providers: [DiskService],
  exports: [DiskService],
})
export class DiskModule {}
