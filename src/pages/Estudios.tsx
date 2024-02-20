import { useEffect, useState } from 'react';
import { Transition } from '@mantine/core';
import { Paper, Text, Title, Button, Center, Divider } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from '../assets/css/Estudios.module.css';

function Estudios() {
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
                {(styles) => <div style={styles}>
                    {/* UNIDAD I */}
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
                            <Title order={3}>Diccionario Vial</Title>
                        </Center>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text> Libro Diccionario Vial</Text>
                            <Link to="/LibroDiccionarioVial">
                                <Button variant="gradient"
                                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            Autor Prof. Magally Velázquez
                        </Text>
                    </Paper>


                    {/* UNIDAD II */}
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
                            <Title order={2}>UNIDAD II:</Title>
                        </Center>
                        <Center>
                            <Title order={3}>Libros Varios, Relacionados</Title>
                        </Center>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Libro Seguridad vial en Venezuela.</Text>
                            <Link to="/SeguridadVial">
                                <Button variant="gradient"
                                    gradient={{ from: 'orange', to: 'yellow', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            Autor Prof. Elio Rafael Aguilera.
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Programa nacional integral de educación y seguridad vial.</Text>
                            <Link to="/Integridad_De_Educacion">
                                <Button variant="gradient"
                                    gradient={{ from: 'orange', to: 'yellow', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            Autor CIAPEV
                        </Text>
                    </Paper>
                    {/* UNIDAD III */}
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
                            <Title order={2}>UNIDAD III:</Title>
                        </Center>
                        <Center>
                            <Title order={3}>Normas Técnicas Relacionadas</Title>
                        </Center>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Cinturones de seguridad para vehículos de motor.</Text>
                            <Link to="/Cinturones_seguridad_VDM">
                                <Button variant="gradient"
                                    gradient={{ from: 'green', to: 'lime', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            FONDONORMA: 1064-2005
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Extintores portátiles. Generalidades</Text>
                            <Link to="/Extintores_Generalidades">
                                <Button variant="gradient"
                                    gradient={{ from: 'green', to: 'lime', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            FONDANORMA: 1040-2006
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Clasificación, símbolos y dimensiones de señales de identificación</Text>
                            <Link to="/Clasificacion_SD_identificacion">
                                <Button variant="gradient"
                                    gradient={{ from: 'green', to: 'lime', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            COVENIN: 3060-2002
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Requisitos para el comportamiento del sistema de frenos</Text>
                            <Link to="/Automotriz_sistema_frenos">
                                <Button variant="gradient"
                                    gradient={{ from: 'green', to: 'lime', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            COVENIN: 3184-1995
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Vehículos automotores. Partes ópticas y dispositivos eléctricos de iluminación</Text>
                            <Link to="/Vehiculos_dispositivosEI">
                                <Button variant="gradient"
                                    gradient={{ from: 'green', to: 'lime', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            COVENIN: 2859-1992
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Guía de respuesta de emergencia</Text>
                            <Link to="/Respuesta_Emergencia">
                                <Button variant="gradient"
                                    gradient={{ from: 'green', to: 'lime', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            COVENIN: 2670-2001
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Dispositivos de advertencia. Triángulos de seguridad</Text>
                            <Link to="/TrianguloSeguridad">
                                <Button variant="gradient"
                                    gradient={{ from: 'green', to: 'lime', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            COVENIN: 3604-2000
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Equipos de control de semáforos</Text>
                            <Link to="/Control_Semaforos">
                                <Button variant="gradient"
                                    gradient={{ from: 'green', to: 'lime', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            COVENIN: 2753-1999
                        </Text>
                        </Paper>

                        {/* UNIDAD IV */}
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
                            <Title order={2}>UNIDAD IV:</Title>
                        </Center>
                        <Center>
                            <Title order={3}>Vehiculos de Pesados</Title>
                        </Center>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Unidades de transporte escolar. Clasificación y tipología</Text>
                            <Link to="/EscolarTransporte">
                                <Button variant="gradient"
                                    gradient={{ from: 'grape', to: 'violet', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            COVENIN: 911-1987
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Tipología de los vehículos de carga</Text>
                            <Link to="/Vehiculos_Carga">
                                <Button variant="gradient"
                                    gradient={{ from: 'grape', to: 'violet', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            COVENIN: 2402-1997
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Empresas de transporte público urbano.</Text>
                            <Link to="/Empresas_TransporteUrbano">
                                <Button variant="gradient"
                                    gradient={{ from: 'grape', to: 'violet', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            COVENIN: 3270-1996
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Autobús de turismo. Tipología</Text>
                            <Link to="/Autobus_Turismo">
                                <Button variant="gradient"
                                    gradient={{ from: 'grape', to: 'violet', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            COVENIN: 3354-1997
                        </Text>
                        <Divider my="md" />
                    </Paper>
                    {/* UNIDAD I */}
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
                            <Title order={2}>UNIDAD V:</Title>
                        </Center>
                        <Center>
                            <Title order={3}>Manual Control del Tránsito</Title>
                        </Center>
                        <Center>
                            <Title order={3}>Venezolano</Title>
                        </Center>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>C1 Generalidades.</Text>
                            <Link to="/Generalidades">
                                <Button variant="gradient"
                                    gradient={{ from: 'pink', to: 'grape', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            Autor: MVDUCT
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>C2.1 Señales verticales generalidades.</Text>
                            <Link to="/VertialesSenals">
                                <Button variant="gradient"
                                    gradient={{ from: 'pink', to: 'grape', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                        Autor: MVDUCT
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>C2.2 Señales de reglamentación.</Text>
                            <Link to="/ReglamentacionSenals">
                                <Button variant="gradient"
                                    gradient={{ from: 'pink', to: 'grape', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                        Autor: MVDUCT
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>C2.3 Señales de prevención.</Text>
                            <Link to="/PrevencionSenals">
                                <Button variant="gradient"
                                    gradient={{ from: 'pink', to: 'grape', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                        Autor: MVDUCT
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>C2.4 Señales de información.</Text>
                            <Link to="/InformationSenals">
                                <Button variant="gradient"
                                    gradient={{ from: 'pink', to: 'grape', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                        Autor: MVDUCT
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>C2.5 Señales de mensajes variables.</Text>
                            <Link to="/VariablesSenals">
                                <Button variant="gradient"
                                    gradient={{ from: 'pink', to: 'grape', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                        Autor: MVDUCT
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>C3 Demarcación.</Text>
                            <Link to="/Demarcacion">
                                <Button variant="gradient"
                                    gradient={{ from: 'pink', to: 'grape', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                        Autor: MVDUCT
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>C4 Semáforos.</Text>
                            <Link to="/SemaforosCT">
                                <Button variant="gradient"
                                    gradient={{ from: 'pink', to: 'grape', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                        Autor: MVDUCT
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>C5 Dispositivos temporales para el control del tránsito.</Text>
                            <Link to="/Dispositivos_Temporales">
                                <Button variant="gradient"
                                    gradient={{ from: 'pink', to: 'grape', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                        Autor: MVDUCT
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>C6 Dispositivos reductores de velocidad.</Text>
                            <Link to="/Reductor_Velocidad">
                                <Button variant="gradient"
                                    gradient={{ from: 'pink', to: 'grape', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                        Autor: MVDUCT
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>C7 Ciclorruta.</Text>
                            <Link to="/Ciclorruta">
                                <Button variant="gradient"
                                    gradient={{ from: 'pink', to: 'grape', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                        Autor: MVDUCT
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>C8 Canales preferenciales para transporte público.</Text>
                            <Link to="/Canales_Publicos">
                                <Button variant="gradient"
                                    gradient={{ from: 'pink', to: 'grape', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                        Autor: MVDUCT
                        </Text>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>C9 Dispositivos ferroviarios.</Text>
                            <Link to="/Dispositivos_Ferri">
                                <Button variant="gradient"
                                    gradient={{ from: 'pink', to: 'grape', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                        Autor: MVDUCT
                        </Text>
                    </Paper>
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
                            <Title order={2}>UNIDAD VI:</Title>
                        </Center>
                        <Center>
                            <Title order={3}>Motores 2 tiempos</Title>
                        </Center>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Libro</Text>
                            <Link to="/LibroDiccionarioVial">
                                <Button variant="gradient"
                                    gradient={{ from: 'gray', to: 'teal', deg: 210 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            Autor del libro
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
                    
                    <Paper mt="90" p="lg" h="auto" w="85%" mx="auto" radius="md" withBorder> </Paper>
                </div>}
            </Transition>
        </>
    )
}

export default Estudios;