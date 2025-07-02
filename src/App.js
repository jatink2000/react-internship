import logo from './logo.svg';
import './App.css';
import { Groot } from './components/Home';
import { Jaipur } from './components/About';
import { Services } from './components/Services';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Propsclass } from './components/Propsclass';

import image from "./images/image1.jpg"
import { Allstudents } from './components/Allstudents';
import Hooks from './components/Hooks';
import Usestate from './components/Usestate';
import Useefferct from './components/Useefferct';
import Usenavigate from './components/Usenavigate';
import Productdetails from './components/Productdetails';
import Component1 from './components/usecontext/Component1';
import Signup from './components/Signup';
import Useparams from './components/Useparams';
import { Homeclass } from './components/Homeclass';
import { Servies } from './components/Servies';

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
        <Link to={"/Allstudents"}> Allstudents component </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={"/Hooks"}> Hooks component </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={"/Usestate"}> Usestate component </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={"/Useefferct"}> Useeffect component </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={"/Usenavigate"}> Usenavigate component </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={"/Component1"}> Component1 component </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={"/Signup"}> Signup component </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={"/Useparams/jatin kumar/jaipur"}> Useparams component </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={"/Homeclass"}> Homeclass component </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={"/Servies"}> Servies component </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <Routes>
          <Route path='/' element={<Groot myimg={image}/>} />
          <Route path='/about' element={<Jaipur />} />
          <Route path='/services' element={<Services mydata={details} />} />
          <Route path='/Propsclass' element={<Propsclass mydetils={details}  />} />
          <Route path='/Allstudents' element={<Allstudents/>} />
          <Route path='/Hooks' element={<Hooks/>} />
          <Route path='/Usestate' element={<Usestate/>} />
          <Route path='/Useefferct' element={<Useefferct/>} />
          <Route path='/Usenavigate' element={<Usenavigate/>} />
          <Route path='/Productdetails' element={<Productdetails/>} />
          <Route path='/Component1' element={<Component1/>} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='/Useparams/:name/:city' element={<Useparams/>} />
          <Route path='/Homeclass' element={<Homeclass/>} />
          <Route path='/Servies' element={<Servies/>} />





        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
