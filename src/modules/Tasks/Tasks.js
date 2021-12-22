import React, { useCallback, useEffect } from 'react'
import { Button } from 'components/atoms'
import ModalWindow from 'components/organisms/ModalWindow/ModalWindow'
import modalTypes from 'config/modalTypes'

const Tasks = () =>  {
  useEffect(() => {

  }, [])

  const handleOpenCreateForm = useCallback(() => {
    ModalWindow.open(modalTypes.CREATE)
  }, [])

  return (
    <div>
      <ModalWindow />
      <h1>Processes</h1>
      <Button onClick={handleOpenCreateForm}>Create</Button>
    </div>
  )
}

export default Tasks
