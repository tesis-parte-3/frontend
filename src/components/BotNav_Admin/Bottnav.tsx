import { useNavigate } from 'react-router-dom';
import { Box, Flex, Text } from '@mantine/core';
import classes from './Bottnav.module.css';
import { DeviceDesktopAnalytics, AddressBook, } from 'tabler-icons-react';
import { Tooltip, MantineProvider, ColorSchemeScript } from '@mantine/core';


function Bottnav() {
    const navigate = useNavigate();

    return (
        <>
            <ColorSchemeScript defaultColorScheme="auto" />
            <MantineProvider defaultColorScheme="auto">
                <Box>
                    <footer className={classes.footer} style={{ zIndex: 1000 }}>
                        <Flex direction={{ base: 'row' }}
                            gap={{ base: '6%' }}
                            justify={{ base: 'center' }}
                            mt={{ base: '1%' }}
                        >
                            <Tooltip label="Paneles" position="top">
                                <div onClick={() => navigate("/Admincu")} style={{padding: '0px',margin: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                <div className={classes.icono} style={{
                                        background: location.pathname === '/Admincu' ? 'radial-gradient(circle at 50%, #1D72FE33 0%, transparent 80%)' : 'none',
                                    }}>
                                        <DeviceDesktopAnalytics
                                            size={45}
                                            strokeWidth={2}
                                        />
                                    </div>
                                    <Text
                                    >
                                        Panel Admin
                                    </Text>
                                </div>
                            </Tooltip>
                            <Tooltip label="Panel Preguntas" position="top">
                                <div onClick={() => navigate("/Adminpreguntas")} style={{margin: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                <div className={classes.icono} style={{
                                        background: location.pathname === '/Adminpreguntas' ? 'radial-gradient(circle at 50%, #1D72FE33 0%, transparent 80%)' : 'none',
                                    }}>
                                        <AddressBook
                                            size={45}
                                            strokeWidth={2}
                                        />
                                    </div>
                                    <Text
                                    >
                                        Preguntas BD
                                    </Text>
                                </div>
                            </Tooltip>
                            
                            
                        </Flex>
                    </footer>
                </Box>
            </MantineProvider>
        </>

    );
}

export default Bottnav;