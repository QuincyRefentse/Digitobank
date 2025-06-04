import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,

} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Define User type based on your API data structure
export interface User {
  id: string;
  email: string;
  name: string;
  accountNumber: string;
  balance: number;
  // Add any other user fields here
}

interface UserContextType {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => Promise<void>;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
  setUser: async () => {},
});

interface Props {
  children: ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const jsonUser = await AsyncStorage.getItem('user');
        if (jsonUser) {
          try {
            const parsedUser = JSON.parse(jsonUser);
            setUserState(parsedUser);
          } catch (parseError) {
            console.error('Failed to parse user JSON:', parseError);
            await AsyncStorage.removeItem('user');
          }
        }
      } catch (error) {
        console.error('Failed to load user from storage:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const updateUser = async (newUser: User | null) => {
    try {
      setUserState(newUser);
      if (newUser) {
        await AsyncStorage.setItem('user', JSON.stringify(newUser));
      } else {
        await AsyncStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Failed to save user to storage:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, setUser: updateUser }}>
      {children}

    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);


/*
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define User type
export interface User {
  id: string;
  email: string;
  name: string;
  accountNumber: string;
  balance: number;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => Promise<void>;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: async () => {},
});

interface Props {
  children: ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const jsonUser = await AsyncStorage.getItem('user');
        if (jsonUser) {
          setUserState(JSON.parse(jsonUser));
        }
      } catch (error) {
        console.error('Failed to load user from storage:', error);
      }
    };
    loadUser();
  }, []);

  const setUser = async (newUser: User | null) => {
    try {
      setUserState(newUser);
      if (newUser) {
        await AsyncStorage.setItem('user', JSON.stringify(newUser));
      } else {
        await AsyncStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Failed to save user to storage:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext); // ✅ Custom hook
*/

/*
import React, { createContext, useState, useEffect, ReactNode,useContext  } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define User type based on your API data structure
export interface User {
  id: string;
  email: string;
  name: string;
  accountNumber: string;
  balance: number;
  // Add any other user fields here, e.g. balance?
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => Promise<void>;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: async () => {},
});

interface Props {
  children: ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const jsonUser = await AsyncStorage.getItem('user');
        if (jsonUser) {
          setUserState(JSON.parse(jsonUser));
        }
      } catch (error) {
        console.error('Failed to load user from storage:', error);
      }
    };
    loadUser();
  }, []);

  const setUser = async (newUser: User | null) => {
    try {
      setUserState(newUser);
      if (newUser) {
        await AsyncStorage.setItem('user', JSON.stringify(newUser));
      } else {
        await AsyncStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Failed to save user to storage:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);


*/