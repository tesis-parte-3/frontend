import { useState, useEffect } from 'react'
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
  Transition,
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

function Register() {
  // @ts-ignore
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
      password: (val) => (val.length < 8 ? 'Tiene que tener mas de 8 caracteres' : null),
      password_confirmation: (val, password) => {
        if (val.length < 8) {
          return 'Tiene que tener mas de 8 caracteres';
        }
        if (val !== password.password) {
          return 'Las contraseñas no coinciden';
        }
        return null;
      },
      dni: (val) => {
        if (val.length < 7 || val.length > 10) {
          return 'Cédula inválida, debe tener al menos 7 dígitos y no mas de 9 digitos';
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
    axios.post('https://api.ismoxpage.online/users', values)
      .then(function (response) {
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response.data))
        window.location.replace("/principal")
      })
      .catch(function (error) {
        console.log(error);
        setError('No se pudo registrar el usuario')
      });
  }
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Navbar />
      <Transition
        mounted={isMounted}
        transition="scale-y"
        duration={300}
        timingFunction="ease"
      >
        {(styles) => <div style={styles}>
          <Paper mt="60" radius="md" p="lg" withBorder h="auto" w="85%" mx="auto">

            <Text size="xl" fw={700} ta="center">
              Bienvenido a QuizDrive, registrate
            </Text>

            <Divider label="Registro de Datos" labelPosition="center" my="lg" />

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
                  placeholder="hello@banano.dev"
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
                  Ya tienes una cuenta? Logeate
                </Anchor>
                <Anchor component="button" type="button" c="dimmed" onClick={() => window.location.replace("/recuperar")} size="xs">
                  No recuerdas tu contraseña?
                </Anchor>
                <Button type="submit" radius="xl" onClick={() => handleRegister(form.values)} >
                  Registrate
                </Button>
              </Group>
            </form>
          </Paper>
        </div>}
      </Transition>

    </>
  )
}

export default Register;