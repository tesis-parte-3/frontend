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
import { GoogleButton } from './GoogleButton';

interface IRegister {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  dni: string;
  terms: boolean;
}

function Register() {
  const [error, setError] = useState<string | null>(null)
  const form = useForm<IRegister>({
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
      password_confirmation: (val) => (val.length <= 6 ? 'Tiene que tener mas de 6 caracteres' : null),
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
          Bienvenido a QuizDrive, registate
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
        </Group>

        <Divider label="O continua iniciando con correo" labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit(() => { })}>
          <Stack>
            <TextInput
              required
              label="Name"
              placeholder="Tu Nombre"
              error={form.errors.name && 'Nombre inválido, tiene caracteres no permitidos'}
              radius="md"
              {...form.getInputProps('name')}
            />
            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              error={form.errors.email && 'Email Invalido'}
              radius="md"
              {...form.getInputProps('email')}
            />
            <TextInput
              required
              label="Cedula"
              placeholder="12345678"
              error={form.errors.dni && 'Cedula invalida debe tener al menos 7 digitos'}
              radius="md"
              {...form.getInputProps('dni')}
            />
            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              error={form.errors.password && 'Tiene que tener mas de 6 caracteres'}
              radius="md"
              {...form.getInputProps('password')}
            />
            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              error={form.errors.password_confirmation && 'Tiene que tener mas de 6 caracteres'}
              radius="md"
              {...form.getInputProps('password_confirmation')}
            />
            <Checkbox
              required
              label="I accept terms and conditions"
              checked={form.values.terms}
              {...form.getInputProps('terms')}
            />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor component="button" type="button" c="dimmed" onClick={() => window.location.replace("/login")} size="xs">
              Ya tienes una cuenta? Login
            </Anchor>
            <Button type="submit" radius="xl" onClick={() => handleRegister(form.values)} >
              Registrate
            </Button>
          </Group>
        </form>
      </Paper>
    </>
  )
}

export default Register;