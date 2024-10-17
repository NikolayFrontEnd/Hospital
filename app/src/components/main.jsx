import "./main.css"
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import React, { useState, useEffect } from 'react';
import photo2 from '../photos/hh.jpg'
import photo3 from '../photos/doctors.jpg'
import photo4 from "../photos/chat.png"
import { NavLink, Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import Calendar from "./calendar";
//import DashBoard from './DashBoard';
import Avatar from '../photos/bob.jpg';
import axios from 'axios';


const GlobalPage = () =>{
  return(
    <div className = "content">  
    <div className = "leftContent">
       <div className = "activity-container">      
     <div class="image-container img-one">
             <img src={photo2} alt="tennis" />
             <div class="overlay">
               <h3>Hospitals</h3>
             </div>
           </div>
           <div className="cardDoctor">
 <img src= {photo3} alt=""/>
 <div className="text">
   <h2>Doctors from all over the country!</h2>
   <p className = "word">Do you want to find a doctor in a few minutes?
   </p>
 </div>
</div>  

<div class="card">
 <div class="poster"><img src={photo4} alt="Location Unknown"/></div>
 <div class="details">
   <h1>Your helper</h1>


   <p class="desc">
Hello! You can take a short test to make a quick appointment with a doctor!
   </p>
   
   <button className="btn-91">
<span>Start!</span>
</button>
 </div>
</div>
</div>
<div className = "buttonSide"> 
           <div className="left-bottom">
          <div className="weekly-schedule">
           <h1>Join other people's activities!</h1>
           <div className="calendar">
             <div className="day-and-activity activity-one">
               <div className="day">
                 <h1>13</h1>
                 <p>mon</p>
               </div>
               <div className="activity">
                 <h2>Swimming</h2>

               </div>
               <button className="btn2">Join</button>
             </div>
         </div>
         <div className="calendar">
             <div className="day-and-activity activity-one">
               <div className="day">
                 <h1>27</h1>
                 <p>fri</p>
               </div>
               <div class="activity">
                 <h2>General Workout section</h2>
               </div>
               <button className="btn2">Join</button>
             </div>
         </div>
         <div className="calendar">
             <div className="day-and-activity activity-one">
               <div className="day">
                 <h1>17</h1>
                 <p>mon</p>
               </div>
               <div className="activity">
                 <h2>nordic walking</h2>
               </div>
               <button class="btn2">Join</button>
             </div>
         </div>
         <div className="calendar">
             <div className="day-and-activity activity-one">
               <div className="day">
                 <h1>14</h1>
                 <p>tue</p>
               </div>
               <div className="activity">
                 <h2>restorative gymnastics</h2>
               </div>
               <button class="btn2">Join</button>
             </div>
         </div>
         </div> 
         </div>
       

<div className = "rightButton"> 
  <h3 className = "hwords"> How are you right now?</h3>
  <ul className = "ulStyle">
      <li className = "liStyle">
         <input className = "in"  type="radio" name="mcq"/>
         <label>Bad</label>
         <div className="touch">
             <div className="line zero"></div>
             <div className="line one"></div>
             <div className="line two"></div>
             <div className="line three"></div>
             <div className="line four"></div>
             <div className="line five"></div>
             <div className="line six"></div>
             <div className="line seven"></div>
         </div>
     </li>
     <li className = "liStyle">
         <input className = "in" type="radio" name="mcq"/>
         <label>Good</label>
         <div className="touch">
             <div className="line zero"></div>
             <div className="line one"></div>
             <div className="line two"></div>
             <div className="line three"></div>
             <div className="line four"></div>
             <div className="line five"></div>
             <div className="line six"></div>
             <div className="line seven"></div>
         </div>
     </li>
     <li className = "liStyle">
         <input className = "in" type="radio" name="mcq"/>
         <label>Very very good</label>
         <div className="touch">
             <div className="line zero"></div>
             <div className="line one"></div>
             <div className="line two"></div>
             <div className="line three"></div>
             <div className="line four"></div>
             <div className="line five"></div>
             <div className="line six"></div>
             <div className="line seven"></div>
         </div>
     </li>
 </ul>
</div>
</div>
     </div>
     <div className = "rightSide">
     
       <div className = "userInfo">
         <div className = "IconsUser">
           <FaMessage className = "IconL" />
           <FaBell className = "IconR"/>
         </div>
         <Link className ="link" to = "/profile">         
         <div className = "Name">Alexandr {/* {userName} */} </div>
         <div className = "avatar"> <RxAvatar />  </div>
         </Link>
       </div>

       <div className="active-calories">
<h1 style={{ alignSelf: 'flex-start' }}>Full course of treatment</h1>
<div className="active-calories-container">
 <div className="box" style={{ '--i': '85%' }}>
   <div className="circle">
     <h2>80<small>%</small></h2>
   </div>
 </div>
 <div className="calories-content">
   <p><span>Pills today:</span> 4</p>
   <p><span>Pills on this week:</span> 40</p>

 </div>
</div>
</div>

     <div className = "Doctors"> Your last patients: </div>
     <div>
      <div className="doctor-card">
   <div className="photo">
     <RxAvatar /> 
   </div>
   <div className="name">Петренко Вячеслав</div>
 </div>
 <div className="doctor-card">
   <div className="photo">
     <RxAvatar /> 
   </div>
   <div className="name">John Smith</div>
 </div>
 <div className="doctor-card">
   <div className="photo">
     <RxAvatar /> 
   </div>
   <div className="name">Медуза Прохор</div>
 </div> 
 </div>
     </div>
   </div>
  )
}

const Profiles = () => {
  const [num, setNum] = useState(0);
  const [patients, setPatients] = useState([]);
  const [files, setFiles] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Получение списка пациентов
   useEffect(() => {
    // Запрашиваем данные о пациентах
    const token1 = localStorage.getItem('token')
    axios.post('https://backend-3-4sig.onrender.com/recent_patients', {"token":token1})
      .then(response => {       
        const patientData = response.data.map(patient => ({   
          name: patient.username, 
          birth: patient.birth,
          id: patient.user_id
        }));
        console.log("Данные с бэкенда:",patientData );
        setPatients(patientData);
      })
      .catch(error => console.error('Ошибка при загрузке данных о пациентах', error));
  }, []);

  // Функция для перехода на страницу с файлами
  const ChangePage = (patient) => {
   axios.post('https://backend-3-4sig.onrender.com/get_pdfs_list', {"user_id":patient.id})
      .then(response => {
        setFiles(response.data);
        setSelectedPatient(patient);
        setNum(1);
      })
      .catch(error => console.error('Ошибка при загрузке PDF-файлов', error));
  };

  // Функция для скачивания выбранного PDF-файла
  const downloadPDF = (patientId, fileName) => {
    // Создаём динамическую ссылку для скачивания
    axios.post('https://backend-3-4sig.onrender.com/get_pdf', {"user_id":patientId, "filename":fileName},{
                  responseType: 'blob'
               })
               .then(blob => {
                  var url = window.URL.createObjectURL(blob.data)         
                  var a = document.createElement('a');            
                  a.href = url;
                  a.download = fileName;
                  //document.body.appendChild(a); // append the element to the dom --- ya xz zachem eto nado
                  a.click();
                  //a.remove(); // afterwards, remove the element --- ya xz zachem eto nado
               
               })
               .catch(error => {
                  console.error(error);
               });
    /*const link = document.createElement('a');
    link.href = `http://localhost:8000/download_pdf/${patientId}/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);*/
  };

  // Функция, срабатывающая при клике на название файла
  const handleFileClick = (file) => {
    downloadPDF(selectedPatient.id, file);
  };

  return (
    <>
      {num ? (
        <div className="bigBossContainer">
        {/*   <h2>{selectedPatient.name} - PDF Files</h2>    можно добавить и имя пациента, но я пока убрал. мне без имени больше нравится*/}
          
        <div className="container10">
            {files.map((file, index) => (
              <div key={index} className="card10">
             
                  <div className="content10">
                    <h2>{file}</h2>
                    <p>If you want, you can install this file:</p>
                    <button className="aaa" onClick={() => handleFileClick(file)}>DOWNLOAD</button>
                  </div>
                </div>
          
           ))}
       </div>    
        </div>
      ) : (
        <div className="con">
          {patients.map((patient, index) => (
            <div key={index} className="patient">
              <div className="avatar2">
                <img src={Avatar} className="avatar-image" alt="Avatar" />
              </div>
              <div className="nameBlock">
                <p className="NameP">{patient.name}</p>
                <p className="Namep2">Birth Date: {patient.birth}</p>
              </div>
              <div className="bottomBlock">
                <FaUser className="Prof" />
                <FaBriefcaseMedical className="cardss" onClick={() => ChangePage(patient)} />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const Main = () =>{
 /*  const [userName, setUserName] = useState(''); */ // - ТУТ ХРАНИТСЯ ИМЯ, КОТОРОЕ ТЫ ВЫТАЩИШЬ С БЭКА
/*   const [activeIndex, setActiveIndex] = useState(0); */
  const [activeDiv, setActiveDiv] = useState(0)
/*   const handleClick = (index) => {
    setActiveIndex(index); // обновляем состояние при клике на элемент меню
    setActiveDiv(index);
  };
 */
  // Используем useEffect для чтения состояния из localStorage
  const [activeIndex, setActiveIndex] = useState(parseInt(localStorage.getItem('activeIndex')) || 0);
  // Обновляем localStorage каждый раз, когда activeIndex изменяется
  useEffect(() => {
    localStorage.setItem('activeIndex', activeIndex);
  }, [activeIndex]);
  const handleClick = (index) => {
    setActiveIndex(index);
  };
/*   useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:1111/user', { headers: { Authorization: `Bearer ${token}` } });
          setUserName(response.data.name);
        } catch (error) {
          console.error('Ошибка при получении данных пользователя', error);
        }
      }
    };
    fetchUserData();
  }, []); */
  const [count, setCount] = useState(5);
  const Dec = () =>{
    setCount(function(prevCount) {
      return prevCount - 1;
    });;
  }
    return (
        <>
    <div className="container2">
      <main>
      <nav className="main-menu">
  <h1>Medical App</h1>
                <ul>
                <li className={`nav-item ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}>
                  <b></b>
                  <b></b>
                  <NavLink to="/main">
                    <IoMdHome className = "nav-icon" />
                    <span className="nav-text">Home</span>
                  </NavLink>
                </li>
                <li className={`nav-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
                  <b></b>
                  <b></b>
                  <a href="#">
                    <FaUser className = "nav-icon"/>
                    <span className="nav-text">Patients</span>
                  </a>
                </li>
                <li className={`nav-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
                  <b></b>
                  <b></b>
                  <a href="#">
                    <FaBriefcaseMedical className = "nav-icon"/>
                    <span className="nav-text">
Card
                    </span>
                  </a>
                </li>
                <li className={`nav-item ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>
                  <b></b>
                  <b></b>
                  <a href="#">
                    <IoMdSettings className = "nav-icon" />
                    <span className="nav-text">Setting</span>
                  </a>
                </li>
                <li className={`nav-item ${activeIndex === 4 ? 'active' : ''}`} onClick={() => handleClick(4)}>
                  <b></b>
                  <b></b>
                  <a href="#">
                  <FaRegCalendarAlt className = "nav-icon"/>
                    <span className="nav-text">Calendar</span>
                    </a>
                </li>
              </ul>
              </nav>
          {activeIndex === 0 && <div><GlobalPage/></div>}
          {activeIndex === 1 && <div><Profiles/></div>}
          {activeIndex === 2 && <div>
          <button onClick = {Dec}>-</button>  
            {count}
          <button>+</button>
          </div>}
          {activeIndex === 3 && <div>


            <div className = "bigBossContainer"> 

<div className = "container10">
<div className="card10">
  <div className = "content10">
    <h2>Pdf1.pdf</h2>
    <p>If you want, you can install this file:</p>
    <button className="aaa">INSTALL</button>
  </div>
</div>

<div className="card10">
  <div className = "content10">
    <h2>Answ.pdf</h2>
    <p>If you want, you can install this file:</p>
    <button className="aaa">INSTALL</button>
  </div>
</div>

<div className="card10">
  <div className = "content10">
    <h2>Diag.pdf</h2>
    <p>If you want, you can install this file:</p>
    <button className="aaa">INSTALL</button>
  </div>
</div>

<div className="card10">
  <div className = "content10">
    <h2>Pdf2.pdf</h2>
    <p>If you want, you can install this file:</p>
    <button className="aaa">INSTALL</button>
  </div>
</div>


</div>

            </div>


            </div>}
          {activeIndex === 4 && <div className="calendar"><Calendar /></div>}
{/* <Calendar/> */}
      </main>
    </div>
        </>
    )
}
export default Main;
