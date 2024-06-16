export default function formatDescr(description: string): string {
  if (!description) {
    return ''
  }

  const arrDescr = [...description.split(' ', 20)]
  return arrDescr.join(' ') + '...'
}
