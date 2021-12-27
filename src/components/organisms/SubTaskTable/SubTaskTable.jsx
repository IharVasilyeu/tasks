import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import { TableSubtaskActions, LabelsSet } from 'components/molecules'
import { Wrapper } from './SubTaskTable.styles'

const SubTaskTable = ({ subtasks, loading }) => {
  const columns = useMemo(
    () => [
      {
        title: 'Name',
        dataIndex: 'title',
        key: 'name',
        sorter: (a, b) => a.title < b.title ? 1 : -1,
      },
      {
        title: 'Labels',
        key: 'Labels',
        render: data => <LabelsSet lables={data.labels} />,
      },
      {
        title: 'Action',
        key: 'Action',
        render: data => <TableSubtaskActions id={data.id} />,
      },
    ],
    [],
  )

  const handleKey = useCallback(data => data.title, [])

  return (
    <Wrapper>
      <Table
        loading={loading}
        dataSource={subtasks}
        columns={columns}
        rowKey={handleKey}
        pagination={false}
      />
    </Wrapper>
  )
}

SubTaskTable.propTypes = {
  loading: PropTypes.bool.isRequired,
  subtasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      labels: PropTypes.arrayOf(PropTypes.string),
      taskId: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
}

export default SubTaskTable
