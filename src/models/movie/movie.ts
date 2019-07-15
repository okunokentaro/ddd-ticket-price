import { SpecialMovieGrade } from '../customer-grade/definition/special-movie-grade';
import { getCustomerGrade } from '../customer-grade/get-customer-grage';
import { Customer } from '../customer/customer';
import { Periods } from '../period/periods';
import { Price } from '../price/price';

export interface MovieImpl {
  title: string;
  date: string;

  getPrice(customer: Customer, origin: Date, periods: Periods): Price;
}

interface MovieConstructorImpl {
  new (title: string, date: string): MovieImpl;
}

/**
 * 一般映画
 */
export class Movie implements MovieImpl {
  constructor(readonly title: string, readonly date: string) {}

  getPrice(customer: Customer, origin: Date, periods: Periods): Price {
    return getCustomerGrade(customer, origin).getPrice(periods);
  }
}

/**
 * 3D上映
 */
export class ThreeDimensionalMovie implements MovieImpl {
  constructor(readonly title: string, readonly date: string) {}

  getPrice(customer: Customer, origin: Date, periods: Periods): Price {
    return getCustomerGrade(customer, origin).getPrice(periods);
  }
}

/**
 * 爆音上映
 */
export class BakuonMovie implements MovieImpl {
  constructor(readonly title: string, readonly date: string) {}

  getPrice(customer: Customer, origin: Date, periods: Periods): Price {
    return getCustomerGrade(customer, origin).getPrice(periods);
  }
}

/**
 * 特別興行
 */
export class SpecialMovie implements MovieImpl {
  constructor(readonly title: string, readonly date: string) {}

  getPrice(_: Customer, __: Date, periods: Periods): Price {
    return new SpecialMovieGrade().getPrice(periods);
  }
}

export const movieConstructors: MovieConstructorImpl[] = [
  Movie,
  ThreeDimensionalMovie,
  BakuonMovie,
  SpecialMovie,
];
