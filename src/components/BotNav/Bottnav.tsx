import { useNavigate } from 'react-router-dom';
import { Box, Flex, Text } from '@mantine/core';
import classes from './Bottnav.module.css';
import { Settings, Book, Writing, Graph } from 'tabler-icons-react';
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
                            <Tooltip label="Estudios" position="top">
                                <div onClick={() => navigate("/Estudios")} style={{padding: '0px',margin: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                <div className={classes.icono} style={{
                                        background: location.pathname === '/Estudios' ? 'radial-gradient(circle at 50%, #1D72FE33 0%, transparent 80%)' : 'none',
                                    }}>
                                        <Book
                                            size={38}
                                            strokeWidth={2}
                                        />
                                    </div>
                                    <Text
                                    >
                                        Estudios
                                    </Text>
                                </div>
                            </Tooltip>
                            <Tooltip label="Examen" position="top">
                                <div onClick={() => navigate("/Examen")} style={{margin: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                <div className={classes.icono} style={{
                                        background: location.pathname === '/Examen' ? 'radial-gradient(circle at 50%, #1D72FE33 0%, transparent 80%)' : 'none',
                                    }}>
                                        <Writing
                                            size={38}
                                            strokeWidth={2}
                                        />
                                    </div>
                                    <Text
                                    >
                                        Examen
                                    </Text>
                                </div>
                            </Tooltip>
                            <Tooltip label="Estadistica" position="top">
                                <div onClick={() => navigate("/Estadistica")} style={{margin: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                <div className={classes.icono} style={{
                                        background: location.pathname === '/Estadistica' ? 'radial-gradient(circle at 50%, #1D72FE33 0%, transparent 80%)' : 'none',
                                    }}>
                                        <Graph
                                            size={38}
                                            strokeWidth={2}
                                        />
                                    </div>
                                    <Text
                                    >
                                        Estadistica
                                    </Text>
                                </div>
                            </Tooltip>
                            <Tooltip label="Ajustes" position="top">
                                <div onClick={() => navigate("/Ajustes")} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', margin: '0px', }}>
                                    <div className={classes.icono} style={{
                                        background: location.pathname === '/Ajustes' ? 'radial-gradient(circle at 50%, #1D72FE33 0%, transparent 80%)' : 'none',
                                    }}>
                                        <Settings
                                            size={38}
                                            strokeWidth={2}
                                        />
                                    </div>
                                    <Text
                                    >
                                        Ajustes
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