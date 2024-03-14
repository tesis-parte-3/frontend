import { useEffect, useState } from 'react';
import { Table, Checkbox, Group, Container, Button, Accordion, Paper,  Transition, Divider, Title, Stack, TextInput, PasswordInput } from '@mantine/core';
import classes from './Examen_Pages/BadgeCard.module.css';
import { Users } from 'tabler-icons-react';
import { useForm } from '@mantine/form';
import axios from 'axios';

interface IRegister {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    dni: string;
    terms: boolean;
}
const eliminardata = [
    { name: "Yuan", email: "correo@email.com", dni: '12587127' },
    { name: "Ismael", email: "correo@email.com", dni: '62456324' },
    { name: "Jeralding", email: "correo@email.com", dni: '72867' },
    { name: "Angel", email: "correo@email.com", dni: '7286767' },
    { name: "Rafael", email: "correo@email.com", dni: '23452' },
    { name: "Ruben", email: "correo@email.com", dni: '73456345' },
    { name: "Yeferson", email: "correo@email.com", dni: '6546321' },
    { name: "Daniel", email: "correo@email.com", dni: '5234234' },
    { name: "Juan", email: "correo@email.com", dni: '123123' },
];


function Admincu() {
    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        setIsMounted(true);
    }, []);




    const [error, setError] = useState<string | null>(null);
    const form = useForm<IRegister>({
        initialValues: {
            email: '',
            name: '',
            password: '',
            password_confirmation: '',
            dni: '',
            terms: true
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
        axios.post('http://localhost:3000/users', values)
            .then(function (response) {
                console.log(response);
                localStorage.setItem("user", JSON.stringify(response.data))
            })
            .catch(function (error) {
                console.log(error);
                setError('No se pudo registrar el usuario')
            });
    }

    const [selectedRows, setSelectedRows] = useState<string[]>([]);

    const rows = eliminardata.map((eliminardata) => (

        <Table.Tr
            key={eliminardata.dni}
            bg={selectedRows.includes(eliminardata.name) ? 'var(--mantine-color-gray-light)' : undefined}
        >
            <Table.Td>
                <Checkbox
                    aria-label="Select row"
                    checked={selectedRows.includes(eliminardata.name)}
                    onChange={(event) =>
                        setSelectedRows(
                            event.currentTarget.checked
                                ? [...selectedRows, eliminardata.name]
                                : selectedRows.filter((name) => name !== eliminardata.name)
                        )
                    }
                />
            </Table.Td>

            <Table.Td>{eliminardata.name}</Table.Td>
            <Table.Td>{eliminardata.email}</Table.Td>
            <Table.Td>{eliminardata.dni}</Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <Transition
                mounted={isMounted}
                transition="scale-y"
                duration={500}
                timingFunction="ease"
            >
                {(styles) => <div style={styles}>
                    <Paper>
                        <Title order={2} ta="center" mt="lg">Control de Usuario</Title>
                        <Divider my="md" label={<Users size={25} strokeWidth={2}></Users>} labelPosition="center" ml="xl" mr="xl" />
                    </Paper>

                    <Container size="sm" className={classes.wrapper}>

                        <Accordion variant="separated" defaultValue="Agregar">
                            <Accordion.Item className={classes.item} value="Agregar">
                                <Accordion.Control>Agregar Usuario</Accordion.Control>
                                <Accordion.Panel>
                                    <Paper>
                                        <Divider my="md" labelPosition="center" ml="xl" mr="xl" />
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

                                            </Stack>
                                            <Group justify="space-between" mt="xl">

                                                <Button type="submit" variant='outline' onClick={() => handleRegister(form.values)} >
                                                    Agregar
                                                </Button>
                                            </Group>
                                        </form>
                                    </Paper>
                                </Accordion.Panel>

                            </Accordion.Item>
                            <Accordion.Item className={classes.item} value="Eliminar">
                                <Accordion.Control>Eliminar Usuario</Accordion.Control>
                                <Accordion.Panel>
                                    <Paper >
                                        <Table>
                                            <Table.Thead>
                                                <Table.Tr>
                                                    <Table.Th>CB</Table.Th>
                                                    <Table.Th>Nombre</Table.Th>
                                                    <Table.Th>Email</Table.Th>
                                                    <Table.Th>Dni</Table.Th>
                                                </Table.Tr>
                                            </Table.Thead>
                                            <Table.Tbody>{rows}</Table.Tbody>
                                            
                                        </Table>
                                        <Group justify="space-between" mt="3%">

                                                <Button type="submit" variant='outline' color="red">
                                                    Eliminar seleccionado/s
                                                </Button>
                                            </Group>
                                    </Paper>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Container>
                </div>}
            </Transition>

        </>
    )
}

export default Admincu;

