import { Avatar, Text, Group } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import classes from './UserInfoIcons.module.css';
import { useState } from 'react';

function UserInfoIcons() {
            //Usando localstorage con props se obtiene los datos para mostrarse como un mini perfil
            // @ts-ignore
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')).user);

    return (
        <div>
            <Group wrap="nowrap">
                <Avatar
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    size={94}
                    radius="md"
                />
                <div>


                    <Text fz="lg" fw={500} className={classes.name}>
                        {user.name}
                    </Text>

                    <Group wrap="nowrap" gap={10} mt={3}>
                        <IconAt stroke={1.5} size="1rem" className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            {user.email}
                        </Text>
                    </Group>

                    <Group wrap="nowrap" gap={10} mt={5}>
                        <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            04121688466
                        </Text>
                    </Group>
                </div>
            </Group>
        </div>
    );
}
export default UserInfoIcons;