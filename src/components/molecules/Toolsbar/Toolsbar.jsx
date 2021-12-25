import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { getCreatingTaskFlag } from 'store/selectors'
import { actionCreateTask } from 'store/reducers/taskReducer/actionTypes'
import { routes } from 'config/routes'
import { SubtaskFilter } from 'components/molecules'
import { Wrapper } from './Toolsbar.styles'

const Toolsbar = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { isTaskCreating } = useSelector(state => ({
    isTaskCreating: getCreatingTaskFlag(state),
  }), shallowEqual)

  const handleCreate = useCallback(() => {
    dispatch(actionCreateTask())
  }, [dispatch])

  const handleGoToSearch= useCallback(() => {
    history.push(routes.search())
  }, [history])

  
return (
    <Wrapper>
      <Button loading={isTaskCreating} onClick={handleCreate}>
        Create
      </Button>
      <Button onClick={handleGoToSearch}>Search</Button>
      <SubtaskFilter />
    </Wrapper>
  )
}


export default Toolsbar
