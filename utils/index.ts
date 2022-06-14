export function getDatesInRange(startDate: Date) {
  const currentYear = new Date();
  const date = new Date(startDate.getTime());
  date.setDate(date.getDate() + 1);
  const dates = [];

  while (date <= currentYear) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates.length;
}
