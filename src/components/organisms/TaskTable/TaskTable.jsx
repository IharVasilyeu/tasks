import React, { useCallback, useEffect, useMemo } from 'react'
import { Table } from 'antd'
import PropTypes from 'prop-types'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import moment from 'moment'
import { TableTaskActions } from 'components/molecules'
import { actionGetTasks } from 'store/reducers/taskReducer/actionTypes'
import { FORMAT_DATE_YMD_HMS } from 'config/constants'
import { Wrapper } from './TaskTable.styles'

const TaskTable = ({ loading }) => {
  const dispatch = useDispatch()
  const { tasks } = useSelector(state => state.taskReducer, shallowEqual)

  const columns = useMemo(
    () => [
      {
        title: 'Name',
        dataIndex: 'title',
        key: 'name',
        width: '50%',
        sorter: (a, b) => a.title < b.title,
      },
      {
        title: 'Created At',
        key: 'Created At',
        sorter: (a, b) => a.createTime - b.createTime,
        render: ({ createTime }) => <div>{moment(createTime).format(FORMAT_DATE_YMD_HMS)}</div>,
      },
      {
        title: 'Action',
        key: 'Action',
        render: data => <TableTaskActions data={data} />,
      },
    ],
    [],
  )

  const handleKey = useCallback(data => data.title, [])

  useEffect(() => {
    dispatch(actionGetTasks())
  }, [dispatch])

  return (
    <Wrapper>
      <Table
        loading={loading}
        dataSource={tasks}
        columns={columns}
        rowKey={handleKey}
        pagination={false}
      />
    </Wrapper>
  )
}

TaskTable.propTypes = {
  loading: PropTypes.bool.isRequired,
}

export default TaskTable
