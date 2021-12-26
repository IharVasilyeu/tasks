import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import modalTypes from 'config/modalTypes'
import { ModalWindow } from 'components/organisms'

const TableSubtaskActions = ({ id }) => {
  const handleDelete = useCallback(() => {
    ModalWindow.open(modalTypes.DELETE_SUBTASK, id)
  }, [id])

  return <Button onClick={handleDelete}>Delete Subtasks</Button>
}

TableSubtaskActions.propTypes = {
  id: PropTypes.string.isRequired,
}

export default TableSubtaskActions
