import {
  Flex,
  Text,
} from '@chakra-ui/react';

const App = () => (
  <Flex
    as="main"
    bgColor="white"
    boxShadow="md"
    flex="1 1 auto"
    flexDirection="column"
    mx="auto"
    overflowX="hidden"
    pb="8"
    pt="8"
    px="8"
    w="full"
  >
    <Text>
      Hello World!
    </Text>
  </Flex>
);

export default App;
