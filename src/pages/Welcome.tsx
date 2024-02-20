import Navbar from '../components/Navbar/navbar';
import { Container, Title, Text, Button } from '@mantine/core';
import classes from '../assets/css/HeroImageRight.module.css';
import { Link } from 'react-router-dom';


function Welcome() {

    return (
        <>
            <Navbar />
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
                                    
                                    Estudio Vial de <Text
                                        component="span"
                                        inherit
                                        color='Yellow'
                                    >
                                        Ven
                                    </Text>
                                    <Text
                                        component="span"
                                        inherit
                                        color='blue'
                                    >
                                        ezu
                                    </Text>
                                    <Text
                                        component="span"
                                        inherit
                                        color='red'
                                    >
                                        ela
                                    </Text>
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
                                        gradient={{ from: 'pink', to: 'yellow' }}
                                        size="xl"
                                        className={classes.control}
                                        style={{ position: 'absolute',bottom: '0'}}
                                        mb="20%"

                                    >
                                        Empezar
                                    </Button>
                                </Link>

                                <Text className={classes.descriptionfinal}  mb="lg" color='white' style={{ position: 'absolute',bottom: '0'}} >
                                    Todos los derechos reservados © 2023-2024
                                </Text>
                            </div>
                        </div>
                    </Container>
                </div>
        </>
    )
}

export default Welcome;