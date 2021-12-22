import React from 'react'
import modalTypes from 'config/modalTypes'
import { CreateTaskForm } from 'components/organisms'

export default (type) => {
  const children = {
    [modalTypes.CREATE]: <CreateTaskForm />
  }

  return children[type]
}