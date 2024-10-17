import React from 'react';
import p from '../photos/profile.png';
import v from '../video/mixkit-waves-coming-to-the-beach-5016-medium.mp4';
import './prof.css'
const Profile = () =>{
    return(<div className = "bod">
        <div >
         
   <div className = "card2"> 
<div className = "box2">  
<div className = "imgBx"> 
<video src = {v}  autoPlay muted loop />

</div>
</div>



           
<div className = "box2">  
<div className = "content2">
  <h2>Maxim Etofeev <br/><span>Dantist</span>  </h2>
  <ul>
    <li>Ages <span>62</span></li>
    <li>Town <span>Donetsk</span></li>
    <li>Стаж <span>6 лет</span></li>
  </ul>
  <button>Patients</button>
</div>
</div>


<div className = "circle2">  

<div className = "imgBx"> 
<img src = {p} />
</div>
</div>
</div>
</div>
</div>
    )
} 
export default Profile;