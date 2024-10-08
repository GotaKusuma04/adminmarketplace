import { createContext, useState, useMemo } from "react";
import { Outlet } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children = <Outlet /> }) => {
    const [theme, setTheme] = useState('light');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isDarkTheme = useMemo(() => theme === 'dark', [theme]);

    const onThemeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const onMenuOpen = () => {
        setIsMenuOpen(true);
    };

    const onMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <GlobalContext.Provider
            value={{
                isDarkTheme,
                isMenuOpen,
                onThemeToggle,
                onMenuOpen,
                onMenuClose,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
