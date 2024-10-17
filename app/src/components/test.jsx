import './Navbar.css';
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
const Tab = ()=> {
    return (
        <>
        <div className = "container">
            <div className = "tabs">
 <input id = "home" type = "radio" name = "group" checked/> 
 <input id = "about" type = "radio" name = "group"/> 
 <input id = "user" type = "radio" name = "group"/> 
 <input id = "message" type = "radio" name = "group"/> 
 <div className = "icon">
    <label for = "home">  <IoMdHome /></label>
    <label for = "about"> <IoMdSettings/></label>
    <label for = "user">  <FaUser /></label>
    <label for = "message"> <FaMessage/></label>
    <div className = "indicator"></div>
 </div>
 <div className = "content" >  </div>
            </div>
        </div>
        </>
    )
}
export default Tab;