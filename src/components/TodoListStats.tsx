import { Box, Flex } from '@chakra-ui/react'

import { todoSelectors } from '@/hooks/todo/selectors'

export const TodoListStats: React.VFC = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    todoSelectors.useStats()

  const formattedPercentCompleted = Math.round(percentCompleted)

  return (
    <Box overflow="hidden" mt="8">
      <Flex wrap="wrap" as="dl" mx="-8" mt="-8">
        <Flex direction="column" px="8" pt="8">
          <Box as="dt" color="gray.500" order={2}>
            すべてのTODO
          </Box>
          <Box
            as="dd"
            fontSize={{ base: '2xl', sm: '3xl' }}
            order={1}
            fontWeight="extrabold"
            color="blue.500"
          >
            {totalNum}個
          </Box>
        </Flex>
        <Flex direction="column" px="8" pt="8">
          <Box as="dt" color="gray.500" order={2}>
            完了したTODO
          </Box>
          <Box
            as="dd"
            fontSize={{ base: '2xl', sm: '3xl' }}
            order={1}
            fontWeight="extrabold"
            color="blue.500"
          >
            {totalCompletedNum}個
          </Box>
        </Flex>
        <Flex direction="column" px="8" pt="8">
          <Box as="dt" color="gray.500" order={2}>
            未完了のTODO
          </Box>
          <Box
            as="dd"
            fontSize={{ base: '2xl', sm: '3xl' }}
            order={1}
            fontWeight="extrabold"
            color="blue.500"
          >
            {totalUncompletedNum}個
          </Box>
        </Flex>
        <Flex direction="column" px="8" pt="8">
          <Box as="dt" color="gray.500" order={2}>
            達成割合
          </Box>
          <Box
            as="dd"
            fontSize={{ base: '2xl', sm: '3xl' }}
            order={1}
            fontWeight="extrabold"
            color="blue.500"
          >
            {formattedPercentCompleted}％
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
