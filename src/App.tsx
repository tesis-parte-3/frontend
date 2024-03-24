import Login from './pages/Login';
import Info from './pages/Info';
import Welcome from './pages/Welcome';
import Principal from './pages/Principal';
import Estadistica from './pages/Estadistica';
import Ajustes from './pages/Ajustes';
import Examen from './pages/Examen';
import Estudios from './pages/Estudios';
import { Routes, Route, useLocation } from 'react-router-dom';
import Bottnav from './components/BotNav/Bottnav'; 
import Bottnav_Admin from './components/BotNav_Admin/Bottnav'; 
import Backmenu from './components/Userinfo.init/backmenu';
import ErrorPage from './pages/ErrorPage';
import React from 'react';
import LicenciaG3 from './pages/Examen_Pages/LicenciaG3/LicenciaG3';
import LicenciaG2 from './pages/Examen_Pages/LicenciaG2/LicenciaG2';
import LicenciaG5 from './pages/Examen_Pages/LicenciaG5/LicenciaG5';
import Backmenubar_examen from './pages/Examen_Pages/BackmenuBar/backmenubar_examen';
import Backmenubar_estudios from './pages/Aprendizaje_Pages/BackmenuBar2/backmenubar_estudios';
import Register from './pages/Register'
import Admin from './pages/Admin'
import Admincu from './pages/Admincu'
import Adminpreguntas from './pages/Adminpreguntas'
import BackmenuAdmin from './components/Backmenu_Admin/backmenu'

//RUTAS PARA LOS PDFS AUTODIDACTAS
import LibroDiccionarioVial from './pages/Aprendizaje_Pages/LibroDiccionarioVial';
import SeguridadVial from './pages/Aprendizaje_Pages/SeguridadVial';
import Integridad_De_Educacion from './pages/Aprendizaje_Pages/Integridad_De_Educacion'
import Cinturones_seguridad_VDM from './pages/Aprendizaje_Pages/Cinturones_seguridad_VDM'
import Extintores_Generalidades from './pages/Aprendizaje_Pages/Extintores_Generalidades'
import Clasificacion_SD_identificacion from './pages/Aprendizaje_Pages/Clasificacion_SD_identificacion'
import Automotriz_sistema_frenos from './pages/Aprendizaje_Pages/Automotriz_sistema_frenos'
import Vehiculos_dispositivosEI from './pages/Aprendizaje_Pages/Vehiculos_dispositivosEI'
import Respuesta_Emergencia from './pages/Aprendizaje_Pages/Respuesta_Emergencia'
import TrianguloSeguridad from './pages/Aprendizaje_Pages/TrianguloSeguridad'
import Control_Semaforos from './pages/Aprendizaje_Pages/Control_Semaforos'
import EscolarTransporte from './pages/Aprendizaje_Pages/EscolarTransporte'
import Vehiculos_Carga from './pages/Aprendizaje_Pages/Vehiculos_Carga'
import Empresas_TransporteUrbano from './pages/Aprendizaje_Pages/Empresas_TransporteUrbano'
import Autobus_Turismo from './pages/Aprendizaje_Pages/Autobus_Turismo'
import Generalidades from './pages/Aprendizaje_Pages/Generalidades'
import VertialesSenals from './pages/Aprendizaje_Pages/VertialesSenals'
import ReglamentacionSenals from './pages/Aprendizaje_Pages/ReglamentacionSenals'
import PrevencionSenals from './pages/Aprendizaje_Pages/PrevencionSenals'
import InformationSenals from './pages/Aprendizaje_Pages/InformationSenals'
import VariablesSenals from './pages/Aprendizaje_Pages/VariablesSenals'
import Demarcacion from './pages/Aprendizaje_Pages/Demarcacion'
import SemaforosCT from './pages/Aprendizaje_Pages/SemaforosCT'
import Dispositivos_Temporales from './pages/Aprendizaje_Pages/Dispositivos_Temporales'
import Reductor_Velocidad from './pages/Aprendizaje_Pages/Reductor_Velocidad'
import Ciclorruta from './pages/Aprendizaje_Pages/Ciclorruta'
import Canales_Publicos from './pages/Aprendizaje_Pages/Canales_Publicos'
import Dispositivos_Ferri from './pages/Aprendizaje_Pages/Dispositivos_Ferri'
import Recuperar from './pages/RecuperarC'
import Autodidactas from './pages/Estudios_Pages/Estudios_Autodidactas/Autodidactas'


