import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

// Types
interface User {
  id: string;
  name?: string;
  email: string;
  // password: string;
  role?: string;
  // add other fields as needed
}

interface UserContextType {
  user: User | null;
  token: string | null;
  setUser: (user: User, token: string) => void;
  clearUser: () => void;
}

// Create context
const UserContext = createContext<UserContextType>({
  user: null,
  token: null,
  setUser: () => {},
  clearUser: () => {},
});

// Provider
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null);
  const [token, setTokenState] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = Cookies.get("token");
    const storedUser = Cookies.get("user");

    if (storedToken && storedUser) {
      setTokenState(storedToken);
      try {
        setUserState(JSON.parse(storedUser));
      } catch (error) {
        console.error("Invalid user data in cookies");
      }
    }
  }, []);

  const setUser = (user: User, token: string) => {
    setUserState(user);
    setTokenState(token);
    Cookies.remove("token");
    Cookies.remove("user");
    Cookies.set("token", token, { expires: 7 });
    Cookies.set("user", JSON.stringify(user), { expires: 7 });
  };

  const clearUser = () => {
    setUserState(null);
    setTokenState(null);
    Cookies.remove("token");
    Cookies.remove("user");
  };

  return (
    <UserContext.Provider value={{ user, token, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook
export const useUser = () => useContext(UserContext);
