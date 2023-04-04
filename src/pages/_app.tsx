import * as React from "react";
import { Center, Flex, ChakraProvider } from "@chakra-ui/react";
import LoginForm from "./LoginForm";

function App() {
  return (
    <ChakraProvider>
      <Center w="100%">
        <LoginForm />
      </Center>
    </ChakraProvider>
  );
}

export default App;
