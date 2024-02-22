import Demo from "../function/modetheme/Demo";
import { Paper, Text, Button, Transition, Modal, TextInput, PasswordInput } from '@mantine/core';
import IconsProfile from '../components/Userinfo.init/UserInfoIcons';
import { useEffect, useState } from 'react';
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks';
import axios from "axios";

interface IGroupText {
  label: string;
  content: string;
}

interface IUser {
  name: string;
  email: string;
  password: string;
  id: number;
  // currentPassword: string;
  // phone: string;
}

function Ajustes() {
  const [isMounted, setIsMounted] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  // @ts-ignore
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")).user)

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // @ts-ignore
  const form = useForm<IUser>({
    initialValues: {
      name: `${user.name}`,
      email: `${user.email}`,
      password: '',
      id: user.id
      
      // currentPassword: '',
      // phone: ''
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      name: (values) => (values.length < 2 ? 'Name is too short' : null),
      password: (value) => (value.length < 8 && value.length > 0 || value.length > 50 ? 'La contraseña debe de estar entre 8 a 50 caracteres' : null) 
      // {
        
        
      //   if (value.length < 8 || value.length > 50) {
      //     return 'La contraseña debe de estar entre 8 a 50 caracteres';
      //   }
      //   return null;
      },



      // password: (values) => (
      //   values.length < 6 ? 'Password is too short' : (
      //     values.length > 50 ? 'Password is too long' :
      //     // (
      //     //   values === form.values.currentPassword ? 'New password should be different from current' : null
      //     // )
      //   )
      // ),
      // currentPassword: (values) => (values.length < 6 ? 'Password is too short' : (
      //   values.length > 50 ? 'Password is too long' : (
      //     values === form.values.password ? 'New password should be different from current' : null
      //   )
      // )),
      // phone: (values) => (values.length < 6 ? 'Phone is too short' : null),
    }
  )

  // @ts-ignore
  const handleChange = (values:  IUser) => {
    axios.put(`http://localhost:3000/users/${user.id}`, {
      user: values
      
    }).then(() => {
      
      

      localStorage.setItem("user", JSON.stringify({user:values})) 
      window.location.reload()
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const GroupText = ({ label, content }: IGroupText) => {
    return (
      <div style={{ display: 'flex', width: '100%', marginBottom: '15px' }}>
        <Text w="40%" fw={350} fz={18}>
          {label}:
        </Text>
        <Text ta="end" w="60%" fw={750} fz={18}>
          {content}
        </Text>
      </div>
    )
  }

  return (
    <>
      <Transition
        mounted={isMounted}
        transition="fade"
        duration={300}
        timingFunction="ease"
      >
        {
          (styles) => <div style={styles}><div>
            <Text size="30px" fw={500} ta="center" mt="sm"> Ajustes </Text>
          </div>
            <Paper mt="30" p="lg" h="auto" w="85%" mx="auto" radius="md" shadow="xl" withBorder>
              <IconsProfile />
            </Paper>
            <Paper
              mt="30"
              p="lg"
              h="auto"
              w="85%"
              mx="auto"
              radius="md"
              shadow="xl"
              withBorder
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
                <Text fw={350} fz={18}>Cambiar tema</Text> <Demo />
              </div>
              <GroupText label="Nombre" content={user.name} />
              <GroupText label="Email" content={user.email} />
              <GroupText label="Telefono" content="04121688466" />
              <Button
                fullWidth
                variant="light"
                color="blue"
                size="lg"
                mt={40}
                onClick={open}
              >
                Actualizar datos de cuenta
              </Button>
            </Paper>
          </div>
        }
      </Transition>
      {/* Modales de ajustes */}
        {/* Modal de cambio */}
        <Modal
        opened={opened}
        onClose={close}
        centered
        title={<Text fz={23} fw={750} lineClamp={1}>Actualizar datos de cuenta</Text>}
      >
        <form onSubmit={form.onSubmit((values: IUser) => handleChange(values))}>
          {/* <UploadProfile /> */}
          <TextInput
            
            
            label="Nombre"
            placeholder="Nombre"
            mb={20}
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Email"
            mb={20}
            {...form.getInputProps('email')}
          />
          {/* <PasswordInput
            label="Contraseña actual"
            placeholder="Contraseña actual"
            mb={20}
            {...form.getInputProps('currentPassword')}
          /> */}
          <PasswordInput
          
            label="Nueva contraseña"
            placeholder="Nueva contraseña"
            mb={20}
            
            {...form.getInputProps('password')}
          />
          {/* <TextInput
            label="Telefono"
            placeholder="Telefono"
            mb={20}
            // {...form.getInputProps('phone')}
          /> */}
          <Button
            type="submit"
            variant="light"
            color="blue"
            size="lg"
            fullWidth
            mt={20}
          >
            Actualizar
            
          </Button>
        </form>
        
      </Modal>
    </>

  )
}

export default Ajustes;