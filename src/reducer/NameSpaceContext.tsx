
import React, { createContext, useContext } from 'react';

const NamespaceContext = createContext<string>('base');

export const NamespaceProvider = ({
    ns,
    children
}: {
    ns: string;
    children: React.ReactNode;
}) => {
    return (
        <NamespaceContext.Provider value={ns}>
            {children}
        </NamespaceContext.Provider>
    );
};

export const useNamespace = () => useContext(NamespaceContext);
