import logo from './logo.svg';
import './App.css';
import { Groot } from './components/Home';
import { Jaipur } from './components/About';
import { Services } from './components/Services';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Propsclass } from './components/Propsclass';

import image from "./images/image1.jpg"

function App() {
  let details={
    name:"groot",
    city:"japiur",
    email:"groot@gmail.com",
    password:"groot@123",
    img:image
  }

  return (
    <>
      {/* npm i react-router-dom => install */}
      <BrowserRouter>
        <Link to={"/"}> home component </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={"/about"}> about component </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={"/services"}> services component </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={"/Propsclass"}> Propsclass component </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <Routes>
          <Route path='/' element={<Groot myimg={image}/>} />
          <Route path='/about' element={<Jaipur />} />
          <Route path='/services' element={<Services mydata={details} />} />
          <Route path='/Propsclass' element={<Propsclass mydetils={details}  />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
