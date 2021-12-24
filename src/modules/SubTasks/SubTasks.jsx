import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { SubTaskTable } from 'components/organisms'
import { actionGetSubtasks, actionResetSubtasks } from 'store/reducers/taskReducer/actionTypes'
import { routes } from 'config/routes'
import { getLodingSubtasksFlag, getSubtasks } from 'store/selectors'
import { GoBackButton } from 'components/atoms'
import { Wrapper } from './SubTasks.styles'

const SubTasks = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const {subtasks, isSubtasksloading} = useSelector(state => ({
    subtasks: getSubtasks(state),
    isSubtasksloading: getLodingSubtasksFlag(state),
  }), shallowEqual)

  useEffect(() => {
    dispatch(actionGetSubtasks(id))

    return () => {
      dispatch(actionResetSubtasks())
    }
  }, [dispatch, id])

  return (
    <Wrapper>
      <GoBackButton path={routes.root()} />
      <SubTaskTable subtasks={subtasks} loading={isSubtasksloading} />
    </Wrapper>
  )
}

export default SubTasks
