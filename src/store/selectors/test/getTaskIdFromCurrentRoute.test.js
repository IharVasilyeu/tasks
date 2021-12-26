import { getTaskIdFromCurrentRoute } from 'store/selectors'

describe('Selector getTaskIdFromCurrentRoute', () => {
  it('Should returns correct ID', () => {
    const state = {
      router: {
        location: {
          pathname: '/a/b'
        }
      }
    }

    expect(getTaskIdFromCurrentRoute(state)).toBe('b')
  })
})