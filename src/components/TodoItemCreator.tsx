import { Button, Flex, Input } from '@chakra-ui/react'
import type { ChangeEventHandler } from 'react'
import { useState } from 'react'

import { todoActions } from '@/hooks/todo/actions'

export const TodoItemCreator: React.VFC = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = todoActions.useAddTodoItem()

  const addItem = () => {
    setTodoList(inputValue)
    setInputValue('')
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setInputValue(value)
  }

  return (
    <Flex>
      <Input
        type="text"
        value={inputValue}
        onChange={onChange}
        placeholder="TODOを追加して下さい"
      />
      <Button onClick={addItem} colorScheme="blue">
        新規作成
      </Button>
    </Flex>
  )
}
