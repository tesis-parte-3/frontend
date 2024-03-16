import {
    Box,
} from '@mantine/core';
import classes from './backmenubar_estudios.module.css';
import { ArrowBarLeft } from 'tabler-icons-react';
import logo from '../../../components/Navbar/logoctm.webp';
import { Tooltip } from '@mantine/core';
import { useNavigate } from 'react-router-dom';


function backmenu2() {
    const navigate = useNavigate();
    return (
        <>
            <Box>
                <header className={classes.header} style={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip label="Examen" position="top">
                        <div onClick={() => navigate("/Autodidactas")} style={{ padding: '0px', margin: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                            <div className={classes.icono} style={{
                            }}>
                                <ArrowBarLeft
                                    size={32}
                                />
                            </div>
                        </div>
                    </Tooltip>
                    <img src={logo} alt="Logo" className={classes.logito} />
                </header>
            </Box>
        </>
    );
}

export default backmenu2;