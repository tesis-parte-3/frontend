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
  Anchor,
} from '@mantine/core';
import Navbar from '../components/Navbar/navbar';

interface ILogin {
  email: string;
  password: string;
}

function Login() {
  const [error, setError] = useState<string | null>(null)
  const form = useForm<ILogin>({
    initialValues: {
      email: '',
      password: ''
    },

    validate: {
      email: (val) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? null : 'Email inválido'),
      password: (val) => (val.length <= 6 ? 'Tiene que tener mas de 6 caracteres' : null),
    },
  });

  const handleLogin = (email: string, password: string) => {
    axios.post('https://api.ismoxpage.online/login', {
      email: email,
      password: password
    })
      .then((res: any) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data))
        window.location.replace('/principal')
      })
      .catch((err) => {
        console.log(err);
        setError("El usuario o contraseña son incorrectos")
      });
  }


  return (
    <>
      <Navbar />
      <Paper mt="60" radius="md" p="lg" withBorder h="auto" w="85%" mx="auto">
        <Text size="lg" fw={500} mb={30}>
          Bienvenido a QuizDrive, inicie sesión
        </Text>
        { error && (
          <Text ta="center" c="red" mb={20} fz={15}>
            {error}
          </Text>
        )}
        <form onSubmit={form.onSubmit(() => { })}>
          <TextInput
            required
            label="Correo electrónico"
            placeholder="hello@quizdrive.com"
            error={form.errors.email && 'Email Invalido'}
            radius="md"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            required
            label="Contraseña"
            placeholder="Contraseña"
            error={form.errors.password && 'Tiene que tener mas de 6 caracteres'}
            mt={10}
            radius="md"
            {...form.getInputProps('password')}
          />
          <Group justify="space-between" mt="xl">
            <Anchor component="button" type="button" c="dimmed" onClick={() => window.location.replace('/register')} size="xs">
              No te has registrado? Register
            </Anchor>
            <Button type="submit" radius="sm" onClick={() => handleLogin(form.values.email, form.values.password)}>
              Login
            </Button>
          </Group>
        </form>
      </Paper>
    </>
  )
}

export default Login;