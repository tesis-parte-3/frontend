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

//RUTAS PARA LOS PDFS
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



const App: React.FC = () => {
  // Add import statement for React

  const location = useLocation();
  const showBottnav = ['/Examen', '/Estadistica', '/Ajustes', '/principal', '/Estudios'].includes(location.pathname);
  const showBackmenu = ['/Examen', '/Estadistica', '/Ajustes', '/Estudios'].includes(location.pathname);
  const backmenubar = ['/Examen/LicenciaG3', '/Examen/LicenciaG2', '/Examen/LicenciaG5'].includes(location.pathname);
  const backmenubar2 = ['/Autodidactas','/Dispositivos_Ferri','/Canales_Publicos','/Ciclorruta','/Reductor_Velocidad','/Dispositivos_Temporales','/SemaforosCT','/Demarcacion','/VariablesSenals','/InformationSenals','/PrevencionSenals','/ReglamentacionSenals','/VertialesSenals','/Generalidades','/Autobus_Turismo','/Empresas_TransporteUrbano','/Vehiculos_Carga','/EscolarTransporte','/Control_Semaforos','/TrianguloSeguridad','/Respuesta_Emergencia','/Vehiculos_dispositivosEI','/LibroDiccionarioVial', '/SeguridadVial', '/Integridad_De_Educacion', '/Cinturones_seguridad_VDM', '/Extintores_Generalidades','/Clasificacion_SD_identificacion', '/Automotriz_sistema_frenos'].includes(location.pathname);
  const showBottnav_Admin = ['/Adminpreguntas', '/Admincu', '/admin'].includes(location.pathname);
  const backmenubarAdmin = ['/Adminpreguntas', '/Admincu'].includes(location.pathname);
  return (
    <>
      {showBackmenu && <Backmenu />}
      {showBottnav && <Bottnav />}
      {backmenubar && <Backmenubar_examen />}
      {backmenubar2 && <Backmenubar_estudios />}
      {showBottnav_Admin && <Bottnav_Admin />}
      {backmenubarAdmin && <BackmenuAdmin/>}
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