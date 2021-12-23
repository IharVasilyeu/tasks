import { takeLatest, takeEvery } from 'redux-saga/effects'
import actions from './reducers/taskReducer/actionTypes'


function* getTasks() {}

function* createTask({ payload }) {
  yield console.log('🚀 ~ function*createTask ~ payload', payload)
}

export default function* () {
  // yield takeLatest(actionTaskypes.GET_TASKS, getTasks)
  yield takeEvery(actions.CREATE_TASK, createTask)
}
