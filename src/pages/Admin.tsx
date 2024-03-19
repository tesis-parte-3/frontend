import { useEffect, useState } from 'react';
import { Text, Group, Paper, Transition, rem } from '@mantine/core';
import UserInfoAction from "../components/Userinfo.init/UserInfoAction_admin";
import { RingProgress, SimpleGrid, Center, Table, Title, Divider } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';
import { InfoCircle, User } from 'tabler-icons-react';
import Examen from './Examen';


const icons = {
    up: IconArrowUpRight,
    down: IconArrowDownRight,
};
const data = [
    { label: 'Cantidad de Usuarios', stats: User.length, progress: 100, color: 'blue', icon: 'up' },
    {
        label: 'Cantidad de Preguntas Disponibles',
        stats: Examen.length,
        progress: 100,
        color: 'orange',
        icon: 'up',
    },
] as const;
const UsersData = [
    { name: "Juan", email: "email@email.com", password: 'arctc33', dni: '126345' },
    { name: "Ismael", email: "email@email.com", password: 'erybhr', dni: '782345' },
    { name: "Rafael", email: "email@email.com", password: 'rtytber', dni: '134721' },
    { name: "Alberto", email: "email@email.com", password: 'Basdegrtru', dni: '1234676' },
    { name: "Enrique", email: "email@email.com", password: 'Casdasd', dni: '6242342' },
];

function Admin() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    const rows = UsersData.map((UsersData) => (
        <Table.Tr key={UsersData.name}>
            <Table.Td>{UsersData.name}</Table.Td>
            <Table.Td>{UsersData.email}</Table.Td>
            <Table.Td>{UsersData.password}</Table.Td>
            <Table.Td>{UsersData.dni}</Table.Td>
        </Table.Tr>
    ));


    const stats = data.map((stat) => {
        const Icon = icons[stat.icon];
        return (
            <Paper withBorder radius="md" p="xs" key={stat.label} ml="lg" mr="lg">
                <Group>
                    <RingProgress
                        size={80}
                        roundCaps
                        thickness={8}
                        sections={[{ value: stat.progress, color: stat.color }]}
                        label={
                            <Center>
                                <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
                            </Center>
                        }
                    />

                    <div>
                        <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
                            {stat.label}
                        </Text>
                        <Text fw={700} size="xl">
                            {stat.stats}
                        </Text>
                    </div>
                </Group>
            </Paper>
        );
    });


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
                    <SimpleGrid cols={{ base: 1, sm: 3 }}>{stats}</SimpleGrid>
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
                                    <Table.Th>Contraseña</Table.Th>
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

