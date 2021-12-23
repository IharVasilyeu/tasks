import actionTypes from "./actionTypes"

const { SET_TASKS_TO_STORE } = actionTypes

const initialState = {
  tasks: [],
}

export const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TASKS_TO_STORE: 
      return {
        ...state,
        tasks: payload,
      }

    default: 
      return state
  }
}
