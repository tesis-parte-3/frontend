import { useEffect, useState } from 'react';
import { Transition } from '@mantine/core';
import { Paper, Text, Title, Button, Center, Divider } from '@mantine/core';
import { Link } from 'react-router-dom';


function Autodidactas() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    //DATOS PARA UNIDAD I
    const DiccionarioVial = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadI_1', 'yes');
        }
    };

    //DATOS PARA UNIDAD II
    const IntegridadVial = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadII_1', 'yes');
        }
    };
    const SeguridadVial = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadII_2', 'yes');
        }
    };
    //DATOS PARA UNIDAD III
    const Cinturones = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadIII_1', 'yes');
        }
    };
    const Extintores = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadIII_2', 'yes');
        }
    };
    const Señales = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadIII_3', 'yes');
        }
    };
    const Sistema_Freno = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadIII_4', 'yes');
        }
    };
    const Optica_Iluminacion = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadIII_5', 'yes');
        }
    };
    const RespuestaEmergencia = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadIII_6', 'yes');
        }
    };
    const TrianguloSeguridad = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadIII_7', 'yes');
        }
    };
    const Semaforo = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadIII_8', 'yes');
        }
    };

    //DATOS PARA UNIDAD IV
    const EscolarTransporte = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadIV_1', 'yes');
        }
    };
    const Vehiculos_Carga = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadIV_2', 'yes');
        }
    };
    const Empresas_TransporteUrbano = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadIV_3', 'yes');
        }
    };
    const Autobus_Turismo = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadIV_4', 'yes');
        }
    };

    //DATOS PARA UNIDAD V
    const Generalidades = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadV_1', 'yes');
        }
    };
    const VertialesSenals = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadV_2', 'yes');
        }
    };
    const ReglamentacionSenals = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadV_3', 'yes');
        }
    };
    const PrevencionSenals = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadV_4', 'yes');
        }
    };
    const InformationSenals = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadV_5', 'yes');
        }
    };
    const VariablesSenals = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadV_6', 'yes');
        }
    };
    const Demarcacion = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadV_7', 'yes');
        }
    };
    const SemaforosCT = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadV_8', 'yes');
        }
    };
    const Dispositivos_Temporales = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadV_9', 'yes');
        }
    };
    const Reductor_Velocidad = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadV_10', 'yes');
        }
    };
    const Ciclorruta = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadV_11', 'yes');
        }
    };
    const Canales_Publicos = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadV_12', 'yes');
        }
    };
    const Dispositivos_Ferri = () => {
        if (!localStorage.getItem('visited')) {
            // El usuario está visitando la página por primera vez, establece el item en el localStorage
            localStorage.setItem('UnidadV_13', 'yes');
        }
    };

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
                        <Divider my="md" size="lg"/>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text> Libro Diccionario Vial</Text>
                            <Link to="/LibroDiccionarioVial">
                                <Button onClick={DiccionarioVial}
                                    variant="gradient"
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
                        <Divider my="md" size="lg" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Libro Seguridad vial en Venezuela.</Text>
                            <Link to="/SeguridadVial">
                                <Button onClick={SeguridadVial}
                                    variant="gradient"
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
                                <Button onClick={IntegridadVial}
                                    variant="gradient"
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
                        <Divider my="md" size="lg" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Cinturones de seguridad para vehículos de motor.</Text>
                            <Link to="/Cinturones_seguridad_VDM">
                                <Button onClick={Cinturones}
                                    variant="gradient"
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
                                <Button onClick={Extintores}
                                    variant="gradient"
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
                                <Button onClick={Señales}
                                    variant="gradient"
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
                                <Button onClick={Sistema_Freno}
                                    variant="gradient"
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
                                <Button onClick={Optica_Iluminacion}
                                    variant="gradient"
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
                                <Button onClick={RespuestaEmergencia}
                                    variant="gradient"
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
                                <Button onClick={TrianguloSeguridad}
                                    variant="gradient"
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
                                <Button onClick={Semaforo}
                                    variant="gradient"
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
                        <Divider my="md" size="lg"/>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Unidades de transporte escolar. Clasificación y tipología</Text>
                            <Link to="/EscolarTransporte">
                                <Button onClick={EscolarTransporte}
                                    variant="gradient"
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
                                <Button onClick={Vehiculos_Carga}
                                    variant="gradient"
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
                                <Button onClick={Empresas_TransporteUrbano}
                                    variant="gradient"
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
                                <Button onClick={Autobus_Turismo}
                                    variant="gradient"
                                    gradient={{ from: 'grape', to: 'violet', deg: 90 }}>Leer</Button>
                            </Link>
                        </div>
                        <Text fs="italic">
                            COVENIN: 3354-1997
                        </Text>
                        <Divider my="md" />
                    </Paper>
                    {/* UNIDAD V */}
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
                        <Divider my="md" size="lg" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>C1 Generalidades.</Text>
                            <Link to="/Generalidades">
                                <Button onClick={Generalidades}
                                variant="gradient"
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
                                <Button onClick={VertialesSenals}
                                variant="gradient"
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
                                <Button onClick={ReglamentacionSenals}
                                variant="gradient"
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
                                <Button onClick={PrevencionSenals}
                                variant="gradient"
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
                                <Button onClick={InformationSenals}
                                variant="gradient"
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
                                <Button onClick={VariablesSenals}
                                variant="gradient"
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
                                <Button onClick={Demarcacion}
                                variant="gradient"
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
                                <Button onClick={SemaforosCT}
                                variant="gradient"
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
                                <Button onClick={Dispositivos_Temporales}
                                variant="gradient"
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
                                <Button onClick={Reductor_Velocidad}
                                variant="gradient"
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
                                <Button onClick={Ciclorruta}
                                variant="gradient"
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
                                <Button onClick={Canales_Publicos}
                                variant="gradient"
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
                                <Button onClick={Dispositivos_Ferri}
                                variant="gradient"
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
                        <Divider my="md" size="lg" />
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

export default Autodidactas;