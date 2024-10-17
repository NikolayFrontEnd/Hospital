

import Registration from './components/registration';
import FlipBook from './components/medicalCard';
import Main from './components/main'
import Calendar from './components/calendar'
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Servecis";
import { Route, Routes } from "react-router-dom";
import  DashBoard  from "./components/DashBoard";
import Message from "./components/message";
import Tab from "./components/test";
import Profile from './components/Profile'
//import Pdf from './components/AllPDF';
function App() {
  return (
   <>

{/* <Tab/> */}
     <Routes>
     <Route path="/" element={ <Registration/>} />
        <Route path="/main" element={ <Main/>} />
        <Route path="/profile" element={<Profile />} />
{/*         <Route path = "/Allpdf" element = {<Pdf/>} /> */}
      </Routes>

   {/*  <Calendar/> */}


   
       {/*    < Registration /> */}        
{/*     < FlipBook />  */}
{/*  <Message/> */} 
   </>
  );
}

export default App;
