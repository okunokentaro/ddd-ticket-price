import { PeriodTypes } from './definitions/period-types';
import { PeriodImpl } from './period-impl';

export class Periods {
  constructor(private readonly list: PeriodImpl[]) {}

  getLabels(): string[] {
    return this.list.map(v => v.label);
  }

  everyMatch(types: PeriodTypes[]): boolean {
    if (this.list.length !== types.length) {
      return false;
    }
    return this.list.every(period => {
      return types.some(type => period instanceof type);
    });
  }

  someMatch(types: PeriodTypes[]): boolean {
    return this.list.some(period => {
      return types.some(type => period instanceof type);
    });
  }
}
