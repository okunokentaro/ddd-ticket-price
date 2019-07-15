import { movieDefinitions } from './movie-definitions';

describe('movieDefinitions', () => {
  test('tscがグリーンであるときシグネチャが正しい', () => {
    expect(!!movieDefinitions).toEqual(true);
  });
});
