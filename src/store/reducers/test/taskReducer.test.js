import { taskReducer } from 'store/reducers/taskReducer'
import actionTypes from 'store/reducers/taskReducer/actionTypes'

const initialState = {
  tasks: [],
  isFiltring: false,
  isTasksLoading: false,
}

describe('taskReducer', () => {
  it('should returns tasks by provided payload', () => {
    const payload = [
      {
        title: 'kek',
      },
    ]

    const action = {
      type: actionTypes.SET_TASKS_TO_STORE,
      payload,
    }

    const expectation = {
      tasks: [{ title: 'kek' }],
      isFiltring: false,
      isTasksLoading: false,
    }

    expect(taskReducer(initialState, action)).toStrictEqual(expectation)
  })
})
