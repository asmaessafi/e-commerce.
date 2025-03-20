import React, { createContext, useState } from 'react';

// Create a Context
export const AppContext = createContext();

// Create a Provider Component
export const AppProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(true); // Example state

    return (
        <AppContext.Provider value={{ isAdmin, setIsAdmin }}>
            {children}
        </AppContext.Provider>
    );
};
