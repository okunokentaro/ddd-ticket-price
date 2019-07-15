import { nationalHolidayDefinitions } from './src/lib/national-holiday.definitions';
import { createBakuonMovieFactory } from './src/models/bakuon-movie/movie/create-bakuon-movie-factory';
import { bakuonMoviePeriodDefinitions } from './src/models/bakuon-movie/period/bakuon-movie-period.definitions';
import { Customer } from './src/models/core/customer/customer';
import { createMovieFactory } from './src/models/core/movie/movie';
import { calcPrices } from './src/models/core/price/calc-prices-factory';
import { customerGradeDefinitions } from './src/models/ordinary-movie/customer-grade/customer-grade.definitions';
import { periodDefinitions } from './src/models/ordinary-movie/period/period.definitions';
import { ViewModel } from './src/models/presentation/view-model';
import { customerGradeDefinitions as specialCustomerGradeDefinitions } from './src/models/special-movie/customer-grade/customer-grade.definitions';
import { createSpecialMovieFactory } from './src/models/special-movie/movie/create-special-movie-factory';

function main(origin: Date) {
  const createMovie = createMovieFactory(
    periodDefinitions,
    nationalHolidayDefinitions,
    customerGradeDefinitions,
  );
  const createBakuonMovie = createBakuonMovieFactory(
    bakuonMoviePeriodDefinitions,
    nationalHolidayDefinitions,
    customerGradeDefinitions,
  );
  const createSpecialMovie = createSpecialMovieFactory(
    bakuonMoviePeriodDefinitions,
    nationalHolidayDefinitions,
    specialCustomerGradeDefinitions,
  );

  const movie = createMovie('トイ・ストーリー 4', '2019-07-15T21:00+0900');
  const bakuonMovie = createBakuonMovie(
    'トイ・ストーリー 4 爆音',
    '2019-07-15T21:00+0900',
  );
  const specialMovie = createSpecialMovie(
    'トイ・ストーリー 4 特別興行',
    '2019-07-15T12:00+0900',
  );
  const customers = [new Customer('1990-05-10', 'Male', 'NoAttributes')];

  const prices = calcPrices(origin, movie, customers);
  const viewModel = new ViewModel(movie, prices);
  viewModel.print();

  const bakuonPrices = calcPrices(origin, bakuonMovie, customers);
  const bakuonViewModel = new ViewModel(bakuonMovie, bakuonPrices);
  bakuonViewModel.print();

  const specialMoviePrices = calcPrices(origin, specialMovie, customers);
  const specialViewModel = new ViewModel(specialMovie, specialMoviePrices);
  specialViewModel.print();
}

main(new Date());
