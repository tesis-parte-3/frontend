import { Progress, Box, Text, Group, Paper, SimpleGrid, rem, Badge } from '@mantine/core';
import { IconArrowUpRight, IconDeviceAnalytics } from '@tabler/icons-react';
import classes from '../components/Graficos/StatsCard.module.css';
import { Transition } from '@mantine/core';
import { useEffect, useState } from 'react';


/* Informacion de base de datos donde se saca la infomacion para hacer el grafico de victorias y derrotas */

const data = [
    { label: 'Completados', count: '10', part: 30, color: '#6BD731' },
    { label: 'Fallidos', count: '20', part: 70, color: '#9F4445' },
];

function Estadistica() {
    const segments = data.map((segment) => (
        <Progress.Section value={segment.part} color={segment.color} key={segment.color}>
            {segment.part > 10 && <Progress.Label>{segment.part}%</Progress.Label>}
        </Progress.Section>
    ));

    const descriptions = data.map((stat) => (
        <Box key={stat.label} style={{ borderBottomColor: stat.color }} className={classes.stat}>
            <Text tt="uppercase" fz="xs" c="dimmed" fw={700}>
                {stat.label}
            </Text>

            <Group justify="space-between" align="flex-end" gap={0}>
                <Text fw={700}>{stat.count}</Text>
                <Text c={stat.color} fw={700} size="sm" className={classes.statCount}>
                    {stat.part}%
                </Text>
            </Group>
        </Box>
    ));
    // Esto es para la animacion de la pagina
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);



    return (
        <>
            <Transition
                mounted={isMounted}
                transition="scale-y"
                duration={500}
                timingFunction="ease"
            >
                {(styles) => <div style={styles}><Paper shadow="xl" mt="30" p="lg" h="auto" w="85%" mx="auto" radius="md" withBorder className={classes.card}>
                    <Group justify="space-between">
                        <Group align="flex-end" gap="xs">
                            <Text fz="xl" fw={700}>
                                Estadisticas
                            </Text>
                            <Text c="teal" className={classes.diff} fz="sm" fw={700}>
                                <span>33,33%</span> {/* Aqui seria una tasa de victorias. */}
                                <IconArrowUpRight size="1rem" style={{ marginBottom: rem(4) }} stroke={1.5} />
                            </Text>
                        </Group>
                        <IconDeviceAnalytics size="1.4rem" className={classes.icon} stroke={1.5} />
                    </Group>

                    <Text c="dimmed" fz="sm">
                        Examenes Completados / Fallidos
                    </Text>

                    <Progress.Root size={34} classNames={{ label: classes.progressLabel }} mt={40}>
                        {segments}
                    </Progress.Root>
                    <SimpleGrid cols={{ base: 1, xs: 3 }} mt="xl">
                        {descriptions}
                    </SimpleGrid>
                </Paper>
                    <Paper shadow="xl" mt="30" p="lg" h="auto" w="85%" mx="auto" radius="md" withBorder className={classes.card}>
                        <Text ta="center" fw={700} className={classes.title}>
                            Lecciones realizadas
                        </Text>
                        <Text c="dimmed" ta="center" fz="sm">
                            4 / Semana
                        </Text>
                        <Group justify="space-between" mt="xs">
                            <Text fz="sm">
                                Licencia 3B
                            </Text>
                            <Text fz="sm" c="dimmed">
                                Progress
                            </Text>
                            <Text fz="sm" c="dimmed">
                                20%
                            </Text>
                        </Group>
                        <Progress value={20} mt={5} /> {/* Esto tiene que ser una variable dinamica que se conecte con el backend */}
                        <Group justify="space-between" mt="md">
                            <Text fz="sm"></Text>
                            <Badge size="lg">1 / 15 </Badge>
                        </Group>
                        {/* Dividor de lecciones */}
                        <Group justify="space-between" mt="xs">
                            <Text fz="sm">
                                Licencia 1B
                            </Text>
                            <Text fz="sm" c="dimmed">
                                Progress
                            </Text>
                            <Text fz="sm" c="dimmed">
                                100%
                            </Text>
                        </Group>
                        <Progress value={100} mt={5} /> {/* Esto tiene que ser una variable dinamica que se conecte con el backend */}
                        <Group justify="space-between" mt="md">
                            <Text fz="sm"></Text>
                            <Badge size="lg">15 / 15 </Badge>
                        </Group>
                        {/* Dividor de lecciones */}
                        <Group justify="space-between" mt="xs">
                            <Text fz="sm">
                                Licencia 5B
                            </Text>
                            <Text fz="sm" c="dimmed">
                                Progress
                            </Text>
                            <Text fz="sm" c="dimmed">
                                70%
                            </Text>
                        </Group>
                        <Progress value={70} mt={5} /> {/* Esto tiene que ser una variable dinamica que se conecte con el backend */}
                        <Group justify="space-between" mt="md">
                            <Text fz="sm"></Text>
                            <Badge size="lg">10 / 15 </Badge>
                        </Group>

                    </Paper>
                    <Paper mt="70" p="lg" h="auto" w="85%" mx="auto" radius="md" withBorder> </Paper></div>}
            </Transition>


        </>



    );
}

export default Estadistica;