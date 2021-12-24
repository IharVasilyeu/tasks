import { put, call, select } from 'redux-saga/effects'
import { notification } from 'antd'
import {
  actionStartloadingSubtasks,
} from 'store/reducers/taskReducer/actionTypes'
import { deleteSubtask } from 'api/subTasks'
import { getTaskIdFromCurrentRoute } from 'store/selectors'
import { getSubtasksSaga } from './getSubtasksSaga'

export function* deleteSubtaskSaga({ payload }) {
  const id = payload

  try {
    yield put(actionStartloadingSubtasks())

    const taskId = yield select(getTaskIdFromCurrentRoute)

    yield call(deleteSubtask, id)

    yield call(getSubtasksSaga, { payload: taskId })
  } catch (e) {
    notification.error({
      message: e.message,
    })
  }
}
