import { useState } from "react";
import Navbar from "./components/Navbar";
import TxtLand from "./components/TxtLand";



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
    <div>
      <Navbar title={title} handleUpdate={handleUpdate} handleChange={handleChange} />
      <TxtLand title={title} />
    </div>
  );
}

export default App;
