import UserInfoAction from "../components/Userinfo.init/UserInfoAction";
import { Container, Title, Accordion } from '@mantine/core';
import classes from './../assets/css/AdminQ.module.css';
import { Select, TextInput, Paper, Button } from '@mantine/core';
import { useState } from 'react';
import {
    Table,
    ScrollArea,
    UnstyledButton,
    Group,
    Text,
    Center,
    rem,
    keys,
} from '@mantine/core';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';
import THClass from './../assets/css/TableSort.module.css';

interface RowData {
    pregunta: string;
    grado: string;
}

interface ThProps {
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
    onSort(): void;
}
function Th({ children, reversed, sorted, onSort }: ThProps) {
    const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
    return (
        <Table.Th className={THClass.th}>
            <UnstyledButton onClick={onSort} >
                <Group justify="space-between">
                    <Text fw={500} fz="sm" w="100%">
                        {children}
                    </Text>
                    <Center>
                        <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                    </Center>
                </Group>
            </UnstyledButton>
        </Table.Th>
    );
}

function filterData(data: RowData[], search: string) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
        keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
    );
}

function sortData(
    data: RowData[],
    payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
    const { sortBy } = payload;

    if (!sortBy) {
        return filterData(data, payload.search);
    }

    return filterData(
        [...data].sort((a, b) => {
            if (payload.reversed) {
                return b[sortBy].localeCompare(a[sortBy]);
            }

            return a[sortBy].localeCompare(b[sortBy]);
        }),
        payload.search
    );
}

const dataEliminar = [
    {
        pregunta: 'La luces de emergencia se deben usar para?',
        grado: '2G',
    },
    {
        pregunta: 'A que velocidad es seguro manejar en una carretera de 2 carriles?',
        grado: '3G',
    },
    {
        pregunta: 'El sistema de luces de un vehiculo se debe usar para?',
        grado: '3G',
    },
    
];
const dataModificar = [
    {
        pregunta: 'Eliminar la pregunta 1',
        grado: '2G',
    },
    {
        pregunta: 'Eliminar la pregunta 2',
        grado: '3G',
    },
    {
        pregunta: 'El sistema de luces de un vehiculo se debe usar para?',
        grado: '3G',
    },
    
];


