import { atom } from 'recoil'

import { RecoilAtomKeys } from '@/constants/RecoilKeys'

export type TodoItem = {
  id: string
  label: string
  isComplete: boolean
}

type TodoState = {
  todos: TodoItem[]
}
export type TodoFilterState = 'completed' | 'uncompleted' | 'all'
/**
 * @package
 */
export const todoState = atom<TodoState>({
  key: RecoilAtomKeys.TODO_STATE,
  default: {
    todos: [],
  },
})
/**
 * @package
 */
export const todoFilterState = atom<TodoFilterState>({
  key: RecoilAtomKeys.TODO_FILTER_STATE,
  default: 'all',
})
