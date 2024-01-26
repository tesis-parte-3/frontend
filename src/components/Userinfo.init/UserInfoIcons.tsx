import { Avatar, Text, Group } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import classes from './UserInfoIcons.module.css';

function UserInfoIcons() {
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
                        Nombre
                    </Text>

                    <Group wrap="nowrap" gap={10} mt={3}>
                        <IconAt stroke={1.5} size="1rem" className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            Email@urbe.edu.ve
                        </Text>
                    </Group>

                    <Group wrap="nowrap" gap={10} mt={5}>
                        <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            +0 (000) 123 45 67
                        </Text>
                    </Group>
                </div>
            </Group>
        </div>
    );
}
export default UserInfoIcons;