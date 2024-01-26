import UserInfoAction from "../components/Userinfo.init/UserInfoAction";
import { Container, Title, Accordion } from '@mantine/core';
import classes from '../assets/css/info.module.css';
import { useEffect, useState } from 'react';
import { Transition } from '@mantine/core';


const placeholder =
    'principal menu'

function Principal() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <UserInfoAction />

            <Transition
                mounted={isMounted}
                transition="fade"
                duration={300}
                timingFunction="ease"
            >
                {(styles) => <div style={styles}>
                    <Container mt="70" size="sm" className={classes.wrapper}>
                        <Title ta="center" className={classes.title}>
                            Principal page
                        </Title>

                        <Accordion variant="separated">
                            <Accordion.Item className={classes.item} value="reset-password">
                                <Accordion.Control>Menu principal</Accordion.Control>
                                <Accordion.Panel>{placeholder}</Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Container>

                </div>}
            </Transition>
        </>
    )
}

export default Principal;