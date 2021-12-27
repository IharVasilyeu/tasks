import React, { useCallback, useEffect, useMemo } from 'react'
import { Table } from 'antd'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import moment from 'moment'
import { TableTaskActions } from 'components/molecules'
import { actionGetTasks } from 'store/reducers/taskReducer/actionTypes'
import { FORMAT_DATE_YMD_HMS } from 'config/constants'
import { getLodingTasksFlag, getTasks } from 'store/selectors'
import { Wrapper } from './TaskTable.styles'

const TaskTable = () => {
  const dispatch = useDispatch()
  const { tasks, isTasksLoading } = useSelector(state => ({
    tasks: getTasks(state),
    isTasksLoading: getLodingTasksFlag(state),
  }), shallowEqual)

  const columns = useMemo(
    () => [
      {
        title: 'Name',
        dataIndex: 'title',
        key: 'name',
        width: '50%',
        sorter: (a, b) => a.title < b.title ? 1 : -1,
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
        loading={isTasksLoading}
        dataSource={tasks}
        columns={columns}
        rowKey={handleKey}
        pagination={false}
      />
    </Wrapper>
  )
}


export default TaskTable
