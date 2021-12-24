import { put, call } from 'redux-saga/effects'
import { notification } from 'antd'
import { fetchTasks } from 'api/tasks'
import {
  actionSetTasksToStore,
  actionStartLoadingTasks,
} from 'store/reducers/taskReducer/actionTypes'

export function* getTasks() {
  try {
    yield put(actionStartLoadingTasks())

    const resp = yield call(fetchTasks)

    yield put(actionSetTasksToStore(resp))

  } catch (e) {
    yield put(actionSetTasksToStore([]))
    notification.error({
      message: e.message,
    })
  }
}