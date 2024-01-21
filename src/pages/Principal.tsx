import UserInfoAction from "../components/Userinfo.init/UserInfoAction";
import { Container, Title, Accordion } from '@mantine/core';
import classes from '../assets/css/info.module.css';


const placeholder =
        'principal menu'

function Principal() {
    
    return (
        <>
        <UserInfoAction />
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
        </>
    )
}

export default Principal;