import { useEffect, useState } from 'react';
import { Transition } from '@mantine/core';
import { Card, Overlay, Button, Text } from '@mantine/core';
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
                    <Card m="xl" radius="md" className={classes.carta}>
                        <Overlay className={classes.superoverlay} opacity={0.55} zIndex={0} />

                        <div className={classes.contenido}>
                            <Text size="lg" fw={700} className={classes.titulo}>
                                Plan & save
                            </Text>

                            <Text size="sm" className={classes.descripcion}>
                                Save up to 25% at Fifth Season Hotels in Europe, the Middle East, Africa and Asia Pacific
                            </Text>

                            <Button className={classes.accion} variant="white" color="dark" size="xs" style={{position: "absolute"}}>
                                Book now
                            </Button>
                        </div>
                    </Card>
                </div>}
            </Transition>
        </>
    )
}

export default Estudios;