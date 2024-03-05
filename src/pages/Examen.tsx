import { useEffect, useState } from 'react';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, Paper, Affix, Transition, rem } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Examen_Pages/BadgeCard.module.css';
import { IconArrowDown } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';

const mockdata = {
    imageg3:
        'https://images.netdirector.co.uk/gforces-auto/image/upload/w_600,h_450,q_auto,c_fill,f_auto,fl_lossy/auto-client/af63a702cf7ae2dfe4c6d0c78a691c26/toyota_gr_yaris_038_2_scaled_1.jpg',
    titleg3: 'Licencia Grado 3',
    countryg3: 'Vehiculos',
    descriptiong3:
        'Proceso mediante el cual se presenta Examen teórico Licencias para Conducir Vehículos: (hasta 9 puestos) tercer (3°) Grado. Personas mayores de 18 años.',
    imageg2:
        'https://i.pinimg.com/736x/68/62/38/6862387e9c2496183a4da90a9efa6edf.jpg',
    titleg2: 'Licencia Grado 2',
    countryg2: 'Motocicletas',
    descriptiong2:
        'Proceso mediante el cual se presenta Examen teórico Licencias para Conducir Motocicletas de cualquier cilindrada: segundo (2°) Grado.',
    imageg5:
        'https://www.grupocarino.com/wp-content/uploads/2015/01/asistencia-gruas-granada.jpg',
    titleg5: 'Licencia Grado 5',
    countryg5: 'Transporte Publico/Vehiculos de carga',
    descriptiong5:
        'Proceso mediante el cual se presenta Examen teórico Licencias para Conducir Transporte Público/Vehículos de Carga que no exceda a los nueve mil kilogramos (9.000 kg) Quinto Grado (5°).',
};

