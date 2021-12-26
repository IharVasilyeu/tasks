import React from 'react'
import { TaskPageHeader, TaskTable } from 'components/organisms'
import { Wrapper } from './Tasks.styles'

const Tasks = () => (
  <Wrapper>
    <TaskPageHeader />
    <TaskTable />
  </Wrapper>
)

export default Tasks
