import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

import { supabase } from "@/lib/supabase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          setUser(session.user);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }

        setIsLoadingAuth(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const checkUser = async () => {
    try {
      setIsLoadingAuth(true);

      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        throw error;
      }

      if (user) {
        setUser(user);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Auth Error:", error);

      setAuthError(error.message);
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoadingAuth(false);
    }
  };

  const login = async (email, password) => {
    try {
      setIsLoadingAuth(true);

      const { data, error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (error) throw error;

      setUser(data.user);
      setIsAuthenticated(true);

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    } finally {
      setIsLoadingAuth(false);
    }
  };

  const signup = async (email, password) => {
    try {
      setIsLoadingAuth(true);

      const { data, error } =
        await supabase.auth.signUp({
          email,
          password,
        });

      if (error) throw error;

      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    } finally {
      setIsLoadingAuth(false);
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();

    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoadingAuth,
        authError,
        login,
        signup,
        logout,
        checkUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  }

  return context;
};