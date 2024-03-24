import { useEffect, useState } from 'react';
import { Affix, Transition, rem } from '@mantine/core';
import { Button, Paper, Text, Group, RingProgress, Card, Image } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from '../assets/css/CardWithStats.module.css';
import { IconArrowDown } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';


function Estudios() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const [scroll, scrollTo] = useWindowScroll();


    return (
        <>
            <Transition
                mounted={isMounted}
                transition="fade"
                duration={500}
                timingFunction="ease"
            >
                {(styles) => <div style={styles}>
                <Text ta="center"></Text>
                    <Affix position={{ bottom: "20%", right: -20 }}>
                        <Transition transition="slide-up" mounted={scroll.y < 100}>
                            {(transitionStyles) => (
                                <Button
                                    leftSection={<IconArrowDown style={{ width: rem(16), height: rem(16) }} />}
                                    style={transitionStyles}
                                    onClick={() => scrollTo({ y: 2000 })}
                                >
                                </Button>
                            )}
                        </Transition>
                    </Affix>

                    <Card withBorder padding="lg" className={classes.card} m="lg" radius="md" shadow="md">
                        <Card.Section>
                            <Image
                                src="https://png.pngtree.com/background/20230412/original/pngtree-highway-car-speed-long-exposure-photography-advertising-background-picture-image_2401352.jpg"
                                alt="Licencia G3"
                                height={100}
                            />
                        </Card.Section>

                        <Group justify="space-between" mt="xl">
                            <Text fz="sm" fw={700} className={classes.title}>
                                Licencia G3 - Vehiculos
                            </Text>
                            <Group gap={5}>
                                <Text fz="xs" c="dimmed">
                                    80% completado
                                </Text>
                                <RingProgress size={22} thickness={2} sections={[{ value: 80, color: 'blue' }]} />
                            </Group>
                        </Group>
                        <Text mt="sm" mb="md" c="dimmed" fz="xs">
                            Estudio guiado para licendia G3, que conlleva el estudio de las leyes de transito para vehiculos.
                        </Text>
                        <Card.Section className={classes.footer}>
                            <Group justify="flex-end">
                                <Link to="/G3_Estudios">
                                    <Button size="ml">
                                        Aprender
                                    </Button>
                                </Link>

                            </Group>
                        </Card.Section>
                    </Card>



                    <Card withBorder padding="lg" className={classes.card} m="lg" radius="md" shadow="md">
                        <Card.Section>
                            <Image
                                src="https://png.pngtree.com/background/20230426/original/pngtree-long-line-of-motorcycles-on-a-street-with-cars-in-the-picture-image_2488619.jpg"
                                alt="Licencia G2"
                                height={100}
                            />
                        </Card.Section>

                        <Group justify="space-between" mt="xl">
                            <Text fz="sm" fw={700} className={classes.title}>
                                Licencia G2 - Motocicletas
                            </Text>
                            <Group gap={5}>
                                <Text fz="xs" c="dimmed">
                                    80% completado
                                </Text>
                                <RingProgress size={24} thickness={2} sections={[{ value: 80, color: 'blue' }]} />
                            </Group>
                        </Group>
                        <Text mt="sm" mb="md" c="dimmed" fz="xs">
                            Estudio guiado para licendia G2, que conlleva el estudio de las leyes de transito para motocicletas de cualquier cilindrada.
                        </Text>
                        <Card.Section className={classes.footer}>
                            <Group justify="flex-end">
                                <Link to="/G2_Estudios">
                                    <Button size="ml">
                                        Aprender
                                    </Button>
                                </Link>

                            </Group>
                        </Card.Section>
                    </Card>
                    <Card withBorder padding="lg" className={classes.card} m="lg" radius="md" shadow="md">
                        <Card.Section>
                            <Image
                                src="https://www.shutterstock.com/image-photo/truck-container-on-highway-cargo-600nw-1923463037.jpg"
                                alt="Licencia G5"
                                height={100}
                            />
                        </Card.Section>

                        <Group justify="space-between" mt="xl">
                            <Text fz="sm" fw={700} className={classes.title}>
                                Licencia G5 - Vehiculos
                            </Text>
                            <Group gap={5}>
                                <Text fz="xs" c="dimmed">
                                    80% completado
                                </Text>
                                <RingProgress size={24} thickness={2} sections={[{ value: 80, color: 'blue' }]} />
                            </Group>
                        </Group>
                        <Text mt="sm" mb="md" c="dimmed" fz="xs">
                            Estudio guiado para licendia G5, Aprendizaje de Transporte Público/Vehículos de Carga que no exceda a los nueve mil kilogramos (9.000 kg) Quinto Grado (5°).
                        </Text>
                        <Card.Section className={classes.footer}>
                            <Group justify="flex-end">
                                <Link to="/G5_Estudios">
                                    <Button size="ml">
                                        Aprender
                                    </Button>
                                </Link>

                            </Group>
                        </Card.Section>
                    </Card>



                    <Paper withBorder m="lg" p="lg" radius="md" shadow="md">
                        <Group justify="space-between" mb="xs">
                            <Text fz="xl" fw={700}>
                                Aprendizaje Autodidacta
                            </Text>
                        </Group>
                        <Text fs="italic" fz="md">
                            Material de estudio para el aprendizaje de forma autodidacta,
                            tiene de I a VI unidades de estudio para el aprendizaje significativo de las leyes de transito.
                        </Text>
                        <Group justify="flex-end" mt="md">
                            <Link to="/Autodidactas">
                                <Button size="ml">
                                    Entrar
                                </Button>
                            </Link>

                        </Group>
                    </Paper>


                    

                    <Paper mt="90" p="lg" h="auto" w="85%" mx="auto" radius="md" withBorder> </Paper>




                </div>}
            </Transition>
        </>
    )
}

export default Estudios;