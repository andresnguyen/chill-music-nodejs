export const toDate = (dateString, divider = '/') => {
    if (!dateString) return
    const [day, month, year] = dateString.split(divider)
    return new Date(year, month - 1, day)
}
