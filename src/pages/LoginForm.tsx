import {
  Flex,
  Box,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: LoginFormInputs) => {
    console.log(values);
    // router.push("home");
  };
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in Form</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form style={{ width: 350 }}>
              <FormControl
                isInvalid={!!errors?.email?.message}
                p="4"
                isRequired
              >
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!errors?.password?.message}
                px="4"
                pb="4"
                isRequired
              >
                <FormLabel>Password</FormLabel>
                <Input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
              </FormControl>
              <Button
                onClick={() => {
                  handleSubmit(onSubmit);
                  router.push("home");
                }}
                p="4"
                mx="4"
                mt="6"
                w="90%"
                colorScheme="blue"
                variant="solid"
                disabled={!!errors.email || !!errors.password}
              >
                Login
              </Button>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
