import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './message.module.css';
import './Navbar.css';




const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchEvents = async () => {
      try {
        // Загрузка принятых событий
        const token1 = localStorage.getItem('token')
        const response = await axios.post('https://backend-3-4sig.onrender.com/events_docs', {"token":token1});
        const acceptedEvents = response.data.map(event => ({ ...event }));
      
        // Загрузка предложенных событий
        const suggestedResponse = await axios.post('https://backend-3-4sig.onrender.com/suggested_events',{"token":token1});
        const  suggestedEvents= suggestedResponse.data.map(event => ({ ...event, color: '#FFA500' }));
   
        // Объединение событий
        setEvents([...acceptedEvents, ...suggestedEvents]);
      } catch (error) {
        
        console.error('Ошибка при получении данных о событиях', error);
      } 
    };
    fetchEvents();
  }, []);
  
  const handleDateClick = (arg) => {
    console.log("Дата клика", arg.dateStr);
  };

  const handleEventClick = (clickInfo) => {
    // Проверяем, что цвет события жёлтый
    if (clickInfo.event.backgroundColor === '#FFA500') { 
      setSelectedEvent(clickInfo.event);
      setModalOpen(true);
    } else {
      
      console.log('Это событие уже принято, действие не требуется.');
    }
  };

  const Window = ({ event, closeModal }) => {
    const handleAccept = async () => {
      try {
        const response = await axios.post(`https://backend-3-4sig.onrender.com/conf`, {"token":localStorage.getItem('token') ,"idd":event.id});
   
        closeModal();
      } catch (error) {
        console.error('Ошибка при принятии события:', error);

      }
    };
    const handleReject = async () => {
      try {
        const response = await axios.post(`https://backend-3-4sig.onrender.com/reject`, {"token":localStorage.getItem('token') ,"idd":event.id});

        console.log(response.data); 
        closeModal();
      } catch (error) {
        console.error('Ошибка при отказе от события:', error);

      }
    };
  
         


    const formatDate = (dateStr) => {
      const date = new Date(dateStr);
      return date.toLocaleString('ru', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    };
  
    return (
      <>
        <div className="modalBackground">
      <div className={styles.gridS}>
        <div className={styles.block}>
          <div className={styles.name}>{/*Cобытие: {event.title} */}  {event.extendedProps.username}</div>
         
          <div className={styles.time}>
            Time: {event.allDay ? 'Весь день' : `${formatDate(event.start)}${event.end ? ` - ${formatDate(event.end)}` : ''}`}
          </div>
          <div className={styles.btnGroup}>
          <button className={styles.btn} onClick={handleAccept}><span>Accept</span></button>
            <button className={styles.btn2} onClick={handleReject}><span>Reject</span></button>
          </div>
        </div>
      </div>
    </div>
      </>
    );
  };
  

  return (
    <>
<style>
      {`
        .fc-event {
          cursor: pointer;
        }
      `}
    </style>
 
       <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        events={events}
        eventClick={handleEventClick} 
        
      />

 {modalOpen && <Window event={selectedEvent} closeModal={() => setModalOpen(false)} />}
    </>
  );
};
export default Calendar;



