import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import StackNav from "./StackNav";

const RoutingNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </>
  );
};

export default RoutingNavigation;
