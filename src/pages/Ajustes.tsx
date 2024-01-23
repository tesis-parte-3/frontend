import Demo from "../function/modetheme/Demo";
import { Paper, Divider, Text, Button, rem } from '@mantine/core';
import classes from '../components/Graficos/StatsCard.module.css';
import UploadProfile from "../components/Userinfo.init/UploadProfile";
import IconsProfile from '../components/Userinfo.init/UserInfoIcons'
import { IconAt } from '@tabler/icons-react';

function Ajustes() {

    return (
        <>
            <div> 
            <Text size="30px" fw={500} ta="center" mt="sm"> Ajustes </Text>
            </div>
            
            <Paper mt="30" p="lg" h="auto" w="85%" mx="auto" radius="md" shadow="xl" withBorder className={classes.card}>
            <IconsProfile/>
            </Paper>

            <Paper /* minHeight: '100vh'  */ mt="30" p="lg" h="auto" w="85%" mx="auto" radius="md" shadow="xl" withBorder className={classes.card}>
                
                <div style={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text> Modo oscuro/claro </Text> <Demo />
                </div>
                <Divider my="md" />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text> Nombre </Text> <Button variant="light">Cambiar</Button>
                </div>
                <Divider my="md" />
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text> Contraseña </Text> <Button variant="light">Cambiar</Button>
                </div>
                <Divider my="md" />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text> Foto Perfil </Text> <UploadProfile/>
                </div>
                <Divider my="md" />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text> Email </Text> <Button leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}>Email</Button>
                </div>
                <Divider my="md" />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text> Agregar Numero Telefonico </Text> <Button variant="default">Agregar</Button>
                </div>
            </Paper>
            <Paper mt="100" p="lg" h="auto" w="85%" mx="auto" radius="md" withBorder> </Paper>
        </>

    )
}

export default Ajustes;