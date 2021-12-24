import { put, call } from 'redux-saga/effects'
import { notification } from 'antd'
import {
  actionStartloadingSubtasks,
  actionSetSubtasks,
} from 'store/reducers/taskReducer/actionTypes'
import { fetchSubTasks } from 'api/subTasks'


export function* getSubtasksSaga({ payload }) {
  const id = payload

  try {
    yield put(actionStartloadingSubtasks())

    const resp = yield call(fetchSubTasks, id)

    yield put(actionSetSubtasks(resp))
  } catch (e) {
    yield put(actionSetSubtasks([]))
    notification.error({
      message: e.message,
    })
  }
}
