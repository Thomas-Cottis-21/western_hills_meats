import React, { createContext, useContext, useState, useMemo } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const contextValue = useMemo(() => ({ data, setData }), [data]);

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};

export const accessData = () => {
    return useContext(DataContext);
};