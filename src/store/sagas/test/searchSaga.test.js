/* eslint-disable jest/expect-expect */
import { expectSaga } from 'redux-saga-test-plan'
import actionTypes from "store/reducers/taskReducer/actionTypes"
import { searchSaga } from 'store/sagas/searchSaga'

const mockResult = [
  {
    id: 'qwe',
    title: 'title',
    time: new Date().getTime(),
  },
]

jest.mock('api/fetchAllData', () => () => mockResult)

const initialState = {
  searchResult: [],
}

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.PUT_SERACH_RESULT_TO_STORE:
      return {
        ...state,
        searchResult: payload,
      }
    
    default: 
      return state
  }
}

describe('Search saga', () => {
  it('should returns tasks wich titles include "title"', () =>
    expectSaga(searchSaga, { payload: 'title' })
      .withReducer(taskReducer)
      .hasFinalState({
        searchResult: mockResult,
      })
      .run())

  it('should returns an epmty tasks array if thier titles do not include provided string', () =>
    expectSaga(searchSaga, { payload: 'some' })
      .withReducer(taskReducer)
      .hasFinalState({
        searchResult: [],
      })
      .run())
})
