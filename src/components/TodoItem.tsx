import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react'

import { todoActions } from '@/hooks/todo/actions'
import type { TodoItem as TodoItemType } from '@/hooks/todo/state'

type Props = {
  item: TodoItemType
}
export const TodoItem: React.VFC<Props> = ({ item }) => {
  const setEdit = todoActions.useEditTodoItem()
  const setRemove = todoActions.useRemoveTodoItem()
  const setToggle = todoActions.useToggleTodoItem()

  return (
    <Box boxShadow="md" rounded="md" bg="white" p="6">
      <FormControl id="label">
        <FormLabel>ラベル</FormLabel>
        <Input type="text" value={item.label} onChange={(e) => setEdit(item, e.target.value)} />
        <FormHelperText>（例） ゴミ出し</FormHelperText>
      </FormControl>
      <Flex justify="space-between">
        <Checkbox
          checked={item.isComplete}
          defaultChecked={item.isComplete}
          onChange={() => setToggle(item)}
        >
          完了
        </Checkbox>
        <Button onClick={() => setRemove(item)} colorScheme="red">
          削除
        </Button>
      </Flex>
    </Box>
  )
}
