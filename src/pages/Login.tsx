import { useToggle } from '@mantine/hooks';
import { useState } from 'react'
import axios from 'axios';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
} from '@mantine/core';
import Navbar from '../components/Navbar/navbar';

interface IRegister {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    dni: string;
    terms: boolean;
}
interface ILogin {
    email: string;
    password: string;
}


function Login() {
    const [type, toggle] = useToggle(['Login', 'Register']);
    const [error, setError] = useState<string | null>(null)
    const formL = useForm<ILogin>({
        initialValues: {
            email: '',
            password: ''
        },

        validate: {
            email: (val) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? null : 'Email inválido'),
            password: (val) => (val.length <= 6 ? 'Tiene que tener mas de 6 caracteres' : null),
        },
    });

    const formR = useForm<IRegister>({
        initialValues: {
            email: '',
            name: '',
            password: '',
            password_confirmation: '',
            dni: '',
            terms: false
        },

        validate: {
            name: (val) => {
                const isAlpha = /^[a-zA-ZÑñ\s]+$/.test(val);
                if (!isAlpha) {
                    return 'Nombre inválido, tiene caracteres no permitidos';
                }
                return null;
            },
            email: (val) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? null : 'Email inválido'),
            password: (val) => (val.length <= 6 ? 'Tiene que tener mas de 6 caracteres' : null),
            dni: (val) => {
                if (val.length < 7) {
                    return 'Cédula inválida, debe tener al menos 7 dígitos';
                }
                const isNumeric = /^[0-9]+$/.test(val);
                if (!isNumeric) {
                    return 'Cédula inválida, solo números';
                }
                return null;
            },
            terms: (val) => {
                if (!val) {
                    return 'Debe aceptar las condiciones'
                }
                return null
            }
        },
    });
    const handleLogin = (email: string, password: string) => {
        axios.post('http://localhost:3000/login', {
            email: email,
            password: password
        })
            .then((res) => {
                console.log(res);
                window.location.replace('/principal')
            })
            .catch((err) => {
                console.log(err);
                setError("El usuario o contraseña son incorrectos")
            });
    }

    const handleRegister = (values: IRegister) => {
        axios.post('http://localhost:3000/users', values)
            .then(function (response) {
                console.log(response);
                window.location.replace("/principal")
            })
            .catch(function (error) {
                console.log(error);
                setError('No se pudo registrar el usuario')
            });
    }

    return (
        <>
            <Navbar />
            <Paper mt="60" radius="md" p="lg" withBorder h="auto" w="85%" mx="auto">
                <Text size="lg" fw={500}>
                    Bienvenido a QuizDrive, {type} con
                </Text>
                <Divider my="md" />
                <form onSubmit={formR.onSubmit(() => { })}>
                    <Stack>
                        {type === 'Register' && (
                            <TextInput
                                required
                                label="Name"
                                placeholder="Tu Nombre"
                                error={formR.errors.name && 'Nombre inválido, tiene caracteres no permitidos'}
                                radius="md"
                                {...formR.getInputProps('name')}
                            />

                        )}

                        <TextInput
                            required
                            label="Email"
                            placeholder="hello@mantine.dev"
                            error={formR.errors.email && 'Email Invalido'}
                            radius="md"
                            {...formR.getInputProps('email')}
                        />
                        {type === 'Register' && (
                            <TextInput
                                required
                                label="Cedula"
                                placeholder="12345678"
                                error={formR.errors.cedula && 'Cedula invalida debe tener al menos 7 digitos'}
                                radius="md"
                                {...formR.getInputProps('dni')}
                            />)}
                        <PasswordInput
                            required
                            label="Password"
                            placeholder="Your password"
                            error={formR.errors.password && 'Tiene que tener mas de 6 caracteres'}
                            radius="md"
                            {...formR.getInputProps('password')}
                        />
                        {type === 'Register' && (
                            <PasswordInput
                                required
                                label="Password Confimacion"
                                placeholder="Your password Confimacion"
                                error={formR.errors.password_confirmation && 'Tiene que tener mas de 6 caracteres'}
                                radius="md"
                                {...formR.getInputProps('password_confirmation')}
                            />
                        )}
                        {type === 'Register' && (
                            <Checkbox
                                required
                                label="I accept terms and conditions"
                                checked={formR.values.terms}
                                onChange={(event) => formR.setFieldValue('terms', event.currentTarget.checked)}
                            />
                        )}
                    </Stack>

                    <Group justify="space-between" mt="xl">
                        <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                            {type === 'Register'
                                ? 'Ya tienes una cuenta? Login'
                                : "No te haz registrado? Register"}
                        </Anchor>
                        {type === 'Register' && (
                            <Button type="submit" radius="xl" onClick={() => handleRegister(formR.values)} >
                                Registrate
                            </Button>
                        )}
                        {type === 'Login' && (
                            <Button type="submit" radius="xl" onClick={() => handleLogin(formL.values.email, formL.values.password)} >
                                Login
                            </Button>
                        )}
                    </Group>
                </form>
            </Paper>
        </>
    )
}

export default Login;