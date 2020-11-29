export default $axios => ({
  find (id) {
    return $axios.$get('/api/scientific_jobs/' + parseInt(id))
  },
  findAll (page) {
    const query = (typeof page !== 'undefined' && page > 1) ? '?page=' + page : ''
    return $axios.$get('/api/scientific_jobs' + query)
  }
});