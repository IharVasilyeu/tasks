import React from 'react'
import { Alert } from 'antd'
import { SubTasks } from 'modules'

const SubTasksPage = () => (
  <Alert.ErrorBoundary>
    <SubTasks />
  </Alert.ErrorBoundary>
)

export default SubTasksPage
