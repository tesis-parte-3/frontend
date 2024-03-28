import { useEffect, useState } from 'react';
import { Text, Group, Paper, Transition, rem } from '@mantine/core';
import UserInfoAction from "../components/Userinfo.init/UserInfoAction_admin";
import { RingProgress, SimpleGrid, Center, Table, Title, Divider } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';
import { InfoCircle } from 'tabler-icons-react';
import Examen from './Examen';
import axios from 'axios';

interface IUserQuantity {
    label: string;
    stats: number;
    progress: number;
    color: string;
    icon: 'up' | 'down';
}

interface IQuestionsQuantity {
    label: string;
    stats: number;
    progress: number;
    color: string;
    icon: 'up' | 'down';
}

interface IUsersData {
    name: string;
    email: string;
    dni: string;
}

interface IUser {
    id: number;
    name: string;
    email: string;
    dni: string;
    approved_exams: number | null;
    reproved_exams: number | null;
    users_quantity: number;
    created_at: string;
    updated_at: string;
}

const icons = {
    up: IconArrowUpRight,
    down: IconArrowDownRight,
};

const data = [
    { label: 'Cantidad de Usuarios', stats: 1, progress: 100, color: 'blue', icon: 'up' },
    {
        label: 'Cantidad de Preguntas Disponibles',
        stats: Examen.length,
        progress: 100,
        color: 'orange',
        icon: 'up',
    },
] as const;

const names = ['Juan', 'Ismael', 'Rafael', 'Alberto', 'Enrique'];


function Admin() {
    const [isMounted, setIsMounted] = useState(false);
    const [users, setUsers] = useState([
        { name: '', email: '', dni: '' }
    ]);
    const [userQuantity, setUserQuantity] = useState<IUserQuantity>({
        label: 'Cantidad de Usuarios',
        stats: 0,
        progress: 0,
        color: 'blue',
        icon: 'up',
    })
    const [questionsQuantity, setQuestionsQuantity] = useState<IQuestionsQuantity>({
        label: 'Cantidad de Preguntas Disponibles',
        stats: 0,
        progress: 0,
        color: 'orange',
        icon: 'up',
    })

    useEffect(() => {
        setIsMounted(true);
        
        axios.get("https://api.ismoxpage.online/users", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('admin_token')}`
            }
        }).then((res) => {
            setUsers([])
            res.data.map((user: IUser) => {
                setUsers((prev) => [...prev, { name: user.name, email: user.email, dni: user.dni }])
            })
            setUserQuantity({
                label: 'Cantidad de Usuarios',
                stats: res.data[0].users_quantity,
                progress: 100,
                color: 'blue',
                icon: 'up',
            })
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    const rows = users.map((UsersData) => (
        <Table.Tr key={UsersData.name}>
            <Table.Td>{UsersData.name}</Table.Td>
            <Table.Td>{UsersData.email}</Table.Td>
            <Table.Td>{UsersData.dni}</Table.Td>
        </Table.Tr>
    ));


    const Stats = () => {
        const Icon = icons[userQuantity.icon];
        return (
            <Paper withBorder radius="md" p="xs" key={userQuantity.label} ml="lg" mr="lg">
                <Group>
                    <RingProgress
                        size={80}
                        roundCaps
                        thickness={8}
                        sections={[{ value: userQuantity.progress, color: userQuantity.color }]}
                        label={
                            <Center>
                                <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
                            </Center>
                        }
                    />

                    <div>
                        <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
                            {userQuantity.label}
                        </Text>
                        <Text fw={700} size="xl">
                            {userQuantity.stats}
                        </Text>
                    </div>
                </Group>
            </Paper>
        );
    }


    return (
        <>
            <UserInfoAction />
            <Transition
                mounted={isMounted}
                transition="fade"
                duration={300}
                timingFunction="ease"
            >
                {(styles) => <div style={styles}>
                    
                    <Title order={2} ta="center" mt="lg">Vista Rapida</Title>
                    <Divider my="md" label={<InfoCircle size={25} strokeWidth={2}></InfoCircle>} labelPosition="center" ml="xl" mr="xl" />
                    <SimpleGrid cols={{ base: 1, sm: 3 }}>
                        <Stats />
                    </SimpleGrid>
                    <Paper m="lg" shadow="lg" withBorder>
                        <Text size="xl" ta="center" fw={500} p="xs" >
                            Ultimos usuarios registrados en las 24 horas.
                        </Text>
                        <Divider/>
                        <Table striped>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th>Nombre</Table.Th>
                                    <Table.Th>Email</Table.Th>
                                    <Table.Th>Cedula</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>{rows}</Table.Tbody>
                        </Table>

                    </Paper>
                </div>}
            </Transition>
        </>
    )
}

export default Admin;

