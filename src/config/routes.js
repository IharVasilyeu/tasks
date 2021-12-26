export const routes = {
  root: () => '/',
  subtasks: (id) => `${id ? `/subtasks/${id}`: '/subtasks/:id'}`,
  search: () => '/search',
}
