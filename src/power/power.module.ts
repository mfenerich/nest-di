import { Module, DynamicModule } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({})
export class PowerModule {
  static register(
    options: { powerMode: string } = { powerMode: 'normal' },
  ): DynamicModule {
    return {
      module: PowerModule,
      providers: [
        {
          provide: 'POWER_OPTIONS',
          useValue: options,
        },
        PowerService,
      ],
      exports: [PowerService],
    };
  }
}