function Admin() {
    const [search, setSearch] = useState('');
    const [sortedDataE, setSortedDataE] = useState(dataEliminar);
    const [sortedDataM, setSortedDataM] = useState(dataModificar);

    const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    const setSorting = (field: keyof RowData) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedDataE(sortData(dataEliminar, { sortBy: field, reversed, search }));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedDataE(sortData(dataEliminar, { sortBy, reversed: reverseSortDirection, search: value }));
    };


    const setSortingM = (field: keyof RowData) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedDataE(sortData(dataEliminar, { sortBy: field, reversed, search }));
    };

    const handleSearchChangeM = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedDataM(sortData(dataModificar, { sortBy, reversed: reverseSortDirection, search: value }));
    };


    const rowsEliminar = sortedDataE.map((row) => (
        <Table.Tr key={row.pregunta}> 
            <Table.Td>{row.pregunta}</Table.Td>
            <Table.Td>{row.grado}</Table.Td>
            <Table.Td><Button size="xs" variant="outline" color="red" >Eliminar</Button></Table.Td>
        </Table.Tr>
        
    ));


    const rowsModificar = sortedDataM.map((row) => (
        <Table.Tr key={row.pregunta}> 
            <Table.Td>{row.pregunta}</Table.Td>
            <Table.Td>{row.grado}</Table.Td>
            <Table.Td><Button size="xs" variant="outline" color="orange" >Modificar</Button></Table.Td>
        </Table.Tr>
        
    ));
    
    return (
        <>
            <UserInfoAction />
            <Container size="sm" className={classes.wrapper}>
                <Title ta="center" mb="xl" className={classes.title}>
                    Control de Administrador
                </Title>
                <Paper shadow="sm" radius="md" withBorder p="lg" mb="lg">
                    <Center>
                    <Text ta="center" fw={500} size="xl" >Pantalla exclusivamente para agregar, eliminar o agregar una pregunta</Text>
                    </Center>
                </Paper>

                <Accordion variant="separated">
                    <Accordion.Item className={classes.item} value="Aregar-pregunta">
                        <Accordion.Control>Agregar pregunta</Accordion.Control>
                        <Accordion.Panel>
                            <Paper>
                                <TextInput label="Pregunta" placeholder="Texto" required/>
                                <Select
                                    mt="md"
                                    comboboxProps={{ withinPortal: true }}
                                    data={['General', '2G', '3G', '5G']}
                                    placeholder="Selecciona grado"
                                    label="Indica el grado de la pregunta"
                                    required
                                />
                                <Button mt="xl" variant="outline" color="blue" >Agregar</Button>
                            </Paper>


                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="Eliminar-Pregunta">
                        <Accordion.Control>Eliminar pregunta</Accordion.Control>
                        <Accordion.Panel>
                            <ScrollArea>
                                <TextInput
                                    placeholder="Search by any field"
                                    mb="md"
                                    leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                                    value={search}
                                    onChange={handleSearchChange}
                                />
                                <Table verticalSpacing="xs">
                                    <Table.Tbody>
                                        <Table.Tr>
                                            <Th
                                                sorted={sortBy === 'pregunta'}
                                                reversed={reverseSortDirection}
                                                onSort={() => setSorting('pregunta')}
                                            >
                                                Pregunta
                                            </Th>
                                            <Th
                                                sorted={sortBy === 'grado'}
                                                reversed={reverseSortDirection}
                                                onSort={() => setSorting('grado')}
                                            >
                                                Grado
                                            </Th>
                                        </Table.Tr>
                                    </Table.Tbody>
                                    <Table.Tbody>
                                        {rowsEliminar.length > 0 ? (
                                            rowsEliminar
                                        ) : (
                                            <Table.Tr>
                                                <Table.Td colSpan={Object.keys(dataEliminar[0]).length}>
                                                    <Text fw={500} ta="center">
                                                        Sin resultados
                                                    </Text>
                                                </Table.Td>
                                            </Table.Tr>
                                        )}
                                    </Table.Tbody>
                                </Table>
                            </ScrollArea>
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="Modificar-Pregunta">
                        <Accordion.Control>Modificar pregunta</Accordion.Control>
                        <Accordion.Panel>
                        <ScrollArea>
                                <TextInput
                                    placeholder="Search by any field"
                                    mb="md"
                                    leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                                    value={search}
                                    onChange={handleSearchChangeM}
                                />
                                <Table verticalSpacing="xs">
                                    <Table.Tbody>
                                        <Table.Tr>
                                            <Th
                                                sorted={sortBy === 'pregunta'}
                                                reversed={reverseSortDirection}
                                                onSort={() => setSortingM('pregunta')}
                                            >
                                                Pregunta
                                            </Th>
                                            <Th
                                                sorted={sortBy === 'grado'}
                                                reversed={reverseSortDirection}
                                                onSort={() => setSortingM('grado')}
                                            >
                                                Grado
                                            </Th>
                                        </Table.Tr>
                                    </Table.Tbody>
                                    <Table.Tbody>
                                        {rowsModificar.length > 0 ? (
                                            rowsModificar
                                        ) : (
                                            <Table.Tr>
                                                <Table.Td colSpan={Object.keys(dataModificar[0]).length}>
                                                    <Text fw={500} ta="center">
                                                        Sin resultados
                                                    </Text>
                                                </Table.Td>
                                            </Table.Tr>
                                        )}
                                    </Table.Tbody>
                                </Table>
                            </ScrollArea>
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </>

    );
}

export default Admin;