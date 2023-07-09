import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({children}) => {

const [currentTheme, setCurrentTheme] = useState("dark");

  return (
    <div className={`${currentTheme}-theme`}>
        <ThemeContext.Provider value={{currentTheme, changeTheme:setCurrentTheme}}>
            {children}
        </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider;