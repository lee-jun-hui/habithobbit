import { Alert, SafeAreaView } from "react-native";
import React, { useState, useContext } from "react";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";
import AnimatedLoader from "../components/AnimatedLoader";
import { AuthContext } from "../contexts/AuthContext";

const Registration = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { isLoading, setIsLoading } = useContext(AuthContext);

  const registerUser = async () => {
    //using Axios
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://habithobbit-server.herokuapp.com/api/v1/users",
        user
      );
      setIsLoading(false);
      if (response.status === 201) {
        Alert.alert("SUCCESS", "User created successfully", [
          {
            text: "Login",
            onPress: () => navigation.navigate("Login"),
          },
        ]);
      }
    } catch (error) {
      setIsLoading(false);
      if (error.response.status === 400) {
        Alert.alert("User already exists!");
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TextInput
        placeholder="Username"
        value={user.username}
        onChangeText={(value) =>
          setUser((prevUser) => ({ ...prevUser, username: value }))
        }
      />
      <TextInput
        placeholder="Email"
        value={user.email}
        onChangeText={(value) =>
          setUser((prevUser) => ({ ...prevUser, email: value }))
        }
      />
      <TextInput
        placeholder="Password"
        value={user.password}
        onChangeText={(value) =>
          setUser((prevUser) => ({ ...prevUser, password: value }))
        }
      />
      <Button
        mode="contained"
        onPress={() => {
          registerUser();
        }}
      >
        Register
      </Button>
      <Button mode="text" onPress={() => navigation.navigate("Login")}>
        Login
      </Button>
      {isLoading ? <AnimatedLoader text="Registering..." /> : null}
    </SafeAreaView>
  );
};

export default Registration;
