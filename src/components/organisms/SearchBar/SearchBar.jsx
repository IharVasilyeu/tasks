import { Input } from 'antd'
import React, { useCallback } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { actionSearchTasksAndSubtascks } from 'store/reducers/taskReducer/actionTypes'
import { getSearchLoadingFlag } from 'store/selectors'
import { Wrapper } from './SearchBar.styles'

const SearchBar = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => ({
    loading: getSearchLoadingFlag(state)
  }))

  const handleSearch = useCallback((e) => {
    dispatch(actionSearchTasksAndSubtascks(e))
  }, [dispatch])

  return (
    <Wrapper>
      <Input.Search
        loading={loading}
        placeholder="Input Search Title"
        enterButton="Search"
        onSearch={handleSearch}
      />
    </Wrapper>
  )
}

export default SearchBar
