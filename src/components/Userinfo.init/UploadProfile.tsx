import { useEffect, useState } from 'react';
import { FileButton, Button, Group } from '@mantine/core';
import axios from 'axios';

function UploadProfile() {
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        if (file) {
            axios.put('https://api.ismoxpage.online/users/set_avatar', {
                user: {
                    avatar: file
                }
            }, {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user') || '{}').token}`,
                    'Content-Type': ['application/json', 'multipart/form-data'],
                },
            }).then((res) => {
                console.log(res.data);
                const userData = JSON.parse(localStorage.getItem('user') || '{}');
                userData.user.avatar = res.data.user.avatar;
                localStorage.setItem('user', JSON.stringify(userData));
                window.location.reload();
            });
        }
    }, [file])
    
    return (
        <>
            <Group justify="center">
                <FileButton onChange={setFile} accept="image/png,image/jpeg">
                    {(props) => <Button {...props}>Subir imagen de perfil</Button>}
                </FileButton>
            </Group>
        </>
    );
}
export default UploadProfile;