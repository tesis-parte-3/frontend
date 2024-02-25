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

    //DATOS PARA UNIDAD I
    const [_, setDiccionarioVial] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sDiccionarioVial = localStorage.getItem('UnidadI_1');
        setDiccionarioVial(sDiccionarioVial);
    }, []);
    const [counterI, setCounterI] = useState(0);
    const totalPagesI = 1; // Cambia esto al número total de páginas que el usuario debe visitar
    useEffect(() => {
        let countI = 0;
        // Verificar si cada página ha sido visitada
        if (localStorage.getItem('UnidadI_1') === 'yes') {
            countI++;
        }
        setCounterI(countI);
    }, []);
    const percentageI = (counterI / totalPagesI) * 100;






    //DATOS PARA UNIDAD II
    const [__, setIntegridadVial] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sIntegridadVial = localStorage.getItem('UnidadII_1');
        setIntegridadVial(sIntegridadVial);
    }, []);
    const [___, setSeguridadVial] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sSeguridadVial = localStorage.getItem('UnidadII_2');
        setSeguridadVial(sSeguridadVial);
    }, []);
    const [counterII, setCounterII] = useState(0);
    const totalPagesII = 2; // Cambia esto al número total de páginas que el usuario debe visitar
    useEffect(() => {
        let countII = 0;
        // Verificar si cada página ha sido visitada
        if (localStorage.getItem('UnidadII_1') === 'yes') {
            countII++;
        }
        if (localStorage.getItem('UnidadII_2') === 'yes') {
            countII++;
        }
        setCounterII(countII);
    }, []);
    const percentageII = (counterII / totalPagesII) * 100;









    //DATOS PARA UNIDAD III
    const [____, setCinturones] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sCinturones = localStorage.getItem('UnidadIII_1');
        setCinturones(sCinturones);
    }, []);
    const [_____, setExtintores] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sExtintores = localStorage.getItem('UnidadIII_2');
        setExtintores(sExtintores);
    }, []);
    const [______, seSeñales] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sSeñales = localStorage.getItem('UnidadIII_3');
        seSeñales(sSeñales);
    }, []);
    const [_______, setSistema_Freno] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sSistema_Freno = localStorage.getItem('UnidadIII_4');
        setSistema_Freno(sSistema_Freno);
    }, []);
    const [________, setIluminacion_Optica] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sIluminacion_Optica = localStorage.getItem('UnidadIII_5');
        setIluminacion_Optica(sIluminacion_Optica);
    }, []);
    const [_________, setRespuestaEmergencia] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sRespuestaEmergencia = localStorage.getItem('UnidadIII_6');
        setRespuestaEmergencia(sRespuestaEmergencia);
    }, []);
    const [__________, setTrianguloSeguridad] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sTrianguloSeguridad = localStorage.getItem('UnidadIII_7');
        setTrianguloSeguridad(sTrianguloSeguridad);
    }, []);
    const [___________, setSemaforo] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sSemaforo = localStorage.getItem('UnidadIII_8');
        setSemaforo(sSemaforo);
    }, []);


    const [counterIII, setCounterIII] = useState(0);
    const totalPagesIII = 8; // Cambia esto al número total de páginas que el usuario debe visitar
    useEffect(() => {
        let countIII = 0;
        // Verificar si cada página ha sido visitada
        if (localStorage.getItem('UnidadIII_1') === 'yes') {
            countIII++;
        }
        if (localStorage.getItem('UnidadIII_2') === 'yes') {
            countIII++;
        }
        if (localStorage.getItem('UnidadIII_3') === 'yes') {
            countIII++;
        }
        if (localStorage.getItem('UnidadIII_4') === 'yes') {
            countIII++;
        }
        if (localStorage.getItem('UnidadIII_5') === 'yes') {
            countIII++;
        }
        if (localStorage.getItem('UnidadIII_6') === 'yes') {
            countIII++;
        }
        if (localStorage.getItem('UnidadIII_7') === 'yes') {
            countIII++;
        }
        setCounterIII(countIII);
    }, []);
    const percentageIII = (counterIII / totalPagesIII) * 100;

    //DATOS PARA UNIDAD IV
    const [_1, setTransporteEscolar] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sTransporteEscolar = localStorage.getItem('UnidadIV_1');
        setTransporteEscolar(sTransporteEscolar);
    }, []);
    const [_2, setVehiculos_Carga] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sVehiculos_Carga = localStorage.getItem('UnidadIV_2');
        setVehiculos_Carga(sVehiculos_Carga);
    }, []);
    const [_3, setTransporteUrbanoEmpresas] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sTransporteUrbanoEmpresas = localStorage.getItem('UnidadIV_3');
        setTransporteUrbanoEmpresas(sTransporteUrbanoEmpresas);
    }, []);
    const [_4, setTurismo] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sTurismo = localStorage.getItem('UnidadIV_4');
        setTurismo(sTurismo);
    }, []);
    const [counterIV, setCounterIV] = useState(0);
    const totalPagesIV = 4; // Cambia esto al número total de páginas que el usuario debe visitar
    useEffect(() => {
        let countIV = 0;
        // Verificar si cada página ha sido visitada
        if (localStorage.getItem('UnidadIV_1') === 'yes') {
            countIV++;
        }
        if (localStorage.getItem('UnidadIV_2') === 'yes') {
            countIV++;
        }
        if (localStorage.getItem('UnidadIV_3') === 'yes') {
            countIV++;
        }
        if (localStorage.getItem('UnidadIV_4') === 'yes') {
            countIV++;
        }
        setCounterIV(countIV);
    }, []);
    const percentageIV = (counterIV / totalPagesIV) * 100;

    //DATOS PARA UNIDAD V
    const [_5, setGeneralidades] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sGeneralidades = localStorage.getItem('UnidadV_1');
        setGeneralidades(sGeneralidades);
    }, []);
    const [_6, setSenalesVerticales] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sSenalesVerticales = localStorage.getItem('UnidadV_2');
        setSenalesVerticales(sSenalesVerticales);
    }, []);
    const [_7, setReglamentacionSeñales] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sReglamentacionSeñales = localStorage.getItem('UnidadV_3');
        setReglamentacionSeñales(sReglamentacionSeñales);
    }, []);
    const [_8, setPrevencion] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sPrevencion = localStorage.getItem('UnidadV_4');
        setPrevencion(sPrevencion);
    }, []);
    const [_9, setInformacionSeñales] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sInformacionSeñales = localStorage.getItem('UnidadV_5');
        setInformacionSeñales(sInformacionSeñales);
    }, []);
    const [_10, setMensajesVariables] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sMensajesVariables = localStorage.getItem('UnidadV_6');
        setMensajesVariables(sMensajesVariables);
    }, []);
    const [_11, setDemarcacion] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sDemarcacion = localStorage.getItem('UnidadV_7');
        setDemarcacion(sDemarcacion);
    }, []);
    const [_12, setSemaforosCT1] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sSemaforosCT1 = localStorage.getItem('UnidadV_8');
        setSemaforosCT1(sSemaforosCT1);
    }, []);
    const [_13, setTemporalesDispositivos] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sTemporalesDispositivos = localStorage.getItem('UnidadV_9');
        setTemporalesDispositivos(sTemporalesDispositivos);
    }, []);
    const [_14, setReductorVelocidad] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sReductorVelocidad = localStorage.getItem('UnidadV_10');
        setReductorVelocidad(sReductorVelocidad);
    }, []);
    const [_15, setCiclorruta] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sCiclorruta = localStorage.getItem('UnidadV_11');
        setCiclorruta(sCiclorruta);
    }, []);
    const [_16, setCanales_Prefenciales] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sCanales_Prefenciales = localStorage.getItem('UnidadV_12');
        setCanales_Prefenciales(sCanales_Prefenciales);
    }, []);
    const [_17, setDispositivosFerro] = useState<string | null>(null);
    useEffect(() => {
        // Obtener el nombre del usuario del localStorage
        const sDispositivosFerro = localStorage.getItem('UnidadV_13');
        setDispositivosFerro(sDispositivosFerro);
    }, []);
    const [counterV, setCounterV] = useState(0);
    const totalPagesV = 13; // Cambia esto al número total de páginas que el usuario debe visitar
    useEffect(() => {
        let countV = 0;
        // Verificar si cada página ha sido visitada
        if (localStorage.getItem('UnidadV_1') === 'yes') {
            countV++;
        }
        if (localStorage.getItem('UnidadV_2') === 'yes') {
            countV++;
        }
        if (localStorage.getItem('UnidadV_3') === 'yes') {
            countV++;
        }
        if (localStorage.getItem('UnidadV_4') === 'yes') {
            countV++;
        }
        if (localStorage.getItem('UnidadV_5') === 'yes') {
            countV++;
        }
        if (localStorage.getItem('UnidadV_6') === 'yes') {
            countV++;
        }
        if (localStorage.getItem('UnidadV_7') === 'yes') {
            countV++;
        }
        if (localStorage.getItem('UnidadV_8') === 'yes') {
            countV++;
        }
        if (localStorage.getItem('UnidadV_9') === 'yes') {
            countV++;
        }
        if (localStorage.getItem('UnidadV_10') === 'yes') {
            countV++;
        }
        if (localStorage.getItem('UnidadV_11') === 'yes') {
            countV++;
        }
        if (localStorage.getItem('UnidadV_12') === 'yes') {
            countV++;
        }
        if (localStorage.getItem('UnidadV_13') === 'yes') {
            countV++;
        }
        setCounterV(countV);
    }, []);
    const percentageV = parseFloat(((counterV / totalPagesV) * 100).toFixed(2));

    

    return (
        <>
            <Transition
                mounted={isMounted}
                transition="scale-y"
                duration={500}
                timingFunction="ease"
            >
                {(styles) => <div style={styles}>
                    <Paper shadow="xl" mt="30" p="lg" h="auto" w="85%" mx="auto" radius="md" withBorder className={classes.card}>
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
                            Libros de estudio
                        </Text>
                        <Text c="dimmed" ta="center" fz="sm">
                            Progreso de las Unidades de estudio
                        </Text>


                        {/* UNIDAD I */}
                        <Group justify="space-between" mt="xs">
                            <Text fz="sm">
                                Unidad I
                            </Text>
                            <Text fz="sm" c="dimmed">
                                Progress
                            </Text>
                            <Text fz="sm" c="dimmed">
                                {percentageI}%
                            </Text>
                        </Group>
                        <Progress value={percentageI} mt={5} /> {/* Esto tiene que ser una variable dinamica que se conecte con el backend */}
                        <Group justify="space-between" mt="md">
                            <Text fz="sm"></Text>
                            <Badge size="lg">{counterI} / 1 </Badge>
                        </Group>


                        {/* UNIDAD II */}
                        <Group justify="space-between" mt="xs">
                            <Text fz="sm">
                                Unidad II
                            </Text>
                            <Text fz="sm" c="dimmed">
                                Progress
                            </Text>
                            <Text fz="sm" c="dimmed">
                                {percentageII}%
                            </Text>
                        </Group>
                        <Progress value={percentageII} mt={5} /> {/* Esto tiene que ser una variable dinamica que se conecte con el backend */}
                        <Group justify="space-between" mt="md">
                            <Text fz="sm"></Text>
                            <Badge size="lg">{counterII} / 2 </Badge>
                        </Group>


                        {/* UNIDAD III */}
                        <Group justify="space-between" mt="xs">
                            <Text fz="sm">
                                Unidad III
                            </Text>
                            <Text fz="sm" c="dimmed">
                                Progress
                            </Text>
                            <Text fz="sm" c="dimmed">
                                {percentageIII}%
                            </Text>
                        </Group>
                        <Progress value={percentageIII} mt={5} /> {/* Esto tiene que ser una variable dinamica que se conecte con el backend */}
                        <Group justify="space-between" mt="md">
                            <Text fz="sm"></Text>
                            <Badge size="lg">{counterIII} / 8 </Badge>
                        </Group>



                        {/* UNIDAD IV */}
                        <Group justify="space-between" mt="xs">
                            <Text fz="sm">
                                Unidad IV
                            </Text>
                            <Text fz="sm" c="dimmed">
                                Progress
                            </Text>
                            <Text fz="sm" c="dimmed">
                                {percentageIV}%
                            </Text>
                        </Group>
                        <Progress value={percentageIV} mt={5} /> {/* Esto tiene que ser una variable dinamica que se conecte con el backend */}
                        <Group justify="space-between" mt="md">
                            <Text fz="sm"></Text>
                            <Badge size="lg">{counterIV} / 4 </Badge>
                        </Group>


                        {/* UNIDAD V */}
                        <Group justify="space-between" mt="xs">
                            <Text fz="sm">
                                Unidad V
                            </Text>
                            <Text fz="sm" c="dimmed">
                                Progress
                            </Text>
                            <Text fz="sm" c="dimmed">
                                {percentageV}%
                            </Text>
                        </Group>
                        <Progress value={percentageV} mt={5} /> {/* Esto tiene que ser una variable dinamica que se conecte con el backend */}
                        <Group justify="space-between" mt="md">
                            <Text fz="sm"></Text>
                            <Badge size="lg">{counterV} / 13 </Badge>
                        </Group>
                    </Paper>
                    <Paper mt="90" p="lg" h="auto" w="85%" mx="auto" radius="md" withBorder> </Paper></div>}
            </Transition>
        </>
    );
}

export default Estadistica;