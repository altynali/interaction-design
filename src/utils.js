export const formattedDate = (dateString) => {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" }
  const date = new Date(dateString)
  return date.toLocaleDateString("cs-CZ", options)
}
