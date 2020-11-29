import ScientificJobs from '@/api/scientific-jobs'
import ScientificProjects from '@/api/scientific-projects'

export default (context, inject) => {
  // Initialize API repositories
  const repositories = {
    scientificJobs: ScientificJobs(context.$axios),
    scientificProjects: ScientificProjects(context.$axios)
  }
  inject('api', repositories)
};
