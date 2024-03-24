import { Avatar, Text, Group } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import classes from './UserInfoIcons.module.css';
import { useState } from 'react';

function UserInfoIcons() {
    //Usando localstorage con props se obtiene los datos para mostrarse como un mini perfil
    // @ts-ignore
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')).user);
    const phoneNumber = localStorage.getItem('phoneNumber') || 'No hay número de teléfono';


    return (
        <div>
            <Group wrap="nowrap">
                <Avatar
                    src={user.avatar ? `https://api.ismoxpage.online${user.avatar.url}` : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                    size={94}
                    radius="md"
                />
                <div>
                    <Text fz="lg" fw={500} className={classes.name}>
                        {user.name}
                    </Text>

                    <Group wrap="nowrap" gap={10} mt={3}>
                        <IconAt stroke={1.5} size="1rem" className={classes.icon} />
                        <Text truncate="end" fz="xs" c="dimmed" >
                            {user.email}
                        </Text>
                    </Group>

                </div>
            </Group>
        </div>
    );
}
export default UserInfoIcons;