import { Container, Title, Accordion } from '@mantine/core';
import classes from '../assets/css/info.module.css';
const placeholder =
    'tuki';



function Estadistica() {

    return (
                <Container mt="70" size="sm" className={classes.wrapper}>
            <Title ta="center" className={classes.title}>
                Preguntas frecuentes
            </Title>

            <Accordion variant="separated">
                <Accordion.Item className={classes.item} value="reset-password">
                    <Accordion.Control>page estadisticas</Accordion.Control>
                    <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

export default Estadistica;