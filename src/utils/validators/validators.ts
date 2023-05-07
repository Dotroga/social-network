export const requiredField = (value: string, title: string) => {
  if (!value) return `${title} required`
}
export const minLength = (value: string, min: number, title: string) => {
  if (value.length < min) return `Length ${title} should be more 3 symbols`
}
