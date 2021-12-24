/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Button, Space } from 'antd'
import { useHistory } from 'react-router'

const TableTaskActions = ({ data }) => {
  const history = useHistory()
  const handleClick = useCallback(() => history.push(`/subtasks/${data.id}`), [history, data])

  return (
    <Space>
      <Button onClick={handleClick}>Show Subtasks</Button>
    </Space>
  )
}

TableTaskActions.propTypes = {
  data: PropTypes.shape({
    createTime: PropTypes.number,
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
}

export default TableTaskActions
