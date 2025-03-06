import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class PowerService {
  private powerMultiplier: number;

  constructor(
    @Inject('POWER_OPTIONS') private powerOptions: { powerMode: string },
  ) {
    switch (powerOptions.powerMode) {
      case 'low':
        this.powerMultiplier = 0.5;
        break;
      case 'high':
        this.powerMultiplier = 2;
        break;
      default:
        this.powerMultiplier = 1;
    }
  }

  supplyPower(watts: number) {
    const actualWatts = watts * this.powerMultiplier;
    console.log(
      `Supplying ${actualWatts} watts of power (${this.powerOptions.powerMode} mode)`,
    );
    return actualWatts;
  }
}
