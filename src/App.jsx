import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './front/components/Login';
import Panel from './front/components/Panel';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta para el Login */}
          <Route path="/" element={<Login />} />

          {/* Ruta para el Panel Principal */}
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
