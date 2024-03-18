import { useEffect, useState } from 'react';
import { Transition } from '@mantine/core';
import { Paper, Text, Title, Button, Center, Divider, Affix, rem} from '@mantine/core';
import { Link } from 'react-router-dom';
import { ArrowBarDown } from 'tabler-icons-react';
import { IconArrowDown } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';



function G2_Estudios() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <>
            <Transition
                mounted={isMounted}
                transition="scale-y"
                duration={500}
                timingFunction="ease"
            >
                {(styles) => <div style={styles}>
                    {/* UNIDAD I */}
                    <Affix position={{ bottom: "20%", right: -20 }}>
                        <Transition transition="slide-up" mounted={scroll.y < 90}>
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
                    <Paper
                        mt="30"
                        p="lg"
                        h="auto"
                        w="85%"
                        mx="auto"
                        radius="md"
                        shadow="xl"
                        withBorder
                        
                    >
                        <Center>
                            <Title order={2}>UNIDAD I:</Title>
                        </Center>
                        <Center>
                            <Title order={3}>Conduccion Responsable</Title>
                        </Center>
                        <Divider my="md" size="lg" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Practica la conducción responsable</Text>
                            <Link to="/Conduccion_Responsable">
                                <Button
                                    variant="gradient"
                                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            Autor RACC AC.
                        </Text>
                        <Divider my="md" size="lg" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Semaforos</Text>
                            <Link to="/Semaforo_G3">
                                <Button
                                    variant="gradient"
                                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            Autor RACC AC.
                        </Text>

                    </Paper>
                    <Divider my="md" label={<ArrowBarDown size={35} strokeWidth={2}></ArrowBarDown>} labelPosition="center" ml="xl" mr="xl" />
                    <Paper
                        p="lg"
                        h="auto"
                        w="85%"
                        mx="auto"
                        radius="md"
                        shadow="xl"
                        withBorder>
                        <Center>
                            <Title order={2}>UNIDAD II:</Title>
                        </Center>
                        <Center>
                            <Title ta="center" order={3}>Funcionamiento de una Motocicleta</Title>
                        </Center>
                        <Divider my="md" size="lg" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Como funciona un moto (Buscar)?</Text>
                            <Link to="/Funcionamiento_Vehiculo">
                                <Button variant="gradient"
                                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            Autor. EditorialCEP
                        </Text>
                        <Divider my="md" size="lg" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Contenido de una moto (Buscar)</Text>
                            <Link to="/Luces_Vehiculos">
                                <Button variant="gradient"
                                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            Autor. AutoEscuela SIGLOXXI
                        </Text>
                    </Paper>
                    <Divider my="md" label={<ArrowBarDown size={35} strokeWidth={2}></ArrowBarDown>} labelPosition="center" ml="xl" mr="xl" />
                    <Paper
                        p="lg"
                        h="auto"
                        w="85%"
                        mx="auto"
                        radius="md"
                        shadow="xl"
                        withBorder>
                        <Center>
                            <Title order={2}>UNIDAD III:</Title>
                        </Center>
                        <Center>
                            <Title order={3}>Normativa Grado 2</Title>
                        </Center>
                        <Divider my="md" size="lg" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Normativa Basica</Text>
                            <Link to="/Normativa_Basica">
                                <Button variant="gradient"
                                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            Autor. Ley de Tránsito Terrestre
                        </Text>
                        <Divider my="md" size="lg" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Linea vial - Carreteras</Text>
                            <Link to="/Linea_Demarcacion">
                                <Button variant="gradient"
                                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            Autor: MVDUCT
                        </Text>
                        <Divider my="md" size="lg" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Reductores de velocidad</Text>
                            <Link to="/Reductor_V">
                                <Button variant="gradient"
                                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            Autor: MVDUCT
                        </Text>
                    </Paper>
                    <Divider my="md" label={<ArrowBarDown size={35} strokeWidth={2}></ArrowBarDown>} labelPosition="center" ml="xl" mr="xl" />

                    <Paper
                        p="lg"
                        h="auto"
                        w="85%"
                        mx="auto"
                        radius="md"
                        shadow="xl"
                        withBorder
                        mb="10%"
                    >
                        <Center>
                            <Title order={2}>UNIDAD IV:</Title>
                        </Center>
                        <Center>
                            <Title order={3}>Señalizacion</Title>
                        </Center>
                        <Divider my="md" size="lg" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Señales Vertical Generales</Text>
                            <Link to="/Senal_VG">
                                <Button
                                    variant="gradient"
                                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            Autor: MVDUCT
                        </Text>
                        <Divider my="md" size="lg" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Señales de Reglamentacion</Text>
                            <Link to="/Senal_Regla">
                                <Button
                                    variant="gradient"
                                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            Autor: MVDUCT
                        </Text>

                        <Divider my="md" size="lg" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Señales de Prevencion</Text>
                            <Link to="/Senal_PRE">
                                <Button
                                    variant="gradient"
                                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            Autor: MVDUCT
                        </Text>

                        <Divider my="md" size="lg" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Señales de Informacion</Text>
                            <Link to="/Senal_INFO">
                                <Button
                                    variant="gradient"
                                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            Autor: MVDUCT
                        </Text>
                        <Divider my="md" size="lg" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Señales de Mensaje Variable</Text>
                            <Link to="/Senal_MVA">
                                <Button
                                    variant="gradient"
                                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            Autor: MVDUCT
                        </Text>
                        <Divider my="md" size="lg" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Señales Temporales en el Control de Transito</Text>
                            <Link to="/Senal_TCT">
                                <Button
                                    variant="gradient"
                                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            Autor: MVDUCT
                        </Text>



                    </Paper>
                    
                    
                    
                    
                    {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Capitulo 1 Generalidades</Text>
                            <Link to="/LibroDiccionarioVial">
                                <Button variant="gradient"
                                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            MVDUCT
                        </Text> */}
                </div>}
            </Transition>
        </>
    )
}

export default G2_Estudios;