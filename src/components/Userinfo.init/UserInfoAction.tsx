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



function UserInfoAction() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);




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
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                            size={120}
                            radius={120}
                            mx="auto"
                        />
                        <Text ta="center" fz="lg" fw={500} mt="md">
                            Nombre
                        </Text>
                        <Text ta="center" c="dimmed" fz="sm">
                            Correo electronico X
                        </Text>

                        <Button variant="filled" color="red" fullWidth mt="md">
                            Cerrar Sesion
                        </Button>
                    </Paper>
            </Drawer>
        </Box>
    );
}

export default UserInfoAction;