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
                                A{' '}
                                <Text
                                    component="span"
                                    inherit
                                    variant="gradient"
                                    gradient={{ from: 'pink', to: 'yellow' }}
                                >
                                    fully featured
                                </Text>{' '}
                                React components library
                            </Title>

                            <Text className={classes.description} mt={30}>
                                Build fully functional accessible web applications with ease – Mantine includes more
                                than 100 customizable components and hooks to cover you in any situation
                            </Text>
                            <Text className={classes.description} mt={30}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, illo. Sunt eaque maiores totam, quaerat temporibus reprehenderit nihil, quae quo maxime aliquid tempore. Quis in explicabo doloribus alias nobis eos.
                            </Text>
                            <Link to="/login"> 
                            <Button
                                variant="gradient"
                                gradient={{ from: 'pink', to: 'yellow' }}
                                size="xl"
                                className={classes.control}
                                mt={40}
                                
                            >
                                Get started
                            </Button>
                            </Link>
                            
                            <Text className={classes.descriptionfinal} mt={190}>
                            All rights reserved © 2023-2024 
                            </Text>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Welcome;