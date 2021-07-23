import { useRecoilCallback } from 'recoil'
import { v4 as uuidv4 } from 'uuid'

import { removeItemAtIndex, replaceItemAtIndex } from '@/utils/array'

import type { TodoItem } from './state'
import { todoState } from './state'

type TodoActions = {
  useAddTodoItem: () => (label: string) => void
  useRemoveTodoItem: () => (item: TodoItem) => void
  useEditTodoItem: () => (item: TodoItem, label: string) => void
  useToggleTodoItem: () => (item: TodoItem) => void
}
export const todoActions: TodoActions = {
  // Todoを追加する
  useAddTodoItem: () =>
    useRecoilCallback(
      ({ set }) =>
        (label: string) => {
          set(todoState, (current) => {
            const newItem: TodoItem = {
              id: uuidv4(),
              label,
              isComplete: false,
            }
            return {
              ...current,
              todos: [...current.todos, newItem],
            }
          })
        },
      []
    ),
  useRemoveTodoItem: () =>
    useRecoilCallback(
      ({ set }) =>
        (item: TodoItem) => {
          set(todoState, (current) => {
            const index = current.todos.findIndex((listItem) => listItem.id === item.id)
            const todos = removeItemAtIndex(current.todos, index)
            return {
              ...current,
              todos,
            }
          })
        },
      []
    ),
  useEditTodoItem: () =>
    useRecoilCallback(
      ({ set }) =>
        (item: TodoItem, label: string) => {
          set(todoState, (current) => {
            const index = current.todos.findIndex((listItem) => listItem.id === item.id)
            const updatedItem: TodoItem = {
              ...item,
              label,
            }
            const todos = replaceItemAtIndex(current.todos, index, updatedItem)
            return {
              ...current,
              todos,
            }
          })
        },
      []
    ),
  useToggleTodoItem: () =>
    useRecoilCallback(
      ({ set }) =>
        (item: TodoItem) => {
          set(todoState, (current) => {
            const index = current.todos.findIndex((listItem) => listItem.id === item.id)
            const updatedItem: TodoItem = {
              ...item,
              isComplete: !item.isComplete,
            }
            const todos = replaceItemAtIndex(current.todos, index, updatedItem)
            return {
              ...current,
              todos,
            }
          })
        },
      []
    ),
}
