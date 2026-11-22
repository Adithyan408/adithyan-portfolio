/**
 * Checks if a string is a valid, accessible external URL starting with http:// or https://
 */
export function isValidUrl(url?: string | null): boolean {
  if (!url) return false
  const trimmed = url.trim()
  if (
    trimmed === '' ||
    trimmed === '#' ||
    trimmed === 'api-testing' ||
    trimmed === 'public-library'
  ) {
    return false
  }
  return /^https?:\/\//i.test(trimmed)
}
