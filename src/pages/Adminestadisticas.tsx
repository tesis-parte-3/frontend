import { useEffect, useState } from 'react';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, Paper, Affix, Transition, rem } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Examen_Pages/BadgeCard.module.css';
import { IconArrowDown } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';



function Adminestadisticas() {
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
            <Paper>
                <Text>hola estadisticas asd</Text>
            </Paper>
            </div>}
            </Transition>
            
        </>
    )
}

export default Adminestadisticas;

