import { useEffect, useState } from 'react';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, Paper, Affix, Transition, rem } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Examen_Pages/BadgeCard.module.css';
import { IconArrowDown } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import UserInfoAction from "../components/Userinfo.init/UserInfoAction_admin";


function Admin() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
        <UserInfoAction/>
        <Transition
                mounted={isMounted}
                transition="fade"
                duration={300}
                timingFunction="ease"
            >
                {(styles) => <div style={styles}>
            <Paper>
                <Text>Hola</Text>
            </Paper>
            </div>}
            </Transition>
        </>
    )
}

export default Admin;

