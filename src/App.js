import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TxtLand from "./components/TxtLand";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'


function App() {
  const [mode, setMode] = useState('light');
  const [title, setTitle] = useState('TxtLand');

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleUpdate = () => {
    if (title === '') {
      alert('Title cant be empty');
    }
    setTitle(title);
    alert('Title Changed');
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar title={title} handleUpdate={handleUpdate}
          handleChange={handleChange} toggleMode={toggleMode} mode={mode} />}>
          <Route index element={<TxtLand title={title} mode={mode} />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
