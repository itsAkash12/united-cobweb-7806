import {
  useToast,
  Input,
  Box,
  Grid,
  Img,
  Heading,
  Stack,
  Button,
  InputGroup,
  InputLeftElement,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authRegister } from "../../Redux/auth/actions";
import { useNavigate } from "react-router-dom";
import { AUTH_REGISTER_RESET } from "../../Redux/auth/actionTypes";

const initialState = {
  name: "",
  email: "",
  password: "",
};

function Signup() {
  const toast = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState(initialState);
  const authState = useSelector((state) => state.auth.userRegister);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (authState.message === "user already registerd please login") {
      toast({
        title: authState.message,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      dispatch({ type: AUTH_REGISTER_RESET });
    }
    if (authState.message === "Registered successfully") {
      toast({
        title: authState.message,
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });

      dispatch({ type: AUTH_REGISTER_RESET });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [dispatch, navigate, authState.error, authState.message, toast]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authRegister(formData));
  };
  return (
    <Grid
      w={{ base: "70%", md: "90%" }}
      m="30px auto"
      gap={8}
      templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
    >
      <Box
        shadow={{ base: "md", md: "none" }}
        borderRadius="10px"
        p={4}
        border="1px solid gray"
      >
        <Heading textAlign={"center"}>Signup</Heading>
        <Stack
          py={8}
          gap={4}
          w={{ base: "90%", md: "70%", lg: "90%" }}
          m="auto"
        >
          <form onSubmit={handleSubmit}>
            <FormLabel mt="10px">Username</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FontAwesomeIcon icon={faUser} />}
              />

              <Input
                type={"text"}
                onChange={handleChange}
                name="name"
                placeholder="Enter your username"
                value={formData.name}
                required={true}
                variant="flushed"
              />
            </InputGroup>
            <FormLabel mt="20px">Email</FormLabel>
            <InputGroup>
              {" "}
              <InputLeftElement
                pointerEvents="none"
                children={<EmailIcon color="gray.600" />}
              />
              <Input
                type="email"
                onChange={handleChange}
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                required={true}
                variant="flushed"
              />
            </InputGroup>
            <FormLabel mt="20px">Password</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<LockIcon color="gray.600" />}
              />
              <Input
                type={"password"}
                onChange={handleChange}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                required={true}
                variant="flushed"
              />
            </InputGroup>

            <Button
              bg="blue"
              // onClick={handleSubmit}
              _hover={{ bg: "green" }}
              color={"white"}
              fontSize="18px"
              w={"100%"}
              type="submit"
              borderRadius="20px"
              mt="20px"
            >
              {authState.loading ? "Registering..." : "Register"}
            </Button>
          </form>
          <Text textAlign="center" fontWeight="500" fontSize="16px">
            Already a User ?{" "}
            <span
              onClick={() => navigate("/login")}
              style={{
                color: "blue",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Login
            </span>
          </Text>
        </Stack>
      </Box>
      <Box
        display={{ base: "none", md: "inherit", lg: "flex" }}
        justifyContent="center"
        alignItems="center"
      >
        <Img
          w={"80%"}
          h={"80%"}
          objectFit="contain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXW0Q2NQdwgByNxjZG89vnum8kNfCTzwSqNg&usqp=CAU"
        />
      </Box>
    </Grid>
  );
}

export default Signup;