//Backmenu General Estudios
import BM_EstudiosLicencias from './pages/Estudios_Pages/backmenuEstudioG3'
import BM_EstudiosLicencias_Exit from './pages/Estudios_Pages/backmenuEstudioG3_exitPDF'
//ESTUDIOS G3
import G3_Estudios from './pages/Estudios_Pages/Estudios_G3/G3_Estudios';
//PDF G3
import Funcionamiento_Vehiculo from './pages/Estudios_Pages/Estudios_G3/Funcionamiento_Vehiculo';
import Conduccion_Responsable from './pages/Estudios_Pages/Estudios_G3/Conduccion_Responsable';
import Normativa_Basica from './pages/Estudios_Pages/Estudios_G3/Normativa_basica';
import Linea_Demarcacion from './pages/Estudios_Pages/Estudios_G3/Linea_Demarcacion';
import Luces_Vehiculos from './pages/Estudios_Pages/Estudios_G3/Luces_Vehiculo';
import Reductor_v from './pages/Estudios_Pages/Estudios_G3/Reductor_v';
import Senal_VG from './pages/Estudios_Pages/Estudios_G3/Senal_VG';
import Senal_Regla from './pages/Estudios_Pages/Estudios_G3/Senal_Regla';
import Senal_PRE from './pages/Estudios_Pages/Estudios_G3/Senal_PRE';
import Senal_INFO from './pages/Estudios_Pages/Estudios_G3/Senal_INFO';
import Senal_MVA from './pages/Estudios_Pages/Estudios_G3/Senal_MVA';
import Semaforo_G3 from './pages/Estudios_Pages/Estudios_G3/Semaforo_G3';
import Senal_TCT from './pages/Estudios_Pages/Estudios_G3/Senal_TCT';
import BAExit from './pages/Aprendizaje_Pages/BackmenuBar2/backmenubar_estudios_Exit';
import G2_Estudios from './pages/Estudios_Pages/Estudios_G2/G2_Estudios';

//PDF G2 
import Manual_Motocicleta from './pages/Estudios_Pages/Estudios_G2/Manual_Motocicleta';
import Operador_Motocicleta from './pages/Estudios_Pages/Estudios_G2/Operador_Motocicleta';
import Tecnicas_Motocicletas from './pages/Estudios_Pages/Estudios_G2/Tecnicas_Motocicletas';
import BAExitG2 from './pages/Estudios_Pages/backmenuEstudioG2_exitPDF';

//PDF G5
import G5_Estudios from './pages/Estudios_Pages/Estudios_G5/G5_Estudios';
import Guia_Seleccion_Transporte_Publico from './pages/Estudios_Pages/Estudios_G5/Guia_Seleccion_Transporte_Publico';
import Motores_Diesel from './pages/Estudios_Pages/Estudios_G5/Motores_Diesel';
import Operadores_de_camiones from './pages/Estudios_Pages/Estudios_G5/Operadores_de_camiones'
import Manejo_para_camiones_de_carga from './pages/Estudios_Pages/Estudios_G5/Manejo_para_camiones_de_carga';
import BAExitG5 from './pages/Estudios_Pages/backmenuEstudioG5_exitPDF';

//PRE_START G2
import Pre_StartG2 from './pages/Examen_Pages/LicenciaG2/Pre_StartG2';
import BMG2_Exit from './pages/Examen_Pages/LicenciaG2/BMG2_PreStart';

//PRE_START G3
import Pre_StartG3 from './pages/Examen_Pages/LicenciaG3/Pre_StartG3';
import BMG3_Exit from './pages/Examen_Pages/LicenciaG3/BMG3_PreStart';

//PRE_START G5
import Pre_StartG5 from './pages/Examen_Pages/LicenciaG5/Pre_StartG5';
import BMG5_Exit from './pages/Examen_Pages/LicenciaG5/BMG5_PreStart';


