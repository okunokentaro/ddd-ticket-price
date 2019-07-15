import { NationalHolidayCollection } from '../models/national-holiday/national-holiday-collection';

/**
 * 内閣府発表 2019年祝日・休日マスターデータ
 * https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html
 */
export const nationalHolidayDefinitions = new NationalHolidayCollection([
  { time: 1563116400, label: '海の日' },
  { time: 1565449200, label: '山の日' },
  { time: 1565535600, label: '山の日 振替休日' },
  { time: 1568559600, label: '敬老の日' },
  { time: 1569164400, label: '秋分の日' },
  { time: 1570978800, label: '体育の日' },
  { time: 1571670000, label: '休日 即位礼正殿の儀' },
  { time: 1572706800, label: '文化の日' },
  { time: 1572793200, label: '文化の日 振替休日' },
  { time: 1574434800, label: '勤労感謝の日' },
]);