function Examen() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const { imageg3, titleg3, descriptiong3, countryg3 } = mockdata;
    const { imageg2, titleg2, descriptiong2, countryg2 } = mockdata;
    const { imageg5, titleg5, descriptiong5, countryg5 } = mockdata;




    //Estas son las funciones para guardar el estado del corazon y como son 3 corazones no logre hacerlo con un solo estado. Bueno tampoco voy a matar mucho tiempo asi.
    //Corazon 1
    const [selected1, setSelected1] = useState(() => {
        const storedSelected1 = localStorage.getItem('heartSelected1');
        return storedSelected1 ? JSON.parse(storedSelected1) : false;
    });

    useEffect(() => {
        localStorage.setItem('heartSelected1', JSON.stringify(selected1));
    }, [selected1]);
    const handleClick1 = () => {
        setSelected1(!selected1);
    };

    //Corazon 2
    const [selected2, setSelected2] = useState(() => {
        const storedSelected2 = localStorage.getItem('heartSelected2');
        return storedSelected2 ? JSON.parse(storedSelected2) : false;
    });

    useEffect(() => {
        localStorage.setItem('heartSelected2', JSON.stringify(selected2));
    }, [selected2]);
    const handleClick2 = () => {
        setSelected2(!selected2);
    };

        //Corazon 3
    const [selected3, setSelected3] = useState(() => {
        const storedSelected3 = localStorage.getItem('heartSelected3');
        return storedSelected3 ? JSON.parse(storedSelected3) : false;
    });

    useEffect(() => {
        localStorage.setItem('heartSelected3', JSON.stringify(selected3));
    }, [selected3]);
    const handleClick3 = () => {
        setSelected3(!selected3);
    };
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
                <Text ta="center"></Text>
                    <Affix position={{ bottom: "20%", right: -20 }}>
                        <Transition transition="slide-up" mounted={scroll.y < 100}>
                            {(transitionStyles) => (
                                <Button
                                    leftSection={<IconArrowDown style={{ width: rem(16), height: rem(16) }} />}
                                    style={transitionStyles}
                                    onClick={() => scrollTo({ y: 2000 })}
                                    color='cyan'
                                >
                                </Button>
                            )}
                        </Transition>
                    </Affix>
                    <Card withBorder mx="xl" mt="lg" radius="md" p="md" className={classes.card}>
                        <Card.Section>
                            <Image src={imageg3} alt={titleg3} height={180} />
                        </Card.Section>

                        <Card.Section className={classes.section} mt="md">
                            <Group justify="apart">
                                <Text fz="lg" fw={500} pl="lg" pr="lg">
                                    {titleg3}
                                </Text>
                                <Badge size="sm" variant="light">
                                    {countryg3}
                                </Badge>
                            </Group>
                            <Text fz="sm" mt="xs" pl="lg" pr="lg">
                                {descriptiong3}
                            </Text>
                        </Card.Section>


                        <Group mt="xs">
                            <Link to="/Examen/LicenciaG3">
                                <Button radius="md" style={{ flex: 1 }}>
                                    Empezar
                                </Button>
                            </Link>
                            <ActionIcon variant="default" radius="md" size={36} onClick={handleClick1}>
                                {selected1 ? <IconHeartFilled className={classes.like} /> : <IconHeart className={classes.like} />}
                            </ActionIcon>
                        </Group>
                    </Card>
                </div>}
            </Transition>
            <Transition
                mounted={isMounted}
                transition="scale-x"
                duration={500}
                timingFunction="ease"
            >
                {(styles) => <div style={styles}>
                    <Card withBorder mx="xl" mt="lg" radius="md" p="md" className={classes.card}>
                        <Card.Section>
                            <Image src={imageg2} alt={titleg2} height={180} />
                        </Card.Section>

                        <Card.Section className={classes.section} mt="md">
                            <Group justify="apart">
                                <Text fz="lg" fw={500} pl="lg" pr="lg">
                                    {titleg2}
                                </Text>
                                <Badge size="sm" variant="light" ml="lg" mr="lg">
                                    {countryg2}
                                </Badge>
                            </Group>
                            <Text fz="sm" mt="xs" pl="lg" pr="lg">
                                {descriptiong2}
                            </Text>
                        </Card.Section>


                        <Group mt="xs">
                            <Link to="/Examen/LicenciaG2">
                                <Button radius="md" style={{ flex: 1 }}>
                                    Empezar
                                </Button>
                            </Link>
                            <ActionIcon variant="default" radius="md" size={36} onClick={handleClick2}>
                                {selected2 ? <IconHeartFilled className={classes.like} /> : <IconHeart className={classes.like} />}
                            </ActionIcon>
                        </Group>
                    </Card>
                </div>}
            </Transition>
            <Transition
                mounted={isMounted}
                transition="fade"
                duration={500}
                timingFunction="ease"
            >
                {(styles) => <div style={styles}>
                    <Card withBorder mx="xl" mt="lg" radius="md" p="md" className={classes.card}>
                        <Card.Section>
                            <Image src={imageg5} alt={titleg5} height={180} />
                        </Card.Section>

                        <Card.Section className={classes.section} mt="md">
                            <Group justify="apart">
                                <Text fz="lg" fw={500} pl="lg" pr="lg"  >
                                    {titleg5}
                                </Text>
                                <Badge size="sm" variant="light" ml="lg" mr="lg">
                                    {countryg5}
                                </Badge>
                            </Group>
                            <Text fz="sm" mt="xs" pl="lg" pr="lg">
                                {descriptiong5}
                            </Text>
                        </Card.Section>


                        <Group mt="xs">
                            <Link to="/Examen/LicenciaG5">
                                <Button radius="md" style={{ flex: 1 }}>
                                    Empezar
                                </Button>
                            </Link>
                            <ActionIcon variant="default" radius="md" size={36} onClick={handleClick3}>
                                {selected3 ? <IconHeartFilled className={classes.like} /> : <IconHeart className={classes.like} />}
                            </ActionIcon>
                        </Group>
                    </Card>
                    <Paper mt="90" p="lg" h="auto" w="85%" mx="auto" radius="md" withBorder> </Paper>
                </div>}
            </Transition>
        </>
    )
}

export default Examen;

