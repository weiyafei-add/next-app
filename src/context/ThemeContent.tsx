"use client";
import { createContext, useState } from "react";

export const ThemeContent = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const toggle = () => {
    setMode((prev) => {
      return prev === "dark" ? "light" : "dark";
    });
  };

  return (
    <ThemeContent.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContent.Provider>
  );
};
