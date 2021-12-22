import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import getChildrenForModalWindow from 'helpers/getChildrenForModalWindow'
import { Button } from 'components/atoms'
import { Wrapper } from './ModalWindow.styles'

const ModalWindow = () => {
  const [isPortalElementAppend, setIsPortalElementAppend] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [childrenType, setChildrenType] = useState('')

  ModalWindow.open = useCallback(modalType => {
    setChildrenType(modalType)
    setIsModalOpen(true)
  }, [])

  const handleClose = useCallback(e => {
    if (e.target.id === 'modalLayout' || e.target.id === 'closeModalBtn') {
      setIsModalOpen(false)
      setChildrenType('')
    }
  }, [])

  useEffect(() => {
    if (isPortalElementAppend) return

    const portalElement = document.createElement('div')

    portalElement.id = 'portal'
    document.body.appendChild(portalElement)
    setIsPortalElementAppend(true)
  }, [isPortalElementAppend])

  return (
    isPortalElementAppend &&
    ReactDOM.createPortal(
      <Wrapper id="modalLayout" onClick={handleClose} isOpen={isModalOpen}>
        <div className="modal">
          <div className="modal__head">
            <Button id="closeModalBtn" onClick={handleClose}>
              Close
            </Button>
          </div>
          <div className="modal__body">{getChildrenForModalWindow(childrenType)}</div>
        </div>
      </Wrapper>,
      document.getElementById('portal'),
    )
  )
}

export default ModalWindow
