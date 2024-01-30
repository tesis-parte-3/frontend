import { Avatar, Text, Group } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import classes from './UserInfoIcons.module.css';
import { useState, useEffect } from 'react';

function UserInfoIcons() {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    useEffect(() => {
        const storedPhoneNumber = localStorage.getItem('phoneNumber');
        const storedName = localStorage.getItem('name');
        const storedEmail = localStorage.getItem('email');

        if (storedPhoneNumber) {
            setPhoneNumber(storedPhoneNumber);
        }

        if (storedName) {
            setName(storedName);
        }

        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

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
                        {name}
                    </Text>

                    <Group wrap="nowrap" gap={10} mt={3}>
                        <IconAt stroke={1.5} size="1rem" className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            {email}
                        </Text>
                    </Group>

                    <Group wrap="nowrap" gap={10} mt={5}>
                        <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            {phoneNumber}
                        </Text>
                    </Group>
                </div>
            </Group>
        </div>
    );
}
export default UserInfoIcons;