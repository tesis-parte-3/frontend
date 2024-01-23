import { AnimatePresence, motion } from 'framer-motion';
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



const App: React.FC = () => {
  // Add import statement for React

  const location = useLocation();
  const showBottnav = ['/Examen', '/Estadistica', '/Ajustes', '/principal', '/Estudios'].includes(location.pathname);
  const showBackmenu = ['/Examen', '/Estadistica', '/Ajustes', '/Estudios'].includes(location.pathname);

  return (
    <>
      {showBackmenu && <Backmenu />}
      {showBottnav && <Bottnav />}
      <Routes location={location} key={location.pathname}>
        <Route path='/*' element={<ErrorPage/>}/>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info" element={<Info />} />
        <Route path="/Estudios" element={
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
        } />
      </Routes>
      

    </>
  );
};
export default App;