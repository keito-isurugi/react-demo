import {
  Box,
  Text,
  Button,
  Grid,
  GridItem,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

export const ChakraResponsive = () => {

  const dates = [...Array(16).keys()]

  console.log(document.documentElement.clientWidth)
  return (
    <>
    <Box>
      <Text>レスポンシブ</Text>
      <Box p={5}>
        <TableContainer mt={20} mb={20}>
          <Table variant='simple' borderCollapse="collapse" border="1px">
            <Thead>
              <Tr>
                {dates.map((data, index) => (
                  <Th key={index} border="1px">{data}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
              {dates.map((data, index) => (
                <Td key={index} border="1px">{data}</Td>
              ))}
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>


      <Box bg={["red.200", "yellow.200", "green.200", "blue.200"]} mb={5}>
        Hello
      </Box>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}  mb={5}>
        <GridItem w='100%' h='10' bg={["red.200", "yellow.200", "green.200", "blue.200"]} />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
      </Grid>
      <Grid templateColumns='repeat(5, 1fr)' templateRows='repeat(2, 1fr)'  mb={5}>
        <GridItem w='100%' h='10' border="1px" />
        <GridItem w='100%' h='10' border="1px" />
        <GridItem w='100%' h='10' border="1px" />
        <GridItem w='100%' h='10' border="1px" />
        <GridItem w='100%' h='10' border="1px" />
      </Grid>
    </Box>
    </>
  )
}