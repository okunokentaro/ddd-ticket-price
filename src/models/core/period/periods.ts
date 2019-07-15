import { PeriodType } from './period/period-type';
import { PeriodImpl } from './period/period-impl';

export class Periods {
  constructor(private readonly list: PeriodImpl[]) {}

  getLabels(): string[] {
    return this.list.map(v => v.label);
  }

  everyMatch(types: PeriodType[]): boolean {
    if (this.list.length !== types.length) {
      return false;
    }
    return this.list.every(period => {
      return types.some(type => period.type === type);
    });
  }

  someMatch(types: PeriodType[]): boolean {
    return this.list.some(period => {
      return types.some(type => period.type === type);
    });
  }
}
