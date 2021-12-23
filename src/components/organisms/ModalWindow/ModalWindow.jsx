import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { CloseCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import getChildrenForModalWindow from 'helpers/getChildrenForModalWindow'
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
    if (e.target.id === 'modalLayout') {
      setIsModalOpen(false)
      setTimeout(() => setChildrenType(''), 300)
    }
  }, [])

  const handleButtonClose = useCallback(() => {
    setIsModalOpen(false)
    setTimeout(() => setChildrenType(''), 300)
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
            <Button id="closeModalBtn" onClick={handleButtonClose} icon={<CloseCircleOutlined />}>
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
