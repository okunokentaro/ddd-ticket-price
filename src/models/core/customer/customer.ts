import { CustomerAttribute } from './customer-attribute';
import { Gender } from './genter';
import { CustomerItem } from './customer-item';

export class Customer {
  readonly birthdayDate: Date;

  /**
   * @param birthday 'YYYY-MM-DD'
   * @param gender
   * @param attribute
   * @param items
   */
  constructor(
    birthday: string,
    readonly gender: Gender,
    readonly attribute: CustomerAttribute,
    readonly items: CustomerItem[],
  ) {
    this.birthdayDate = new Date(`${birthday}T00:00:00Z`);
  }

  getAge(origin: Date): number {
    const monthDiff = origin.getMonth() - this.birthdayDate.getMonth();
    const yearDiff = origin.getFullYear() - this.birthdayDate.getFullYear();

    const birthdayHasNotArrivedYet =
      monthDiff < 0 ||
      (monthDiff === 0 && origin.getDate() < this.birthdayDate.getDate());

    return birthdayHasNotArrivedYet ? yearDiff - 1 : yearDiff;
  }

  get hasGlasses(): boolean {
    return this.items.some(item => item === 'ThreeDimensionalGlasses');
  }
}
