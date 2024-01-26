import Demo from "../function/modetheme/Demo";
import { Paper, Divider, Text, Button, rem, Transition, Modal, TextInput, PasswordInput, Group, Anchor } from '@mantine/core';
import classes from '../components/Graficos/StatsCard.module.css';
import UploadProfile from "../components/Userinfo.init/UploadProfile";
import IconsProfile from '../components/Userinfo.init/UserInfoIcons';
import { IconAt } from '@tabler/icons-react';
import { useEffect, useState } from 'react';





function Ajustes() {
    // Esto es para la animacion de la pagina
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    // Variables para modals para abrirlos y cerrarlos
    const [ModalName, setModalName] = useState(false);
    const [ModalPassword, setModalPassword] = useState(false);
    const [ModalEmail, setModalEmail] = useState(false);
    const [ModalTelefono, setModalTelefono] = useState(false);





    return (
        <>
            <Transition
                mounted={isMounted}
                transition="fade"
                duration={300}
                timingFunction="ease"
            >
                {(styles) => <div style={styles}><div>
                    <Text size="30px" fw={500} ta="center" mt="sm"> Ajustes </Text>
                </div>

                    <Paper mt="30" p="lg" h="auto" w="85%" mx="auto" radius="md" shadow="xl" withBorder className={classes.card}>
                        <IconsProfile />
                    </Paper>

                    <Paper /* minHeight: '100vh'  */ mt="30" p="lg" h="auto" w="85%" mx="auto" radius="md" shadow="xl" withBorder className={classes.card}>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text> Modo oscuro/claro </Text> <Demo />
                        </div>
                        <Divider my="md" />

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text> Nombre </Text> <Button variant="light" onClick={() => setModalName(true)} >Cambiar</Button>
                        </div>
                        <Divider my="md" />

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text> Contraseña </Text> <Button variant="light" onClick={() => setModalPassword(true)} >Cambiar</Button>
                        </div>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text> Foto Perfil </Text> <UploadProfile />
                        </div>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text> Email </Text> <Button leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} onClick={() => setModalEmail(true)}>Email</Button>
                        </div>
                        <Divider my="md" />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text> Agregar Numero Telefonico </Text> <Button variant="default" onClick={() => setModalTelefono(true)}>Agregar</Button>
                        </div>
                    </Paper>
                    
                </div>}
            </Transition>


            {/* Modales de ajustes */}


            {/* Modal cambio de nombre */}
            <Modal opened={ModalName} onClose={() => setModalName(false)} title="">
                <Text size="30px" fw={500} ta="center" mb="xl"> Cambiar nombre </Text>
                <Paper radius="md" mb="xl" p="lg" withBorder h="auto" w="85%" mx="auto">

                    <form>
                        <TextInput
                            required
                            label="Nombre"
                            placeholder="Tu Nombre"
                            error=""
                            radius="md"

                        />

                        <Group justify="space-between" mt="lg">
                            <Anchor component="button" type="button" c="dimmed" size="xs">
                                Cambiar nombre
                            </Anchor>
                            <Button type="submit" radius="xl" >
                                Confirmar
                            </Button>
                        </Group>
                    </form>
                </Paper>
            </Modal>



            {/* Modal cambio de contraseña */}
            <Modal opened={ModalPassword} onClose={() => setModalPassword(false)} title="">
                <Text size="30px" fw={500} ta="center" mb="xl"> Cambiar contraseña </Text>
                <Paper radius="md" mb="xl" p="lg" withBorder h="auto" w="85%" mx="auto">

                    <form >
                        <PasswordInput
                            required
                            label="contraseña Actual"
                            placeholder="contraseña Actual"
                            error=""
                            radius="md"
                        />
                        <PasswordInput
                            required
                            label="Nueva contraseña"
                            placeholder="Nueva contraseña"
                            error=""
                            radius="md"

                            mt="lg"
                        />

                        <Group justify="space-between" mt="lg">
                            <Anchor component="button" type="button" c="dimmed" size="xs">
                                Cambiar contraseña
                            </Anchor>
                            <Button type="submit" radius="xl" >
                                Confirmar
                            </Button>
                        </Group>
                    </form>
                </Paper>
            </Modal>

            {/* Modal de cambio de email */}

            <Modal opened={ModalEmail} onClose={() => setModalEmail(false)} title="">
                <Text size="30px" fw={500} ta="center" mb="xl"> Cambiar Email </Text>
                <Paper radius="md" mb="xl" p="lg" withBorder h="auto" w="85%" mx="auto">

                    <form >
                        <TextInput
                            required
                            label="Email"
                            placeholder="Email@urbe.edu.ve"
                            error=""
                            radius="md"
                            leftSection={<IconAt size={16} />}

                        />

                        <Group justify="space-between" mt="lg">
                            <Anchor component="button" type="button" c="dimmed" size="xs">
                                Cambiar email
                            </Anchor>
                            <Button type="submit" radius="xl" >
                                Confirmar
                            </Button>
                        </Group>
                    </form>
                </Paper>
            </Modal>

            {/* Agregar numero telefonico. */}
            <Modal opened={ModalTelefono} onClose={() => setModalTelefono(false)} title="">
                <Text size="30px" fw={500} ta="center" mb="xl">Agregar Numero</Text>
                <Text size="30px" fw={500} ta="center" mb="xl">Telefonico</Text>
                <Paper radius="md" mb="xl" p="lg" withBorder h="auto" w="85%" mx="auto">

                    <form >
                        <TextInput
                            required
                            label="Numero telefonico"
                            placeholder="+0 (000) 123 45 67"
                            error=""
                            radius="md"
                        />
                        <Group justify="space-between" mt="lg">
                            <Anchor component="button" type="button" c="dimmed" size="xs">
                                Agregar Numero
                            </Anchor>
                            <Button type="submit" radius="xl" >
                                Confirmar
                            </Button>
                        </Group>
                    </form>
                </Paper>
            </Modal>

        </>

    )
}

export default Ajustes;