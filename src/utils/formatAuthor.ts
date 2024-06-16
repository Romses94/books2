export default function formatAuthor(authorsArr: string[]): string {
  let authorsStr = ''

  if (!authorsArr) {
    authorsStr = 'No author'
    return authorsStr
  }

  authorsArr.forEach((author, index) => {
    if (index !== +authorsArr.length - 1) {
      authorsStr += `${author}, `
    } else {
      authorsStr += `${author}`
    }
  })
  return authorsStr
}
