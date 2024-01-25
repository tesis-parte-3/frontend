import { Title, Text, Button, Container, Group } from '@mantine/core';
import classes from '../assets/css/NotFoundTitle.module.css';
import { Link } from 'react-router-dom';

function ErrorPage() {

    return (
        <>
            <Container className={classes.root}>
                <div className={classes.label}>404</div>
                <Title className={classes.title}>Has encontrado un lugar secreto.</Title>
                <Text c="dimmed" size="lg" ta="center" className={classes.description}>
                    Lamentablemente, esta es sólo una página 404. Es posible que haya escrito mal la dirección o que la página tenga
                    sido movido a otra URL.
                </Text>
                <Group justify="center">
                    <Link to="/">
                        <Button variant="subtle" size="md">
                            Llévame de regreso a la página de inicio
                        </Button></Link>
                </Group>
            </Container>
        </>
    )
}

export default ErrorPage;