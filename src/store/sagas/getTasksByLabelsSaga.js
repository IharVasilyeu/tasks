import { put, call } from 'redux-saga/effects'
import { notification } from 'antd'
import {
  actionSetTasksToStore,
} from 'store/reducers/taskReducer/actionTypes'
import fetchAllData from 'api/fetchAllData'

export function* getTasksByLabelsSaga({ payload }) {
  const labels = payload

  try {

    const resp = yield call(fetchAllData)

    const subtasks = resp.filter(item => item.labels?.some(la => labels.some(it => it === la)))

    const tasks = resp.filter(item => !item.taskId)
  
    const filteredBylabelsTasks = tasks.filter(item => subtasks.some(st => st.taskId === item.id))

    yield put(actionSetTasksToStore(filteredBylabelsTasks.length ? filteredBylabelsTasks : tasks))
  } catch (e) {
    yield put(actionSetTasksToStore([]))
    notification.error({
      message: e.message,
    })
  }
}