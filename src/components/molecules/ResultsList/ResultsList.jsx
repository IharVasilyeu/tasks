import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { List, Tag } from 'antd'
import { Wrapper } from './ResultsList.styles'

const ResultsList = ({ data }) => {
  const render = useCallback(
    item => (
      <List.Item>
        <div>{item.title}</div>
        {item.taskId ? <Tag color="green">Subtask</Tag> : <Tag color="purple">Task</Tag>}
      </List.Item>
    ),
    [],
  )

  return (
    <Wrapper>
      <List
        bordered
        dataSource={data}
        renderItem={render}
      />
    </Wrapper>
  )
}

ResultsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ResultsList
