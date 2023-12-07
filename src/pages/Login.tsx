import { useToggle, upperFirst } from '@mantine/hooks';
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
import { GoogleButton } from './GoogleButton';

function Login() {
    const [type, toggle] = useToggle(['Login', 'Register']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
            cedula: '',
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
            cedula: (val) => {
                if (val.length < 7) {
                    return 'Cédula inválida, debe tener al menos 7 dígitos';
                }
                const isNumeric = /^[0-9]+$/.test(val);
                if (!isNumeric) {
                    return 'Cédula inválida, solo números';
                }
                return null;
            },
        },
    });

    return (
        <Paper radius="md" p="lg" withBorder h="auto" w="85%" mx="auto">
            <Text size="lg" fw={500}>
                Bienvenido a QuizDrive, {type} con
            </Text>

            <Group grow mb="md" mt="md">
                <GoogleButton radius="xl">Google</GoogleButton>
            </Group>

            <Divider label="O continua iniciando con correo" labelPosition="center" my="lg" />

            <form onSubmit={form.onSubmit(() => { })}>
                <Stack>
                    {type === 'Register' && (
                        <TextInput
                            required
                            label="Name"
                            placeholder="Tu Nombre"
                            value={form.values.name}
                            onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                            error={form.errors.name && 'Nombre inválido, tiene caracteres no permitidos'}
                            radius="md"
                        />

                    )}

                    <TextInput
                        required
                        label="Email"
                        placeholder="hello@mantine.dev"
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                        error={form.errors.email && 'Email Invalido'}
                        radius="md"
                    />
                    {type === 'Register' && (
                        <TextInput
                            required
                            label="Cedula"
                            placeholder="12345678"
                            value={form.values.cedula}
                            onChange={(event) => form.setFieldValue('cedula', event.currentTarget.value)}
                            error={form.errors.cedula && 'Cedula invalida debe tener al menos 7 digitos'}
                            radius="md"
                        />)}
                    <PasswordInput
                        required
                        label="Password"
                        placeholder="Your password"
                        value={form.values.password}
                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                        error={form.errors.password && 'Tiene que tener mas de 6 caracteres'}
                        radius="md"
                    />

                    {type === 'Register' && (
                        <Checkbox
                            required
                            label="I accept terms and conditions"
                            checked={form.values.terms}
                            onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                        />
                    )}
                </Stack>

                <Group justify="space-between" mt="xl">
                    <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                        {type === 'Register'
                            ? 'Ya tienes una cuenta? Login'
                            : "No te haz registrado? Register"}
                    </Anchor>
                    <Button type="submit" radius="xl">
                        {upperFirst(type)}
                    </Button>
                </Group>
            </form>
        </Paper>
    )
}

export default Login;