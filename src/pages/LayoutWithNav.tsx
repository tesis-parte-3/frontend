import React from 'react';
import BottomNav from '../components/BotNav/Bottnav'; // Asegúrate de que esta ruta sea correcta

const LayoutWithNav: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            {children}
            <BottomNav />
        </>
    );
};

export default LayoutWithNav;