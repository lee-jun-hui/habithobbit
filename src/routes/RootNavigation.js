import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../contexts/AuthContext";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { getUser } from "../utils/securestore.utils";
import SplashRoute from "./SplashRoute";

const RootNavigation = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [checking, setIsChecking] = useState(false);

  useEffect(() => {
    const checkIfUserIsLoggedIn = async () => {
      const user = await getUser();
      if (user !== null) {
        setIsLoggedIn(true);
      }
      setIsChecking(false);
    };
    checkIfUserIsLoggedIn();
  }, []);

  if (checking) {
    return <SplashRoute />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <PrivateRoute /> : <PublicRoute />}
    </NavigationContainer>
  );
};

export default RootNavigation;
