import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'
import { Wrapper } from './LabelsSet.styles'

const LabelsSet = ({ lables = [] }) => (
  <Wrapper>
    {lables.map(label => (
      <Tag key={label} color="magenta">{label}</Tag>
    ))}
  </Wrapper>
)

LabelsSet.propTypes = {
  lables: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default LabelsSet
