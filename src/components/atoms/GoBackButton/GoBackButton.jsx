import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Wrapper } from './GoBackButton.styles'

const GoBackButton = ({path}) => (
    <Wrapper>
      <nav>
        <Link to={path}>Go Back</Link>
      </nav>
    </Wrapper>
  )

GoBackButton.propTypes = {
  path: PropTypes.string.isRequired,
}

export default GoBackButton
