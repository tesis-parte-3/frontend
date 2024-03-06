import Navbar from '../components/Navbar/navbar';
import { Container, Title, Text, Button, Transition } from '@mantine/core';
import classes from '../assets/css/HeroImageRight.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Welcome() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    return (
        <>
            <Navbar />
            <Transition
                mounted={isMounted}
                transition="scale-y"
                duration={300}
                timingFunction="ease"
            >
                {(styles) => <div style={styles}>
                    <div className={classes.root}>
                        <Container size="lg">
                            <div className={classes.inner}>
                                <div className={classes.content}>
                                    <Title className={classes.title}>
                                        Unete a{' '}
                                        <Text
                                            component="span"
                                            inherit
                                            variant="gradient"
                                            gradient={{ from: 'Cyan', to: 'grey' }}
                                        >
                                            QuizDrive
                                        </Text>{' '}

                                        Estudio Vial de Venezuela

                                    </Title>

                                    <Text className={classes.description} mt={30} color='white'>
                                        - Aquí encontrarás todo lo que necesitas para convertirte en un conductor seguro y confiado. Nuestra plataforma te ofrece lecciones interactivas, simulacros de exámenes realistas y recursos educativos que te guiarán paso a paso en tu viaje hacia la obtención de tu licencia de conducir.
                                    </Text>
                                    <Text className={classes.description} mt={30} color='white'>
                                        Además, en nuestra seguir tu progreso, te aseguramos que adquirirás los conocimientos necesarios de manera eficiente. ¡No solo aprenderás a manejar, sino también a comprender a fondo las normas de tráfico y a tomar decisiones seguras en situaciones diversas!.
                                    </Text>
                                    <Link to="/login">
                                        <Button
                                            variant="gradient"
                                            gradient={{ from: 'Blue', to: 'Cyan' }}
                                            size="xl"
                                            className={classes.control}
                                            style={{ position: 'absolute', bottom: '0' }}
                                            mb="20%"

                                        >
                                            Empezar
                                        </Button>
                                    </Link>

                                    <Text className={classes.descriptionfinal} mb="lg" color='white' style={{ position: 'absolute', bottom: '0' }} >
                                        Todos los derechos reservados © 2023-2024
                                    </Text>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>}
            </Transition>
        </>
    )
}

export default Welcome;