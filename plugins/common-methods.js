export default (context, inject) => {

  const formatDate = (datetime) => {
    const date = new Date(datetime)
    const mm = date.getMonth() + 1 // getMonth() is zero-based
    const dd = date.getDate()

    return [
        (dd > 9 ? '' : '0') + dd,
        (mm > 9 ? '' : '0') + mm,
        date.getFullYear()
      ].join('.')
  }

  const transformDatepickerValueToDate = (datetime) => {
    const date = new Date(datetime)
    const mm = date.getMonth() + 1 // getMonth() is zero-based
    const dd = date.getDate()

    return [
      date.getFullYear(),
      (mm > 9 ? '' : '0') + mm,
      (dd > 9 ? '' : '0') + dd
    ].join('-')
  }

  inject('formatDate', formatDate)
  context.$formatDate = formatDate
  inject('transformDatepickerValueToDate', transformDatepickerValueToDate)
  context.$transformDatepickerValueToDate = transformDatepickerValueToDate
}
