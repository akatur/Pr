
import "./header_s.scss";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";

export function Header() {
    return (
       <>
        <div className="header_container">
            
               
            <header className="header">
               
            <div className='header'>
            <div id = "logo" className="logo" >
               <img className="logo" src={logo}  alt="logo"></img> 
            </div>
           
            </div>



            </header>
           
            
        </div>


        </>
    );
}
export default Header;