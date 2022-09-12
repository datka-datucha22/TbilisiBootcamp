import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Navigation from "./Pages/Navigation";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Classroom from "./Pages/Classroom";
import Error from "./Pages/Error";

import './Reset.css'
import './Global.css'
function App() {
  return (
    <div className='page-container'>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="classroom" element={<Classroom />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
    </div>
  );
}

export default App;
