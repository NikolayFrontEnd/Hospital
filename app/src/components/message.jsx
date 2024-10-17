import styles from './message.module.css';
import React from 'react';
const Message = () =>{
  const [isOpen, setIsOpen] = React.useState(false);


  const openModal = () => setIsOpen(true);


  const closeModal = () => setIsOpen(false);
    return (
        <>
      <div>
         <div className = {styles.gridS}> 
           <div className = {styles.block}>     
           <div className={styles.name}>Майснер Александра Дмитриевна</div>
           <div className = {styles.time}>Time: суббота. 23 марта. 11 часов</div>
           <div className = {styles.btnGroup}>       
           <button className = {styles.btn}><span>Accept</span></button>
           <button className = {styles.btn2}><span>Reject</span></button>
           </div>
           </div>
        </div> 

{/* <div>
      <button onClick={openModal}>Открыть модалку</button>
      {isOpen && (
        <dialog open>
          <h2>Имя Фамилия Отчетсво</h2>
          <p>Time: Cуббота. 23 марта. 11 часов </p>
          <footer className = {styles.btnGroup}>
          
            <button onClick={closeModal} className = {styles.btn}><span>Accept</span></button>
           <button className = {styles.btn2}><span>Reject</span></button>
          </footer>
        </dialog>
      )}
    </div> */}


      </div>
        </>
    )
}
export default Message;