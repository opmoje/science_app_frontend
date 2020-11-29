export default $axios => ({
  find (id) {
    return $axios.$get('/api/scientific_projects/' + parseInt(id))
  },
  findAll (page) {
    const query = (typeof page !== 'undefined' && page > 1) ? '?page=' + page : ''
    return $axios.$get('/api/scientific_projects' + query)
  },
  create (entity) {
    return $axios.$post('/api/scientific_projects', entity)
  }
});
