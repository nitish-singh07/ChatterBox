import React, { createContext } from 'react';
import { StatusBar } from 'react-native';

const StatusBarContext = createContext();

export const StatusBarProvider = ({ children }) => {
  return (
    <StatusBarContext.Provider value={{}}>
      <StatusBar backgroundColor="#6200EE" barStyle="light-content" />
      {children}
    </StatusBarContext.Provider>
  );
};
