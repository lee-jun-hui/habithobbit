import { Alert, SafeAreaView } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

import { saveUser, getUser } from "../utils/securestore.utils";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const login = async (loginCredentials) => {
    try {
      const response = await axios.post(
        "https://habithobbit-server.herokuapp.com/api/v1/users/login",
        loginCredentials
      );
      let userData = response.data.data;
      saveUser(JSON.stringify(userData));
      setIsLoggedIn(true);
    } catch (error) {
      console.log("login error", error);
    }
  };

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Email"
        value={loginCredentials.email}
        onChangeText={(value) =>
          setLoginCredentials((prevlogin) => ({ ...prevlogin, email: value }))
        }
      />
      <TextInput
        placeholder="Password"
        value={loginCredentials.password}
        onChangeText={(value) =>
          setLoginCredentials((prevlogin) => ({
            ...prevlogin,
            password: value,
          }))
        }
      />
      <Button
        mode="contained"
        onPress={() => {
          login(loginCredentials);
        }}
      >
        Login
      </Button>
    </SafeAreaView>
  );
};

export default Login;
