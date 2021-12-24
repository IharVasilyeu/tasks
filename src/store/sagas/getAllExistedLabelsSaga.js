import { put, call } from 'redux-saga/effects'
import { notification } from 'antd'
import {
  actionPutLabelsToStore,
} from 'store/reducers/taskReducer/actionTypes'
import fetchAllData from 'api/fetchAllData'

export function* getAllExistedLabelsSaga() {
  try {
    const resp = yield call(fetchAllData)

    const labels = resp.reduce((acc, item) => {
      if (item.labels) {
        acc.push(...item.labels)
      }

      return Array.from(new Set(acc))
    }, [])

    yield put(actionPutLabelsToStore(labels))
  } catch (e) {
    yield put(actionPutLabelsToStore([]))
    notification.error({
      message: e.message,
    })
  }
}