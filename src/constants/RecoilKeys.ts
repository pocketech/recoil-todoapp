/* eslint-disable @typescript-eslint/naming-convention */
export const RecoilAtomKeys = {
  TODO_STATE: 'todoState',
  TODO_FILTER_STATE: 'todoFilterState',
} as const

export const RecoilSelectorKeys = {
  TODO_TODOS: 'Todo_todos',
  TODO_TODO_ITEM: 'Todo_todoItem',
  TODO_FILTERED_TODOS: 'Todo_filteredTodos',
  TODO_STATS: 'Todo_stats',
} as const
