import { useEffect, useState } from 'react';
import { Transition } from '@mantine/core';
import { Paper, Text, Title, Button } from '@mantine/core';
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
                    <Paper shadow="md" p="xl" radius="md" className={classes.card} m="lg">
                        <div>
                            <Text className={classes.category} size="xs" mb="lg" fw={700}>
                                Autor Prof. Magally Velázquez
                            </Text>
                            <Title order={3} className={classes.title}>
                                Libro Diccionario vial
                            </Title>
                        </div>
                        <Link to="/LibroDiccionarioVial">
                            <Button variant="filled" color="orange" mt="25%">
                                Leer libro
                            </Button>
                        </Link>
                    </Paper>
                    
                </div>}
            </Transition>
        </>
    )
}

export default Estudios;