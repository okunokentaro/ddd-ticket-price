import { BakuonMovie } from '../../bakuon-movie/movie/bakuon-movie';
import { Movie } from '../../core/movie/movie';
import { MovieConstructorImpl } from '../../core/movie/movie-constructor-impl';
import { ThreeDimensionalMovie } from '../../three-dementions-movie/movie/three-dimensional-movie';
import { SpecialMovie } from '../../special-movie/movie/special-movie';

export const movieDefinitions: MovieConstructorImpl[] = [
  Movie,
  ThreeDimensionalMovie,
  BakuonMovie,
  SpecialMovie,
];
