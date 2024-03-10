const getReadableDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export const useReadableDate = (dateString: string): string => {
  return getReadableDate(dateString)
}
