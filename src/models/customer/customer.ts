type CustomerAttribute =
  | 'NoAttributes'
  | 'CinemaCitizen' // シネマシティズン
  | 'University' // 大学生
  | 'VocationalSchool' // 専門学校生
  | 'CollegeStudent' // 高専生
  | 'HighSchool' // 高校生
  | 'Handicapped'; // 障がい者

type Gender =
  | 'NoAnswer' // 無回答
  | 'Male'
  | 'Female'
  | 'FreeWriting'; // 自由入力

export class Customer {
  readonly birthdayDate: Date;

  /**
   *
   * @param birthday 'YYYY-MM-DD'
   * @param gender
   * @param attribute
   */
  constructor(
    birthday: string,
    readonly gender: Gender,
    readonly attribute: CustomerAttribute,
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
}
