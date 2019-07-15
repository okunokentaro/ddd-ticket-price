import { Customer } from './customer';

describe('Customer', () => {
  describe('#getAge()', () => {
    test('年齢が正しい', () => {
      const customer = new Customer('1990-07-15', 'Male', 'NoAttributes');
      const actual = customer.getAge(new Date('2019-07-14'));
      expect(actual).toEqual(28);
    });

    test('年齢が正しい', () => {
      const customer = new Customer('1990-07-15', 'Male', 'NoAttributes');
      const actual = customer.getAge(new Date('2019-07-15'));
      expect(actual).toEqual(29);
    });

    test('年齢が正しい', () => {
      const customer = new Customer('1990-07-15', 'Male', 'NoAttributes');
      const actual = customer.getAge(new Date('2020-10-01'));
      expect(actual).toEqual(30);
    });
  });
});
