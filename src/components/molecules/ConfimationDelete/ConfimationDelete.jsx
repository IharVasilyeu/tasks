import React, { useCallback } from 'react'
import { Button } from 'antd'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { actionDeleteSubtask } from 'store/reducers/taskReducer/actionTypes'
import { Wrapper } from './ConfimationDelete.styles'

const ConfimationDelete = ({ id, handleClose }) => {
  const dispatch = useDispatch()
  const handleClick = useCallback(() => {
    dispatch(actionDeleteSubtask(id))
    handleClose()
  }, [dispatch, id, handleClose])

  return (
    <Wrapper>
      <h3>Are You shure?</h3>
      <Button onClick={handleClick}>Delete</Button>
    </Wrapper>
  )
}

ConfimationDelete.defaultProps = {
  id: '',
}

ConfimationDelete.propTypes = {
  id: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
}

export default ConfimationDelete
