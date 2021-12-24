import Storage from 'utils/storage'
import delay from 'utils/delay'

export default delay(subTaskId => {
  const subTasks = Storage.subTasks.get()
  const tasks = Storage.tasks.get()
  const subTask = subTasks.find(t => t.id === subTaskId)
  
  if (subTask) {
    Storage.subTasks.set(subTasks.filter(st => st.id !== subTaskId))

    const restSubtasks = Storage.subTasks.get()
    const taskIds = [...new Set(restSubtasks.map(st => st.taskId))]
  
    const isSubTaskExists = !!tasks.find(t => !taskIds.includes(t.id))
    
    if (isSubTaskExists) {
      Storage.tasks.set(tasks.filter(t => t.id !== subTask.taskId))
    }
  
    return subTask
  }

  

  throw new Error(`SubTask [${subTaskId}] not found`)
})
