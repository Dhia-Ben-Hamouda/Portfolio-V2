export function calculateYearDifference(date: Date): number {
  const currentYear = new Date().getFullYear();
  const givenYear = date.getFullYear();

  return currentYear - givenYear;
}
