const actions = {
  SET_TASKS_TO_STORE: 'SET_TASKS_TO_STORE',
  CREATE_TASK: 'CREATE_TASK',
  GET_TASKS: 'GET_TASKS',
  GET_SUBTASKS: 'GET_SUBTASKS',
  SET_SUBTASKS: 'SET_SUBTASKS',

  START_CREATING_TASK: 'START_CREATING_TASK',
  TASK_IS_CREATED: 'TASK_IS_CREATED',

  START_SEARCHING: 'START_SEARCHING',

  START_LOADING_TASKS: 'START_LOADING_TASKS',
  TASKS_ARE_LOADED: 'TASKS_ARE_LOADED',

  GET_TASKS_BY_LABELS: 'GET_TASKS_BY_LABELS',

  START_LOADING_SUBTASKS: 'START_LOADING_SUBTASKS',
  SUBTASKS_ARE_LOADED: 'SUBTASKS_ARE_LOADED',

  DELETE_SUBTASK: 'DELETE_SUBTASK',

  SEARCH_TASKS_AND_SUBTASKS: 'SEARCH_TASKS_AND_SUBTASKS',
  PUT_SERACH_RESULT_TO_STORE: 'PUT_SERACH_RESULT_TO_STORE',

  GET_LABELS: 'GET_LABELS',

  PUT_LABELS_TO_STORE: 'PUT_LABELS_TO_STORE',

  RESET_SUBTASKS: 'RESET_SUBTASKS',
}

export const actionCreateTask = () => ({
  type: actions.CREATE_TASK,
})
export const actionStartCreatingTask = () => ({
  type: actions.START_CREATING_TASK,
})
export const actionTaskIsCreated = () => ({
  type: actions.TASK_IS_CREATED,
})
export const actionTaskCreationSuccess = () => ({
  type: actions.TASK_IS_CREATED,
})
export const actionTaskCreationError = () => ({
  type: actions.TASK_IS_CREATED,
})
export const actionGetTasks = () => ({
  type: actions.GET_TASKS,
})
export const actionStartLoadingTasks = () => ({
  type: actions.START_LOADING_TASKS,
})
export const actionTasksAreLoaded = () => ({
  type: actions.TASKS_ARE_LOADED,
})
export const actionSetTasksToStore = payload => ({
  type: actions.SET_TASKS_TO_STORE,
  payload,
})
export const actionGetSubtasks = id => ({
  type: actions.GET_SUBTASKS,
  payload: id,
})
export const actionStartloadingSubtasks = () => ({
  type: actions.START_LOADING_SUBTASKS,
})
export const actionSubtasksAreLoaded = () => ({
  type: actions.SUBTASKS_ARE_LOADED,
})
export const actionSetSubtasks = payload => ({
  type: actions.SET_SUBTASKS,
  payload,
})
export const actionResetSubtasks = () => ({
  type: actions.RESET_SUBTASKS,
})
export const actionDeleteSubtask = id => ({
  type: actions.DELETE_SUBTASK,
  payload: id,
})
export const actionSearchTasksAndSubtascks = serachString => ({
  type: actions.SEARCH_TASKS_AND_SUBTASKS,
  payload: serachString,
})
export const actionPutSerarchResultToStore = serachResult => ({
  type: actions.PUT_SERACH_RESULT_TO_STORE,
  payload: serachResult,
})
export const actionStartSerarching = () => ({
  type: actions.START_SEARCHING,
})
export const actionPutLabelsToStore = labels => ({
  type: actions.PUT_LABELS_TO_STORE,
  payload: labels,
})
export const actionGetLabels = () => ({
  type: actions.GET_LABELS,
})
export const actionGetTasksByLabels = labels => ({
  type: actions.GET_TASKS_BY_LABELS,
  payload: labels,
})

export default actions
