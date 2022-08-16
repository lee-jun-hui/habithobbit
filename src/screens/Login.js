import { Alert, SafeAreaView } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";

import { saveUser, getUser } from "../utils/securestore.utils";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (loginCredentials) => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://habithobbit-server.herokuapp.com/api/v1/users/login",
        loginCredentials
      );
      let userData = response.data.data;
      saveUser(JSON.stringify(userData));
      setIsLoggedIn(true);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsLoggedIn(false);
      Alert.alert(`${error.response.data.message}`);
    }
  };

  return (
    <SafeAreaView>
      <Spinner visible={isLoading} />
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
