import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { checkScreenSize } from '../util/Utils';

// Define the context value type
interface UserContextType {
  screenSizeDevice: string | null
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [screenSizeDevice, setScreenSizeDevice] = useState<string | null>(null)

  useEffect(() => {
    WA.player.state.screen = checkScreenSize()
    setScreenSizeDevice(checkScreenSize())

  }, [])
  const contextValue = {
    screenSizeDevice,
  };
  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
