import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { actionDeleteSubtask } from 'store/reducers/taskReducer/actionTypes'

const TableSubtaskActions = ({ id }) => {
  const dispatch = useDispatch()
  const handleDelete = useCallback(() => {
    dispatch(actionDeleteSubtask(id))
  }, [id, dispatch])

  return <Button onClick={handleDelete}>Delete Subtasks</Button>
}

TableSubtaskActions.propTypes = {
  id: PropTypes.string.isRequired,
}

export default TableSubtaskActions
