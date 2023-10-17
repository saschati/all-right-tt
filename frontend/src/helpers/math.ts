export const calcPercent = (total: number, curr: number) => {
  return Math.ceil(1 - (total - curr) / total)
}
