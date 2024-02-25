import {
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Group,
    Anchor,
    Center,
    Box,
    rem,
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import classes from '../assets/css/ForgotPassword.module.css';
import Navbar from '../components/Navbar/navbar';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    return (
        <>
        <Navbar />
        <Container size={460} my={30}>
            <Title className={classes.title} ta="center">
                Olvidaste tu contraseña?
            </Title>
            <Text c="dimmed" fz="sm" ta="center">
                Entra aqui para recibir un correo para resetar la contraseña
            </Text>
            <Text c="dimmed" fz="sm" ta="center" mt="lg">
                Si tu correo coincide, te enviaremos un correo con un link para resetar tu contraseña.
            </Text>

            <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
                <TextInput label="Tu correo" placeholder="hello@quizdrive.com" required />
                <Group justify="space-between" mt="lg" className={classes.controls}>
                    <Anchor c="dimmed" size="sm" className={classes.control}>
                        <Center inline>
                            <IconArrowLeft style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                            <Link to="/login">
                            <Box ml={5}>Volver a la pagina de inicio</Box>
                            </Link>
                        </Center>
                    </Anchor>
                    <Button className={classes.control}>Recuperar contraseña</Button>
                </Group>
            </Paper>
        </Container>
        </>
    );
}

export default ForgotPassword;