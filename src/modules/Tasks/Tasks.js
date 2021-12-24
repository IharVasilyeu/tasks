import React, { useCallback } from 'react'
import { Button } from 'antd'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { TaskTable } from 'components/organisms'
import { actionCreateTask } from 'store/reducers/taskReducer/actionTypes'
import { getLodingTasksFlag, getCreatingTaskFlag } from 'store/selectors'
import { routes } from 'config/routes'
import { SubtaskFilter } from 'components/molecules'
import { Wrapper } from './Tasks.styles'

const Tasks = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { isTaskCreating, isTasksLoading } = useSelector(state => ({
    isTasksLoading: getLodingTasksFlag(state),
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
      <h1>Processes</h1>
      <Button loading={isTaskCreating} onClick={handleCreate}>
        Create
      </Button>
      <Button onClick={handleGoToSearch}>
        Search
      </Button>
      <SubtaskFilter />
      <TaskTable loading={isTasksLoading} />
    </Wrapper>
  )
}

export default Tasks
