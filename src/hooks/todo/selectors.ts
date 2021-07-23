import type { SetterOrUpdater } from 'recoil'
import { selector, selectorFamily, useRecoilState, useRecoilValue } from 'recoil'

import { RecoilSelectorKeys } from '@/constants/RecoilKeys'

import type { TodoFilterState, TodoItem } from './state'
import { todoFilterState } from './state'
import { todoState } from './state'

type TodoStats = {
  totalNum: number
  totalCompletedNum: number
  totalUncompletedNum: number
  percentCompleted: number
}

type TodoSelectors = {
  useTodos: () => TodoItem[]
  useFilteredTodos: () => TodoItem[]
  useTodoItem: (id: string) => TodoItem | undefined
  useFilter: () => [TodoFilterState, SetterOrUpdater<TodoFilterState>]
  useStats: () => TodoStats
}
// すべてのTodoを読み出す
const todosSelector = selector<TodoItem[]>({
  key: RecoilSelectorKeys.TODO_TODOS,
  get: ({ get }) => get(todoState).todos,
})
// IDで指定したTodoを読み出す
const todoItemSelector = selectorFamily<TodoItem | undefined, string>({
  key: RecoilSelectorKeys.TODO_TODO_ITEM,
  get:
    (id) =>
    ({ get }) => {
      const todos = get(todoState).todos
      return todos.find((item) => item.id === id)
    },
})

const todosFilteredSelector = selector<TodoItem[]>({
  key: RecoilSelectorKeys.TODO_FILTERED_TODOS,
  get: ({ get }) => {
    const todos = get(todoState).todos
    const filter = get(todoFilterState)

    switch (filter) {
      case 'completed':
        return todos.filter((item) => item.isComplete)
      case 'uncompleted':
        return todos.filter((item) => !item.isComplete)
      case 'all':
        return todos
      default: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _exhaustiveCheck: never = filter
        throw new Error(`${filter} is not TodoFilterState.`)
      }
    }
  },
})

const todosStatsSelector = selector<TodoStats>({
  key: RecoilSelectorKeys.TODO_STATS,
  get: ({ get }) => {
    const todos = get(todoState).todos
    const totalNum = todos.length
    const totalCompletedNum = todos.filter((item) => item.isComplete).length
    const totalUncompletedNum = todos.filter((item) => !item.isComplete).length
    const percentCompleted = totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100
    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  },
})

export const todoSelectors: TodoSelectors = {
  useTodos: () => useRecoilValue(todosSelector),
  useTodoItem: (id: string) => useRecoilValue(todoItemSelector(id)),
  useFilteredTodos: () => useRecoilValue(todosFilteredSelector),
  useFilter: () => useRecoilState(todoFilterState),
  useStats: () => useRecoilValue(todosStatsSelector),
}
