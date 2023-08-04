import logo from './logo.svg';
import './App.css';
import React, { useContext, useEffect } from 'react';
import {AppContext} from './contexts/context'
import { Route, Routes } from 'react-router-dom'
import Weather from './components/Weather'
import Main from './pages/Main'
import Projects from './pages/Projects'
import ProjectInfo from './pages/ProjectInfo'

function App() {
  const { data, getIP } = useContext(AppContext)
  useEffect(() => {
    getIP()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ProjectInfo" element={<ProjectInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
