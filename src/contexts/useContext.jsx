import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const contextProvider = createContext();

export const ContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useLocalStorageState(
    true,
    "isSidebarOpen"
  );

  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <contextProvider.Provider
      value={{ isSidebarOpen, toggleSidebar, isDarkMode, toggleDarkMode }}
    >
      {children}
    </contextProvider.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(contextProvider);
  if (!context) {
    throw new Error("useGlobalContext must be used within a ContextProvider");
  }
  return context;
};
