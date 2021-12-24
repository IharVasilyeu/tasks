import { put, call } from 'redux-saga/effects'
import { notification } from 'antd'
import {
  actionStartCreatingTask,
  actionTaskIsCreated,
} from 'store/reducers/taskReducer/actionTypes'
import { createTask } from 'api/tasks'
import { getTasks } from './getTasksSaga'

export function* createAndLoadTaskSaga() {
  try {
    yield put(actionStartCreatingTask())

    yield call(createTask)

    yield call(getTasks)

    yield put(actionTaskIsCreated())
  } catch (e) {
    yield put(actionTaskIsCreated())
    notification.error({
      message: e.message,
    })
  }
}
