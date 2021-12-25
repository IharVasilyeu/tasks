import { put, call } from 'redux-saga/effects'
import { notification } from 'antd'
import {
  actionStartSerarching,
  actionPutSerarchResultToStore,
} from 'store/reducers/taskReducer/actionTypes'
import fetchAllData from 'api/fetchAllData'

export function* searchSaga({ payload }) {
  const searchString = payload
  
  try {
    yield put(actionStartSerarching())

    const resp = yield call(fetchAllData)

    const serchedResult = resp
      .filter(item => item.title.includes(searchString))
      .sort((a, b) => (a.title > b.title ? 1 : -1))

    if (serchedResult.length === 0) {
      throw new Error('No results')
    }

    yield put(actionPutSerarchResultToStore(serchedResult))
  } catch (e) {
    yield put(actionPutSerarchResultToStore([]))
    notification.error({
      message: e.message,
    })
  }
}