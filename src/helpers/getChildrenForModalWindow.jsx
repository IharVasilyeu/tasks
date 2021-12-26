import React from 'react'
import modalTypes from 'config/modalTypes'
import { ConfimationDelete } from 'components/molecules'

export default (type, { additional, handleClose }) => {
  const children = {
    [modalTypes.DELETE_SUBTASK]: <ConfimationDelete id={additional} handleClose={handleClose} />,
  }

  return children[type]
}
