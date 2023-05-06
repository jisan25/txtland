import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TxtLand from "./components/TxtLand";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar title={title} handleUpdate={handleUpdate} handleChange={handleChange} />}>
          <Route index element={<TxtLand title={title} />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
