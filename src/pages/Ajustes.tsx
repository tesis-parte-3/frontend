import Backmenu from '../components/Userinfo.init/backmenu';
import { Container, Title, Accordion } from '@mantine/core';
import classes from '../assets/css/info.module.css';


const placeholder =
        'ajustes jijija'




function Ajustes() {

    return (
        <>
        <Backmenu />
                <Container mt="70" size="sm" className={classes.wrapper}>
            <Title ta="center" className={classes.title}>
                Preguntas frecuentes
            </Title>

            <Accordion variant="separated">
                <Accordion.Item className={classes.item} value="reset-password">
                    <Accordion.Control>page ajustes</Accordion.Control>
                    <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </Container>
        </>
        
    )
}

export default Ajustes;