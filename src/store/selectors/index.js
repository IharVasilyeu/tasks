export const getTaskIdFromCurrentRoute = state => state.router.location.pathname.split('/')[2]
export const getSubtasks = state => state.taskReducer.subtasks
export const getLodingSubtasksFlag = state => state.taskReducer.isSubtasksloading
export const getLodingTasksFlag = state => state.taskReducer.isTasksLoading
export const getCreatingTaskFlag = state => state.taskReducer.isTaskCreating
export const getSearchResults = state => state.taskReducer.searchResult
export const getSearchLoadingFlag = state => state.taskReducer.isSearching
export const getLabels = state => state.taskReducer.labels
export const getFilterLoadingFlag = state => state.taskReducer.isFiltring