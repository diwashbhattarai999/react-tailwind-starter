import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import type { User } from '@/types/services/auth.types';

// Type definition for the authentication context
type AuthContextType = {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
};

// Context for managing authentication state
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * AuthProvider component to manage authentication state.
 * It provides user details and authentication methods to the application.
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // Load user and token from localStorage on initial render
  useEffect(() => {
    const storedToken = localStorage.getItem('access_token');
    const storedUser = localStorage.getItem('user');

    // If both token and user are present, parse and set them in state
    if (storedToken && storedUser) {
      try {
        setUser(JSON.parse(storedUser) as User);
        setAccessToken(storedToken);
      } catch {
        setUser(null);
        setAccessToken(null);
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
      }
    } else {
      setUser(null);
      setAccessToken(null);
    }
  }, []);

  /**
   * Login function to set user and token in state and localStorage.
   *
   * @param user - User object containing user details.
   * @param token - Access token for the user.
   */
  const login = useCallback((user: User, token: string) => {
    localStorage.setItem('access_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    setAccessToken(token);
  }, []);

  /** Logout function to clear user and token from state and localStorage. */
  const logout = useCallback(() => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    setUser(null);
    setAccessToken(null);
  }, []);

  /** Memoize the context value to prevent unnecessary re-renders */
  const value = useMemo(
    () => ({
      user,
      accessToken,
      isAuthenticated: !!user && !!accessToken,
      login,
      logout,
    }),
    [user, accessToken, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Custom hook to consume AuthContext
 */
export const useAuth = (): AuthContextType => {
  // Get the context value
  const context = useContext(AuthContext);

  // Throw an error if the context is undefined, indicating that the hook must be used within a AuthProvider
  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  // Return the context value
  return context;
};
