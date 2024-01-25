import {
    Box,
} from '@mantine/core';
import classes from './Backmenu.module.css';
import { ArrowBarLeft } from 'tabler-icons-react';
import logo from '../Navbar/logoctm.png';
import { Tooltip } from '@mantine/core';
import { useNavigate } from 'react-router-dom';


function backmenu() {
    const navigate = useNavigate();
    return (
        <>
            <Box>
                <header className={classes.header} style={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip label="Principal" position="top">
                        <div onClick={() => navigate("/principal")} style={{ padding: '0px', margin: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
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

export default backmenu;