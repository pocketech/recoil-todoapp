import { Box, Flex, SimpleGrid, Stack } from '@chakra-ui/react'

import { todoSelectors } from '@/hooks/todo/selectors'

import { TodoItem } from './TodoItem'
import { TodoItemCreator } from './TodoItemCreator'
import { TodoListFilters } from './TodoListFilters'
import { TodoListStats } from './TodoListStats'

export const TodoList: React.VFC = () => {
  const todoList = todoSelectors.useFilteredTodos()
  return (
    <Stack spacing="4">
      <TodoListStats />
      <Flex gridGap="6" align="flex-end">
        <Box flexGrow={2}>
          <TodoItemCreator />
        </Box>
        <Box flexGrow={1}>
          <TodoListFilters />
        </Box>
      </Flex>
      <SimpleGrid columns={2} spacing="10" bg="gray.100" p="6" rounded="md">
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </SimpleGrid>
    </Stack>
  )
}
