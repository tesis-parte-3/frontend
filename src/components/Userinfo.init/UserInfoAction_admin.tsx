import {
    Group,
    Button,
    Text,
    Box,
    Burger,
    Drawer,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './../../components/Navbar/Navbar.module.css';
import logo from './../../components/Navbar/logoctm.png';
import { Avatar, Paper } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function UserInfoAction() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
 // @ts-ignore
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")).user)


    const handleLogout = () => {
        // Eliminar el elemento 'user' del localStorage
        localStorage.removeItem('user');
    };


    return (
        <Box pb={0}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <img src={logo} alt="Logo" className={classes.logito} />
                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="QUIZDRIVE"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
                    <Avatar
                        src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
                        size={120}
                        radius={120}
                        mx="auto"
                    />

                    <Text ta="center" fz="lg" fw={500} mt="md">
                        Panel Administrativo
                    </Text>
                    <Text ta="center" c="dimmed" fz="sm">
                    admin@quiz.com
                    </Text>

                    <Link to="/">
                        <Button variant="filled" color="red" fullWidth mt="md" onClick={handleLogout}>
                            Cerrar Sesion
                        </Button>
                    </Link>
                </Paper>
            </Drawer>
        </Box>
    );
}

export default UserInfoAction;