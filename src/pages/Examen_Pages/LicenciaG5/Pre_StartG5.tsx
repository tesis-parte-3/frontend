import { useEffect, useState } from 'react';
import { Transition, Paper, Text, List, Button, rem, ThemeIcon, Divider, Code } from '@mantine/core';
import { IconAward } from '@tabler/icons-react';
import { Link } from 'react-router-dom';




function Pre_StartG5() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <Transition
                mounted={isMounted}
                transition="fade"
                duration={500}
                timingFunction="ease"
            >{(styles) => <div style={styles}>
                <Paper withBorder m="5%" px={20}>
                    <Text fw={700} ta="center" variant="gradient" size="2.5rem"
                        my={15}

                        gradient={{ from: 'red', to: 'orange', deg: 90 }}>Advertencias y precauciones</Text>
                    <Text ta="center" mb={15}> Usted esta apunto de empezar un examen de <Code color="var(--mantine-color-blue-light)">
                        Grado 5
                    </Code> lea con precaucion las reglas y modo evaluativa definidas a continuacion:</Text>                    <List spacing='sx' icon={
                        <ThemeIcon color="cyan" size={24} radius="xl">
                            <IconAward style={{ width: rem(16), height: rem(16) }} />
                        </ThemeIcon>}>
                        <List.Item>El examen no tendra tiempo definido pero entre cada pregunta tendra 20 segundos.</List.Item>
                        <Divider my="xs" variant="dashed"></Divider>
                        <List.Item>Una vez empezado el examen, si abandona contara como reprobado!.</List.Item>
                        <Divider my="xs" variant="dashed"></Divider>
                        <List.Item>El sistema de evaluacion es base a 20.</List.Item>
                        <Divider my="xs" variant="dashed"></Divider>
                        <List.Item>A final del examen, podra ver sus resultados.</List.Item>
                        <Divider my="xs" variant="dashed"></Divider>
                        <List.Item>El examen contara con 40 preguntas de seleccion multiple o seleccion comun, tanto con imagenes y solo texto.</List.Item>
                    </List>
                    <Text ta="center" mt="lg" fw={700}>Nuestro sistema de evaluacion es una funcion importante de nuestra app, asi que tome con seriedad y sinceridad el examen.</Text>
                    <Link to="/Examen/LicenciaG5">
                        <Button fullWidth variant="gradient" gradient={{ from: 'cyan', to: 'blue', deg: 60 }} size="lg" my={20}>
                            Empezar examen
                        </Button>
                    </Link>

                    <Text ta="center" my={30} fw={100} c="dimmed">Derechos reservados © QuizDrive 2024</Text>
                </Paper>
            </div>
                }
            </Transition >
        </>
    )
}

export default Pre_StartG5;