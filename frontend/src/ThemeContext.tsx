import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
    isDarkMode: false,
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode}) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('isDarkMode');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    const toggleTheme = () => {
        setIsDarkMode((prevMode: any) => {
            const newMode = !prevMode;
            localStorage.setItem('isDarkMode', JSON.stringify(newMode));
            return newMode;
        });
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('isDarkMode');
        if (savedTheme !== null) {
            setIsDarkMode(JSON.parse(savedTheme));
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);