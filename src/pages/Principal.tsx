import UserInfoAction from "../components/Userinfo.init/UserInfoAction";
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
    Card,
    Image,
    Text,
    ActionIcon,
    Badge,
    Group,
    Center,
    Divider,
    useMantineTheme,
    rem,
    Title,
    SimpleGrid,
    Container,
    Paper,
    Button,
    Accordion,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { Transition } from '@mantine/core';
import classes from '../assets/css/ArticleCard.module.css';
import classes1 from '../assets/css/FeaturesCards.module.css'
import classes2 from '../assets/css/info.module.css'
import { Book, Flame } from 'tabler-icons-react';
import { IconVocabulary, IconReportSearch, IconProgress } from '@tabler/icons-react';
import { Affix } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowDown } from '@tabler/icons-react';
import { IconHeartFilled } from '@tabler/icons-react';

const placeholder1 =
    'Licencia para Conducir Motocicletas de cualquier cilindrada: segundo (2°) Grado.';
const placeholder2 =
    'Licencias para Conducir Vehículos: (hasta 9 puestos) tercer (3°) Grado. ';
const placeholder3 =
    'Licencias para Conducir Vehículos: para Transporte Público/Vehículos de Carga que no exceda a los nueve mil kilogramos (9.000 kg) Quinto Grado (5°).';

const mockdata = [
    {
        title: 'Conocimientos significativos',
        description:
            'Logramos integrar un programa de estudio con los conocimientos necesarios para aprender a conducir de manera segura.',
        icon: IconVocabulary
        ,
    },
    {
        title: 'Evaluacion continua',
        description:
            'Incluso creamos un sistema Quiz donde puedes evaluar tus conocimientos de manera eficaz.',
        icon: IconReportSearch,
    },
    {
        title: 'Seguimiento de progreso',
        description:
            'Podras ver tu progreso en tiempo real, y saber que tan bien estas aprendiendo.',
        icon: IconProgress
        ,
    },
];

function Principal() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const linkProps = { href: '/Examen', rel: 'noopener noreferrer' };
    const theme = useMantineTheme();
    const [scroll, scrollTo] = useWindowScroll();

    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes1.card} padding="xl">
            <feature.icon
                style={{ width: rem(50), height: rem(50) }}
                stroke={2}
                color={theme.colors.blue[6]}
            />
            <Text fz="lg" fw={500} className={classes1.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ));
    const [selected1p, setSelected1p] = useState(() => {
        const storedSelected1p = localStorage.getItem('heartSelected1P');
        return storedSelected1p ? JSON.parse(storedSelected1p) : false;
    });

    useEffect(() => {
        localStorage.setItem('heartSelected1P', JSON.stringify(selected1p));
    }, [selected1p]);
    const handleClick1 = () => {
        setSelected1p(!selected1p);
    };


    return (
        <>
            <UserInfoAction />
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
            <Transition
                mounted={isMounted}
                transition="slide-up"
                duration={300}
                timingFunction="ease"
            >
                {(styles) => <div style={styles}>
                    <Divider my="md" label={<Flame size={25} strokeWidth={2} color={'#bf4740'}></Flame>} labelPosition="center" ml="xl" mr="xl" />
                    <Card withBorder radius="md" className={classes.card} m="lg" shadow="xl">
                        <Card.Section>
                            <a {...linkProps}>
                                <Image src="https://www.lavanguardia.com/files/image_449_220/uploads/2020/07/08/5f15f56e375ec.jpeg" height={180} />
                            </a>
                        </Card.Section>

                        <Badge size="lg" className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
                            destacado
                        </Badge>

                        <Text mt="xs" className={classes.title} fw={500} component="a" {...linkProps}>
                            Examen de Licencia Grado 3
                        </Text>

                        <Text mt="xs" fz="sm" c="dimmed" lineClamp={4}>
                            Usa nuestra novedosa herramienta para hacer examenes de licencia de conducir en el grado mas comun para ciudadanos.
                        </Text>

                        <Group justify="space-between" className={classes.footer}>
                            <Center>

                                <Text fz="sm" inline>
                                    QuizDrive - Estudio Vial
                                </Text>
                            </Center>

                            <Group gap={8} mr={0}>
                                <ActionIcon variant="default" radius="md" size={36} onClick={handleClick1}>
                                    {selected1p ? <IconHeartFilled className={classes1.like} /> : <IconHeart className={classes1.like} />}
                                </ActionIcon>

                            </Group>
                        </Group>
                    </Card>
                    <Divider my="md" label={<Book></Book>} labelPosition="center" ml="lg" mr="lg" />

                    <Container size="lg">
                        <Group justify="center">
                            <Badge variant="filled" size="lg">
                                Estudios Disponibles
                            </Badge>
                        </Group>

                        <Title order={2} className={classes1.title} ta="center" mt="sm">
                            Centrado en 3 tipos de licencias para aprender o fortalecer tus conocimientos.
                        </Title>

                        <Text c="dimmed" className={classes1.description} ta="center" mt="md">
                            Aprende o fortalece tus conocimientos en las leyes de transito y seguridad vial, con nuestra herramienta de estudio de licencias de conducir.
                        </Text>
                        <Container size="sm">

                            <Accordion mt="lg" variant="separated">
                                <Accordion.Item className={classes2.item} value="reset-password">
                                    <Accordion.Control>Licencia Grado 2</Accordion.Control>
                                    <Accordion.Panel>{placeholder1}</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item className={classes2.item} value="another-account">
                                    <Accordion.Control>Licencia Grado 3</Accordion.Control>
                                    <Accordion.Panel>{placeholder2}</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item className={classes2.item} value="newsletter">
                                    <Accordion.Control>Licencia Grado 5</Accordion.Control>
                                    <Accordion.Panel>{placeholder3}</Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                        </Container>

                        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={20}>
                            {features}
                        </SimpleGrid>
                    </Container>


                    <Paper mt="90" p="lg" h="auto" w="85%" mx="auto" radius="md" withBorder> </Paper>

                </div>}
            </Transition>
        </>
    )
}

export default Principal;