import { Container, Title, Accordion } from '@mantine/core';
import classes from '../assets/css/info.module.css';
import Navbar from '../components/Navbar/navbar';

const placeholder =
    'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';
const pregunta2 =
    'Hola a todos guapisimos'


function Info() {
    return (
        <>
        <Navbar />
        <Container mt="70" size="sm" className={classes.wrapper}>
            <Title ta="center" className={classes.title}>
                Preguntas frecuentes
            </Title>

            <Accordion variant="separated">
                <Accordion.Item className={classes.item} value="reset-password">
                    <Accordion.Control>How can I reset my password?</Accordion.Control>
                    <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="another-account">
                    <Accordion.Control>Can I create more that one account?</Accordion.Control>
                    <Accordion.Panel>{pregunta2}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="newsletter">
                    <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
                    <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="credit-card">
                    <Accordion.Control>Do you store credit card information securely?</Accordion.Control>
                    <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="payment">
                    <Accordion.Control>What payment systems to you work with?</Accordion.Control>
                    <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </Container>
        </>
    );
}

export default Info;