import {
  BakuonMovie,
  Movie,
  SpecialMovie,
  ThreeDimensionalMovie,
} from '../models/movie/movie';
import { Movies } from '../models/movie/movies';

export const screenedMovies = new Movies([
  new SpecialMovie('特別興行', '2019-07-15T14:00+0900'),
  new Movie('トイ・ストーリー 4', '2019-07-15T12:00+0900'),
  new Movie('トイ・ストーリー 4', '2019-07-15T15:00+0900'),
  new Movie('トイ・ストーリー 4', '2019-07-15T18:00+0900'),
  new Movie('トイ・ストーリー 4', '2019-07-15T21:00+0900'),
  new ThreeDimensionalMovie(
    'ミュウツーの逆襲 EVOLUTION',
    '2019-07-15T11:30+0900',
  ),
  new ThreeDimensionalMovie(
    'ミュウツーの逆襲 EVOLUTION',
    '2019-07-15T14:30+0900',
  ),
  new ThreeDimensionalMovie(
    'ミュウツーの逆襲 EVOLUTION',
    '2019-07-15T17:30+0900',
  ),
  new ThreeDimensionalMovie(
    'ミュウツーの逆襲 EVOLUTION',
    '2019-07-15T20:30+0900',
  ),
  new BakuonMovie('アラジン', '2019-07-15T12:30+0900'),
  new BakuonMovie('アラジン', '2019-07-15T15:30+0900'),
  new BakuonMovie('アラジン', '2019-07-15T18:30+0900'),
  new BakuonMovie('アラジン', '2019-07-15T21:30+0900'),

  new Movie('トイ・ストーリー 4', '2019-07-16T12:00+0900'),
  new Movie('トイ・ストーリー 4', '2019-07-16T15:00+0900'),
  new Movie('トイ・ストーリー 4', '2019-07-16T18:00+0900'),
  new Movie('トイ・ストーリー 4', '2019-07-16T21:00+0900'),
  new ThreeDimensionalMovie(
    'ミュウツーの逆襲 EVOLUTION',
    '2019-07-16T11:30+0900',
  ),
  new ThreeDimensionalMovie(
    'ミュウツーの逆襲 EVOLUTION',
    '2019-07-16T14:30+0900',
  ),
  new ThreeDimensionalMovie(
    'ミュウツーの逆襲 EVOLUTION',
    '2019-07-16T17:30+0900',
  ),
  new ThreeDimensionalMovie(
    'ミュウツーの逆襲 EVOLUTION',
    '2019-07-16T20:30+0900',
  ),
  new BakuonMovie('アラジン', '2019-07-16T12:30+0900'),
  new BakuonMovie('アラジン', '2019-07-16T15:30+0900'),
  new BakuonMovie('アラジン', '2019-07-16T18:30+0900'),
  new BakuonMovie('アラジン', '2019-07-16T21:30+0900'),
]);
