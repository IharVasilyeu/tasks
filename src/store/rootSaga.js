import { takeLatest } from 'redux-saga/effects'
import actions from './reducers/taskReducer/actionTypes'
import { getTasks } from './sagas/getTasksSaga'
import { getSubtasksSaga } from './sagas/getSubtasksSaga'
import { createAndLoadTaskSaga } from './sagas/createAndLoadTaskSaga'
import { deleteSubtaskSaga } from './sagas/deleteSubtaskSaga'
import { searchSaga } from './sagas/searchSaga'
import { getTasksByLabelsSaga } from './sagas/getTasksByLabelsSaga'

export default function* () {
  yield takeLatest(actions.GET_TASKS, getTasks)
  yield takeLatest(actions.CREATE_TASK, createAndLoadTaskSaga)
  yield takeLatest(actions.GET_SUBTASKS, getSubtasksSaga)
  yield takeLatest(actions.DELETE_SUBTASK, deleteSubtaskSaga)
  yield takeLatest(actions.SEARCH_TASKS_AND_SUBTASKS, searchSaga)
  yield takeLatest(actions.GET_TASKS_BY_LABELS, getTasksByLabelsSaga)
}
