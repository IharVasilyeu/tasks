import React from 'react'
import { TaskTable } from 'components/organisms'
import { Toolsbar } from 'components/molecules'
import { Wrapper } from './Tasks.styles'

const Tasks = () => (
    <Wrapper>
      <h1>Processes</h1>
      <Toolsbar />
      <TaskTable />
    </Wrapper>
  )

export default Tasks
