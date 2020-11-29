export default $axios => ({
  find (id) {
    return $axios.$get('/api/scientific_jobs/' + parseInt(id))
  },
  findAll (page, authorId) {
    let queries = []
    if ((typeof page !== 'undefined' && page > 1)) {
      queries.push('page=' + page)
    }

    if ((typeof authorId !== 'undefined' && authorId > 0)) {
      queries.push('author=' + authorId)
    }

    const queryStr = queries.length ? '?' + queries.join('&') : ''
    return $axios.$get('/api/scientific_jobs' + queryStr)
  }
});
