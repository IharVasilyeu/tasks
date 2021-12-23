const actions =  {
  SET_TASKS_TO_STORE: 'SET_TASKS_TO_STORE',
  CREATE_TASK: 'CREATE_TASK',
  GET_TASKS: 'GET_TASKS',
}

export const actionCreateTask = (payload) => ({
  type: actions.CREATE_TASK,
  payload,
})

export default actions
