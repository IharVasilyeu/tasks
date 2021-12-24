import Storage from 'utils/storage'
import delay from 'utils/delay'

export default delay(() => [
  ...Storage.subTasks.get(),
  ...Storage.tasks.get(),
])
