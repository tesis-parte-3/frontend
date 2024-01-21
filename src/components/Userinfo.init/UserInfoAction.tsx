import {
    Group,
    Button,
    UnstyledButton,
    Text,
    ThemeIcon,
    Box,
    Burger,
    Drawer,
    rem,
    useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
} from '@tabler/icons-react';
import classes from './../../components/Navbar/Navbar.module.css';
import logo from './../../components/Navbar/logoctm.png';
import { Avatar, Paper } from '@mantine/core';

const mockdata = [
    {
        icon: IconCode,
        title: 'Open source',
        description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
        icon: IconCoin,
        title: 'Free for everyone',
        description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
        icon: IconBook,
        title: 'Documentation',
        description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
        icon: IconFingerprint,
        title: 'Security',
        description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
        icon: IconChartPie3,
        title: 'Analytics',
        description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
        icon: IconNotification,
        title: 'Notifications',
        description: 'Combusken battles with the intensely hot flames it spews',
    },
];

function UserInfoAction() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();

    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" c="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

    return (
        <Box pb={0}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <img src={logo} alt="Logo" className={classes.logito} />
                    <Group visibleFrom="sm">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group>
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