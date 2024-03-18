import classes from './../assets/css/AdminQ.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Container,
  Title,
  Accordion,
  Select,
  TextInput,
  Paper,
  Button,
  Image, 
  SimpleGrid,
  Transition,
  rem,
  keys,
  ActionIcon
} from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { FileInput } from '@mantine/core';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';
import THClass from './../assets/css/TableSort.module.css';
import { X } from 'tabler-icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

interface RowData {
  pregunta: string;
  grado: string;
}

interface IExam { 
  level: string;
  question: string;
  answers: string[];
  correct_answer: string;
  picture: FileWithPath;
}

export declare const IMAGE_MIME_UNIQ_TYPE: ("image/png" | "image/gif" | "image/jpeg" | "image/svg+xml" | "image/webp" | "image/avif" | "image/heic");

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
          <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
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


function Adminpreguntas() {

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [sortedDataE, setSortedDataE] = useState<RowData[]>(dataEliminar);
  const [sortedDataM, setSortedDataM] = useState<RowData[]>(dataModificar);
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState<boolean>(false);
  const [correctAnswer, setCorrectAnswer] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [grade, setGrade] = useState<string>('');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return <Image key={index} w="100%" src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />;
  });

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

  const [answers, setAnswers] = useState<string[]>([]);

  const handleSearchChangeM = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedDataM(sortData(dataModificar, { sortBy, reversed: reverseSortDirection, search: value }));
  };

  const addExams = (values: IExam) => {
    axios.post('https://ismoxpage.online/exams', { exam: values }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': ['application/json', 'multipart/form-data']
      }
    }).then((response) => {
      console.log(response);
      alert('Pregunta agregada con exito');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }).catch((err) => {
      console.log(err);
    });
  }

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

  const updateAnswer = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const deleteAnswer = (index: number) => {
    if (answers.length > 2) {
      const newAnswers = [...answers];
      newAnswers.splice(index, 1);
      setAnswers(newAnswers);
    }
  };
  return (
    <>
      <Transition
        mounted={isMounted}
        transition="scale-x"
        duration={500}
        timingFunction="ease"
      >
        {(styles) => <div style={styles}>
          <Container size="sm" className={classes.wrapper}>
            <Title ta="center" mb="xl" className={classes.title}>
              Control de Administrador sobre preguntas
            </Title>
            <Paper shadow="sm" radius="md" withBorder p="lg" mb="lg">
              <Text ta="center" fw={500} size="xl" >Pantalla exclusivamente para agregar, eliminar o agregar una pregunta</Text>
            </Paper>

            <Accordion variant="separated">
              <Accordion.Item value="Aregar-pregunta">
                <Accordion.Control>Agregar pregunta</Accordion.Control>
                <Accordion.Panel>
                  <Paper>
                    <TextInput label="Pregunta" placeholder="Texto" required onChange={(e) => {
                      e.currentTarget.value !== null && setTitle(e.currentTarget.value);
                    }}/>
                    <Select
                      mt="md"
                      comboboxProps={{ withinPortal: true }}
                      data={[
                        { value: 'general', label: 'General' },
                        { value: 'grado2', label: 'Grado 2' },
                        { value: 'grado3', label: 'Grado 3' },
                        { value: 'grado5', label: 'Grado 5' },
                      ]}
                      onChange={(value) => value !== null && (setGrade(value))}
                      placeholder="Selecciona grado"
                      label="Indica el grado de la pregunta"
                      required
                      mb="sx"
                    />
                    <TextInput
                      label={`Respuesta ${0 + 1}`}
                      placeholder="Texto"
                      value={answers[0]}
                      onChange={(event) => updateAnswer(0, event.currentTarget.value)}
                      required
                      mb="sx"
                    />
                    <TextInput
                      label={`Respuesta ${1 + 1}`}
                      placeholder="Texto"
                      value={answers[1]}
                      onChange={(event) => updateAnswer(1, event.currentTarget.value)}
                      required
                      mb="sx"
                    />
                    <TextInput
                      label={`Respuesta ${2 + 1}`}
                      placeholder="Texto"
                      value={answers[2]}
                      onChange={(event) => updateAnswer(2, event.currentTarget.value)}
                      mb="sx"
                    />
                    <TextInput
                      label={`Respuesta ${3 + 1}`}
                      placeholder="Texto"
                      value={answers[3]}
                      onChange={(event) => updateAnswer(3, event.currentTarget.value)}
                      mb="sx"
                    />
                    <Text ta="center" mt="xs" c="dimmed" fz="12">Minimo todas las preguntas deben tener 2 respuestas</Text>
                    <Text ta="center" mt="xl" c="dimmed" fz="12">Selecciona la respuesta correcta</Text>
                    <Select
                      mt="xs"
                      comboboxProps={{ withinPortal: true }}
                      data={answers}
                      placeholder="Selecciona respuesta correcta"
                      onChange={(value) => value !== null && (setCorrectAnswer(value))}
                      required
                    />
                    <div>
                      <Dropzone accept={IMAGE_MIME_TYPE} multiple={false} style={{ cursor: 'pointer', border: '2px dashed #000', borderRadius: "5px", marginTop: '20px' }} py="30px" onDrop={setFiles}>
                        <Text ta="center" fw={350}>Agregar imagen</Text>
                      </Dropzone>

                      <SimpleGrid cols={{ base: 1, sm: 4 }} mt={previews.length > 0 ? 'xl' : 0}>
                        {previews}
                      </SimpleGrid>
                    </div>
                    <Button mt="xl" fullWidth variant="filled" color="blue" onClick={(e) => {
                      e.preventDefault();
                      addExams({
                        level: grade,
                        question: title,
                        answers: answers,
                        correct_answer: correctAnswer,
                        picture: files[0]
                      });
                    }}>
                      Agregar pregunta
                    </Button>
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
          <Paper mt="90" p="lg" h="auto" w="85%" mx="auto" radius="md" withBorder> </Paper>
        </div>}
      </Transition>

    </>

  );
}

export default Adminpreguntas;