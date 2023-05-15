
import "./main_s.scss";
//import { Link } from "react-router-dom";
import SimpleSlider from "../slider/slider";
import Prepodavatel from "../prepod/prepod";
import InvetorySport from "../inventorySport/inventorySport";

export function Main() {
    return (
      <>
        <div className="main_container">
            
               
            <main className="main">
                
            <div className="top">
            
            <h3>Галерея</h3>
            <div className="bakc">
            <SimpleSlider />
            </div>
            <Prepodavatel />
              <div className="textSnar">
                      <h1>Спортивный инвентарь</h1>
              </div>
           
            <InvetorySport />
           </div>
           <div className="footers"><h3>
            Автор: Артём Хажеев.
            </h3>
        </div>
            </main>
            
            

        </div>
        
          
      </>
    );
  }
  

  export default Main;