const App: React.FC = () => {
  // Add import statement for React

  const location = useLocation();
  const showBottnav = ['/Examen', '/Estadistica', '/Ajustes', '/principal', '/Estudios'].includes(location.pathname);
  const showBackmenu = ['/Examen', '/Estadistica', '/Ajustes', '/Estudios'].includes(location.pathname);
  const backmenubar = ['/Examen/LicenciaG3', '/Examen/LicenciaG2', '/Examen/LicenciaG5'].includes(location.pathname);
  const backmenubar2 = ['/Dispositivos_Ferri','/Canales_Publicos','/Ciclorruta','/Reductor_Velocidad','/Dispositivos_Temporales','/SemaforosCT','/Demarcacion','/VariablesSenals','/InformationSenals','/PrevencionSenals','/ReglamentacionSenals','/VertialesSenals','/Generalidades','/Autobus_Turismo','/Empresas_TransporteUrbano','/Vehiculos_Carga','/EscolarTransporte','/Control_Semaforos','/TrianguloSeguridad','/Respuesta_Emergencia','/Vehiculos_dispositivosEI','/LibroDiccionarioVial', '/SeguridadVial', '/Integridad_De_Educacion', '/Cinturones_seguridad_VDM', '/Extintores_Generalidades','/Clasificacion_SD_identificacion', '/Automotriz_sistema_frenos'].includes(location.pathname);
  const showBottnav_Admin = ['/Adminpreguntas', '/Admincu', '/admin'].includes(location.pathname);
  const backmenubarAdmin = ['/Adminpreguntas', '/Admincu'].includes(location.pathname);
  const BMEstudios = ['/G3_Estudios', '/G5_Estudios', '/G2_Estudios'].includes(location.pathname);
  const BMExitG3 = ['/Senal_TCT','/Semaforo_G3','/Senal_MVA','/Senal_INFO','/Senal_PRE','/Senal_Regla','/Senal_VG','/Reductor_V', '/Luces_Vehiculos', '/Funcionamiento_Vehiculo', '/Conduccion_Responsable', '/Normativa_Basica', '/Linea_Demarcacion'].includes(location.pathname);
  const BMExitG2 = ['/Tecnicas_Motocicletas','/Operador_Motocicleta','/Manual_Motocicleta'].includes(location.pathname);
  const BMExitG5 = ['/Manejo_para_camiones_de_carga','/Operadores_de_camiones','/Motores_Diesel','/Guia_Seleccion_Transporte_Publico',].includes(location.pathname);
  const BAE = ['/Autodidactas'].includes(location.pathname);
  const BMExitG2PreStart = ['/Pre_StartG2'].includes(location.pathname);
  const BMExitG3PreStart = ['/Pre_StartG3'].includes(location.pathname);
  const BMExitG5PreStart = ['/Pre_StartG5'].includes(location.pathname);
  return (
    <>
      {showBackmenu && <Backmenu />}
      {showBottnav && <Bottnav />}
      {backmenubar && <Backmenubar_examen />}
      {backmenubar2 && <Backmenubar_estudios />}
      {showBottnav_Admin && <Bottnav_Admin />}
      {backmenubarAdmin && <BackmenuAdmin/>}
      {BMEstudios && <BM_EstudiosLicencias/>}
      {BMExitG3 && <BM_EstudiosLicencias_Exit/>}
      {BAE && <BAExit/>}
      {BMExitG2 && <BAExitG2/>}
      {BMExitG5 && <BAExitG5/>}
      {BMExitG2PreStart && <BMG2_Exit/>}
      {BMExitG3PreStart && <BMG3_Exit/>}
      {BMExitG5PreStart && <BMG5_Exit/>}

      <Routes location={location} key={location.pathname}>
        <Route path='/*' element={<ErrorPage/>}/>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info" element={<Info />} />
        <Route path="/Estudios" element={<Estudios />} />
        <Route path="/Estadistica" element={<Estadistica />} />
        <Route path="/Ajustes" element={<Ajustes />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Adminpreguntas" element={<Adminpreguntas />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/Admincu" element={<Admincu />} />
        <Route path="/Recuperar" element={<Recuperar />} />
        <Route path="/Autodidactas" element={<Autodidactas />} />

        {/* Estudios G3 */}
        <Route path="/G3_Estudios" element={<G3_Estudios />} />
        <Route path="/Funcionamiento_Vehiculo" element={<Funcionamiento_Vehiculo />} />
        <Route path="/Conduccion_Responsable" element={<Conduccion_Responsable />} />
        <Route path="/Normativa_Basica" element={<Normativa_Basica />} />
        <Route path="/Linea_Demarcacion" element={<Linea_Demarcacion />} />
        <Route path="/Luces_Vehiculos" element={<Luces_Vehiculos />} />
        <Route path="/Reductor_v" element={<Reductor_v />} />
        <Route path="/Senal_VG" element={<Senal_VG />} />
        <Route path="/Senal_Regla" element={<Senal_Regla />} />
        <Route path="/Senal_PRE" element={<Senal_PRE />} />
        <Route path="/Senal_INFO" element={<Senal_INFO />} />
        <Route path="/Senal_MVA" element={<Senal_MVA />} />
        <Route path="/Semaforo_G3" element={<Semaforo_G3 />} />
        <Route path="/Senal_TCT" element={<Senal_TCT />} />


        {/* Estudios G2 */}
        <Route path="/G2_Estudios" element={<G2_Estudios />} />
        <Route path="/Manual_Motocicleta" element={<Manual_Motocicleta />} />
        <Route path="/Operador_Motocicleta" element={<Operador_Motocicleta />} />
        <Route path="/Tecnicas_Motocicletas" element={<Tecnicas_Motocicletas />} />

        {/* Estudios G5 */}
        <Route path="/G5_Estudios" element={<G5_Estudios />} />
        <Route path="/Guia_Seleccion_Transporte_Publico" element={<Guia_Seleccion_Transporte_Publico />} />
        <Route path="/Motores_Diesel" element={<Motores_Diesel />} />
        <Route path="/Operadores_de_camiones" element={<Operadores_de_camiones />} />
        <Route path="/Manejo_para_camiones_de_carga" element={<Manejo_para_camiones_de_carga />} />

      {/* Pre-Start de Examenes */}
        <Route path="/Pre_StartG2" element={<Pre_StartG2 />} />
        <Route path="/Pre_StartG3" element={<Pre_StartG3 />} />
        <Route path="/Pre_StartG5" element={<Pre_StartG5 />} />
        



        {/* Pages para los libros de aprendizaje */}
        <Route path="/LibroDiccionarioVial" element={<LibroDiccionarioVial />} />
        <Route path="/SeguridadVial" element={<SeguridadVial />} />
        <Route path="/Integridad_De_Educacion" element={<Integridad_De_Educacion />} />
        <Route path="/Cinturones_seguridad_VDM" element={<Cinturones_seguridad_VDM />} />
        <Route path="/Extintores_Generalidades" element={<Extintores_Generalidades />} />
        <Route path="/Clasificacion_SD_identificacion" element={<Clasificacion_SD_identificacion />} />
        <Route path="/Automotriz_sistema_frenos" element={<Automotriz_sistema_frenos />} />
        <Route path="/Vehiculos_dispositivosEI" element={<Vehiculos_dispositivosEI />} />
        <Route path="/Respuesta_Emergencia" element={<Respuesta_Emergencia />} />
        <Route path="/TrianguloSeguridad" element={<TrianguloSeguridad />} />
        <Route path="/Control_Semaforos" element={<Control_Semaforos />} />
        <Route path="/EscolarTransporte" element={<EscolarTransporte />} />
        <Route path="/Vehiculos_Carga" element={<Vehiculos_Carga />} />
        <Route path="/Empresas_TransporteUrbano" element={<Empresas_TransporteUrbano />} />
        <Route path="/Autobus_Turismo" element={<Autobus_Turismo />} />
        <Route path="/Generalidades" element={<Generalidades />} />
        <Route path="/VertialesSenals" element={<VertialesSenals />} />
        <Route path="/ReglamentacionSenals" element={<ReglamentacionSenals />} />
        <Route path="/PrevencionSenals" element={<PrevencionSenals />} />
        <Route path="/InformationSenals" element={<InformationSenals />} />
        <Route path="/VariablesSenals" element={<VariablesSenals />} />
        <Route path="/Demarcacion" element={<Demarcacion />} />
        <Route path="/SemaforosCT" element={<SemaforosCT />} />
        <Route path="/Dispositivos_Temporales" element={<Dispositivos_Temporales />} />
        <Route path="/Reductor_Velocidad" element={<Reductor_Velocidad />} />
        <Route path="/Ciclorruta" element={<Ciclorruta />} />
        <Route path="/Canales_Publicos" element={<Canales_Publicos />} />
        <Route path="/Dispositivos_Ferri" element={<Dispositivos_Ferri />} />

        {/* Listado de routes para examenes de Licencias */}
        <Route path="/Examen" element={<Examen />} />
        <Route path="/Examen/LicenciaG3" element={<LicenciaG3 />} />
        <Route path="/Examen/LicenciaG2" element={<LicenciaG2 />} />
        <Route path="/Examen/LicenciaG5" element={<LicenciaG5 />} />
      </Routes>
      

    </>
  );
};
export default App;





















// Codigo viejo de routas con animaciones hechas con Animated Presence, no se si borrarlo o dejarlo aqui por si acaso.
{/* <Route path="/Estudios" element={
          <>
            <AnimatePresence>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ x: window.innerHeight, transition: { duration: 0.1, delay: 0.1 } }}
              >
                <Estudios />
              </motion.div>
            </AnimatePresence>
          </>
        } />
        <Route path="/Examen" element={
          <>
            <AnimatePresence>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ x: window.innerHeight, transition: { duration: 0.1, delay: 0.1 } }}
              >
                <Examen />
              </motion.div>
            </AnimatePresence>
          </>
        } />
        <Route path="/Estadistica" element={
          <>
            <AnimatePresence>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ x: window.innerHeight, transition: { duration: 0.1, delay: 0.1 } }}
              >
                <Estadistica />
              </motion.div>
            </AnimatePresence>
          </>
        } />
        <Route path="/Ajustes" element={
          <>
            <AnimatePresence>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ x: window.innerHeight, transition: { duration: 0.1, delay: 0.1 } }}
              >
                <Ajustes />
              </motion.div>
            </AnimatePresence>
          </>
        } />
        <Route path="/principal" element={
          <>
            <AnimatePresence>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ x: window.innerHeight, transition: { duration: 0.1, delay: 0.1 } }}
              >
                <Principal />
              </motion.div>
            </AnimatePresence>
          </>
        } /> */}