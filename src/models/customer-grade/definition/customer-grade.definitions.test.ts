import { customerGradeDefinitions } from './customer-grade.definitions';

describe('customerGradeDefinitions', () => {
  test('tscがグリーンであるときシグネチャが正しい', () => {
    expect(!!customerGradeDefinitions).toEqual(true);
  });
});
