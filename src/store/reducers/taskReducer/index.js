import actionTypes from "./actionTypes"


const initialState = {
  tasks: [],
  subtasks: [],
  searchResult: [],
  labels: [],
  isTaskCreating: false,
  isTasksLoading: false,
  isSubtasksloading: false,
  isSearching: false,
  isFiltring: false,
}

export const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_TASKS_TO_STORE: 
      return {
        ...state,
        tasks: payload,
        isFiltring: false,
        isTasksLoading: false,
      }

    case actionTypes.START_CREATING_TASK: 
      return {
        ...state,
        isTaskCreating: true,
      }

    case actionTypes.TASK_IS_CREATED: 
      return {
        ...state,
        isTaskCreating: false,
      }

    case actionTypes.START_LOADING_SUBTASKS: 
      return {
        ...state,
        isSubtasksloading: true,
      }

    case actionTypes.START_LOADING_TASKS: 
      return {
        ...state,
        isTasksLoading: true,
      }

    case actionTypes.SET_ERROR: 
      return {
        ...state,
        isSuccess: false,
      }

    case actionTypes.SET_SUBTASKS: 
      return {
        ...state,
        subtasks: payload,
        isSubtasksloading: false,
      }

    case actionTypes.RESET_SUBTASKS: 
      return {
        ...state,
        subtasks: [],
      }

    case actionTypes.PUT_SERACH_RESULT_TO_STORE: 
      return {
        ...state,
        searchResult: payload,
        isSearching: false,
      }

    case actionTypes.START_SEARCHING:
      return {
        ...state,
       isSearching: true,
      }

    case actionTypes.PUT_LABELS_TO_STORE:
      return {
        ...state,
       labels: payload,
      }

    case actionTypes.GET_TASKS_BY_LABELS:
      return {
        ...state,
       isFiltring: true,
      }

    default: 
      return state
  }
}
