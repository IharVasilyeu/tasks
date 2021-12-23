import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './Input.styles'

const Input = ({ name, label, isError,  ...rest }) => (
  <Wrapper isError={isError}>
    <label htmlFor={name}>{label}</label>
    <input id={name} {...rest} />
  </Wrapper>
)

Input.defaultProps = {
  isError: false,
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isError: PropTypes.bool,
}

export default Input
