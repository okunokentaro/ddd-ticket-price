import { movieConstructors } from './movie';

describe('movieConstructors', () => {
  test('tscがグリーンであるときシグネチャが正しい', () => {
    expect(!!movieConstructors).toEqual(true);
  });
});
