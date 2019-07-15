export interface MovieImpl {
  title: string;
  date: string;
}

interface MovieConstructorImpl {
  new (title: string, date: string): MovieImpl;
}

/**
 * 一般映画
 */
export class Movie implements MovieImpl {
  constructor(readonly title: string, readonly date: string) {}
}

/**
 * 3D上映
 */
export class ThreeDimensionalMovie implements MovieImpl {
  constructor(readonly title: string, readonly date: string) {}
}

/**
 * 爆音上映
 */
export class BakuonMovie implements MovieImpl {
  constructor(readonly title: string, readonly date: string) {}
}

/**
 * 特別興行
 */
export class SpecialMovie implements MovieImpl {
  constructor(readonly title: string, readonly date: string) {}
}

export const movieConstructors: MovieConstructorImpl[] = [
  Movie,
  ThreeDimensionalMovie,
  BakuonMovie,
  SpecialMovie,
];
