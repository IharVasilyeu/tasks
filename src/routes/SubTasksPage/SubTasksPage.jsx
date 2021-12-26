import React from 'react'
import { Alert } from 'antd'
import { SubTasks } from 'modules'
import { DefaultTemplate } from 'components/templates'

const SubTasksPage = () => (
  <Alert.ErrorBoundary>
    <DefaultTemplate>
      <SubTasks />
    </DefaultTemplate>
  </Alert.ErrorBoundary>
)

export default SubTasksPage
