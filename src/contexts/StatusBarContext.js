import React, { createContext } from "react";
import { StatusBar } from "react-native";
import { colors } from "../config/constants";

const StatusBarContext = createContext();

export const StatusBarProvider = ({ children }) => {
  return (
    <StatusBarContext.Provider value={{}}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      {children}
    </StatusBarContext.Provider>
  );
};
