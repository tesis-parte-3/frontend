import {
    Box,
} from '@mantine/core';
import classes from './Backmenu.module.css';
import { Link } from 'react-router-dom';
import { ArrowBarLeft } from 'tabler-icons-react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import logo from '../Navbar/logoctm.png';

function backmenu() {
    const colorScheme = useColorScheme();
    return (
        <>
        <ColorSchemeScript defaultColorScheme="auto" />
        <MantineProvider defaultColorScheme="auto">
            <Box>
            <header className={classes.header} style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/principal">
                    <ArrowBarLeft size={32} color={colorScheme === 'dark' ? 'white' : 'black'}
                    />
                </Link>
                <img src={logo} alt="Logo" className={classes.logito}/>
            </header>

            </Box>
        </MantineProvider>
    </>
    );
}

export default backmenu;