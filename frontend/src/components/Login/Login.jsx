import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
  Spinner,
} from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { authLogin } from "../../Redux/auth/actions";
import { AUTH_LOGIN_RESET } from "../../Redux/auth/actionTypes";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillGoogleCircle } from "react-icons/ai";

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState(initialState);
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // // -------- google login------
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      toast({
        title: "Account created.",
        description: "Successfully Created your Account",
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      console.log(error.message);
      toast({
        title: error.message,
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  React.useEffect(() => {
    onOpen();
    try {
      if (authState.userLogin.message === "please signup first") {
        toast({
          title: authState.message,
          title: "Please fill correct detail",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      } else if (
        authState.userLogin.message !== "please signup first" &&
        authState.userLogin.message
      ) {
        toast({
          title: "Login Successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        dispatch({ type: AUTH_LOGIN_RESET });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch {
      toast({
        title: authState.message,
        title: "Please fill correct detail",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  }, [authState]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(authLogin(formData));
  };

  return (
    <>
      <ChakraProvider>
        <Modal isOpen={true} onClose={onClose} size={{ base: "sm", md: "lg" }}>
          <ModalOverlay />
          <ModalContent w="450px" p="10px">
            <ModalHeader
              textAlign="center"
              fontWeight="bold"
              lineHeight="1"
              fontSize="30px"
              mt="25px"
            >
              LOGIN
            </ModalHeader>

            <form onSubmit={handleSubmit}>
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type={"email"}
                    placeholder="Enter your email"
                    name="email"
                    onChange={handleChange}
                    required={true}
                    variant="flushed"
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type={"password"}
                    placeholder="Enter your password"
                    name="password"
                    onChange={handleChange}
                    required={true}
                    variant="flushed"
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  w="100%"
                  type="submit"
                  borderRadius="20px"
                >
                  CONTINUE
                </Button>
              </ModalFooter>
            </form>

            <p className="login_or">or</p>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt="20px"
            >
              <BsFacebook className="faceBook" />
              <AiFillTwitterCircle className="twitter" />
              <AiFillGoogleCircle
                className="google"
                onClick={handleGoogleSignIn}
              />
            </Box>

            <p className="login">Have not account yet?</p>
            <p onClick={() => navigate("/signup")} className="signup">
              {" "}
              SIGN UP
            </p>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </>
  );
}

export default Login;
