import { MovieImpl } from './movie-impl';

export class Movies {
  constructor(private readonly list: MovieImpl[]) {}
}
