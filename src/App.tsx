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
import Backmenu from './components/Userinfo.init/backmenu';
import ErrorPage from './pages/ErrorPage';
import React from 'react';
import LicenciaG3 from './pages/Examen_Pages/LicenciaG3/LicenciaG3';
import LicenciaG2 from './pages/Examen_Pages/LicenciaG2/LicenciaG2';
import LicenciaG5 from './pages/Examen_Pages/LicenciaG5/LicenciaG5';
import Backmenubar_examen from './pages/Examen_Pages/BackmenuBar/backmenubar_examen';
import Register from './pages/Register'



const App: React.FC = () => {
  // Add import statement for React

  const location = useLocation();
  const showBottnav = ['/Examen', '/Estadistica', '/Ajustes', '/principal', '/Estudios'].includes(location.pathname);
  const showBackmenu = ['/Examen', '/Estadistica', '/Ajustes', '/Estudios'].includes(location.pathname);
  const backmenubar = ['/Examen/LicenciaG3', '/Examen/LicenciaG2', '/Examen/LicenciaG5'].includes(location.pathname);


  return (
    <>
      {showBackmenu && <Backmenu />}
      {showBottnav && <Bottnav />}
      {backmenubar && <Backmenubar_examen />}
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