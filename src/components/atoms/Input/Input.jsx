import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './Input.styles'

const Input = ({ name, label, ...rest }) => (
  <span>
    <label htmlFor={name}>{label}</label>
    <Wrapper id={name} {...rest} />
  </span>
)

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Input
