import { Alert, SafeAreaView } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import AnimatedLoader from "../components/AnimatedLoader";

import { saveUser, getUser } from "../utils/securestore.utils";
import ContainedButton from "../components/ContainedButton";
import Inputbox from "../components/Inputbox";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const { isLoggedIn, setIsLoggedIn, isLoading, setIsLoading } =
    useContext(AuthContext);

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
    <SafeAreaView style={{ flex: 1 }}>
      <Inputbox
        placeholder="Email"
        value={loginCredentials.email}
        onChangeText={(value) =>
          setLoginCredentials((prevlogin) => ({ ...prevlogin, email: value }))
        }
      />
      <Inputbox
        placeholder="Password"
        value={loginCredentials.password}
        onChangeText={(value) =>
          setLoginCredentials((prevlogin) => ({
            ...prevlogin,
            password: value,
          }))
        }
      />
      <ContainedButton
        title="LOGIN"
        onPress={() => {
          login(loginCredentials);
        }}
      />

      {isLoading ? <AnimatedLoader text="Logging in..." /> : null}
    </SafeAreaView>
  );
};

export default Login;
