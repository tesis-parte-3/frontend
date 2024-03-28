import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';
import logo from './logoctm.png';
import { Link } from 'react-router-dom';


function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box pb={0}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link to="/"><img src={logo} alt="Logo" className={classes.logito}/></Link>
          <Group visibleFrom="sm">
            <Button 
              variant="default"
              onClick={() => window.location.replace('/login')}
            >
              Log in
            </Button>
            <Button
              onClick={() => window.location.replace('/register')}
            >Sign up</Button>
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
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <Group justify="center" grow pb="xl" px="md">
          <Link to="/login"><Button fullWidth >Inicio de seccion</Button></Link>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default Navbar;