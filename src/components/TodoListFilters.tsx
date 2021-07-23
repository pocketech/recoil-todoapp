import { FormControl, FormLabel, Select } from '@chakra-ui/react'

import { todoSelectors } from '@/hooks/todo/selectors'

export const TodoListFilters: React.VFC = () => {
  const [filter, setFilter] = todoSelectors.useFilter()
  const option: { [P in typeof filter]: { value: P; text: string } } = {
    all: {
      value: 'all',
      text: 'すべて',
    },
    completed: {
      value: 'completed',
      text: '完了',
    },
    uncompleted: {
      value: 'uncompleted',
      text: '未完了',
    },
  }
  const options = (Object.keys(option) as (keyof typeof option)[]).map((key) => option[key])
  return (
    <FormControl id="filter">
      <FormLabel>絞り込み</FormLabel>
      <Select value={filter} onChange={(e) => setFilter(e.target.value as typeof filter)}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.text}
          </option>
        ))}
      </Select>
    </FormControl>
  )
}
