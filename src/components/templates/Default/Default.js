import React from 'react'
import PropTypes from 'prop-types'
import { ModalWindow } from 'components/organisms'
import { Wrapper } from './Default.styles'

const Default = ({ children }) => (
  <Wrapper>
    <ModalWindow />
    {children}
  </Wrapper>
)

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default
