import { useState } from "react";
import "./inventorySport_s.scss";
import {CSSTransition} from 'react-transition-group';

import jim from "../img/jim.jpg";
import kak from  "../img/kak.jpg";
import prof from  "../img/prof.jpg";
import skam from  "../img/skam.jpg";
import kok from  "../img/kok.jpg";
import tek from  "../img/tek.jpg";
import tyrn from  "../img/tyrn.jpg";
import tyrnik from  "../img/tyrnik.jpg";
import teh from  "../img/teh.jpg";
import pris from  "../img/pris.jpg";

import zad3 from  "../img/zad3.jpg";
import teh3 from  "../img/teh3.jpg";
import tehpris from  "../img/tehpris.jpg";
import zadpres from  "../img/zadpres.jpg";

export function InvetorySport() {

    const [show,setShow] = useState(false);
    const [show1,setShow1] = useState(false);
    const [show2,setShow2] = useState(false);
    const [show3,setShow3] = useState(false);


    return (
       <><div className="pol"></div>
        <div className="invetory_container2">

        <div className="invetory">
            <div>
                <p className="jim_text">Скамья для жима</p>
                <img className="jim" src={jim}  alt="logo"></img>
            </div>

            <div>
                <p className="jim_text">Назначенние:</p>
                <p className="jimnaz_text">Скамья для жима является основным и обязательным 
                тренажером в спортзале и дома. Конкурировать по важности может только силовая рама
                 или стойка, а также несколько других тренажеров. Очевидно, что она так необходима,
                 потому что позволяет выполнять больше половины упражнений в зале.Речь идет не только о стандартных упражнениях, 
                 сюда относятся и разные виды жима штанги, разводка с гантелями, можно делать выпады и,
                  что удивительно, кардиоупражнения. </p>
                 
                  <button onClick={() => setShow(!show)} className="btnjim">
                 {show ? 'Скрыть' : 'Подробнее'}
                  </button>

            </div>

        </div>



        <CSSTransition in={show} classNames="alert" timeout={300} unmountOnExit>

        <div className="invetory alert">

             <div id="dom">
                <p className="jim_text">Задействующие мышцы</p>
                <img className="jim" src={kak}  alt="logo"></img>
            </div>

            <div id="dom">
                <p className="jim_text">Техника выполнения:</p>
                <img className="jim" src={prof}  alt="logo"></img>
            </div>
            
        </div>

        </CSSTransition>

        </div>
{/*  */}<div className="pol"></div>
        <div className="invetory_container2">

<div className="invetory">
    <div>
        <p className="jim_text">Наклонная скамья</p>
        <img className="jim" src={skam}  alt="logo"></img>
    </div>

    <div>
        <p className="jim_text">Назначенние:</p>
        <p className="jimnaz_text"> Наклонная cкамья, используемая для спортивных упражнений, прежде всего, 
        характеризуется удобством в использовании и высокой эффективностью. 
        Универсальность данного оборудования обусловлена тем, 
        что оно с успехом может применяться в различных упражнениях, 
        в том числе для занятий с гантелями и штангой, 
        работой над мышцами спины и брюшного пресса и т.д.. </p>
         
          <button onClick={() => setShow1(!show1)} className="btnjim">
         {show1 ? 'Скрыть' : 'Подробнее'}
          </button>

    </div>

</div>



<CSSTransition in={show1} classNames="alert" timeout={300} unmountOnExit>

<div className="invetory alert">

     <div id="dom">
        <p className="jim_text">Задействующие мышцы</p>
        <img className="jim" src={kok}  alt="logo"></img>
    </div>

    <div id="dom">
        <p className="jim_text">Техника выполнения:</p>
        <img className="jim" src={tek}  alt="logo"></img>
    </div>
    
</div>

</CSSTransition>

</div>
<div className="pol"></div>
{/*  */}
<div className="invetory_container3">

<div className="invetory">
    <div>
        <p className="jim_text">Турник</p>
        <img className="jim" src={tyrn}  alt="logo"></img>
    </div>

    <div>
        <p className="jim_text">Назначенние:</p>
        <p className="jimnaz_text"> Выполнение подтягиваний на турнике − один из наиболее действенных способов накачать спинные мышцы. 
        Вы работаете с собственным весом, не используя дополнительные снаряды − гантели, штанги и т. д. Только после освоения техники выполнения этого упражнения можно переходить к более сложным действиям.
</p>
         
          <button onClick={() => setShow2(!show2)} className="btnjim">
         {show2 ? 'Скрыть' : 'Подробнее'}
          </button>

    </div>

</div>



<CSSTransition in={show2} classNames="alert" timeout={300} unmountOnExit>

<div className="invetory alert">

     <div id="dom">
        <p className="jim_text">Задействующие мышцы</p>
        <img className="jim" src={tyrnik}  alt="logo"></img>
    </div>

    <div id="dom">
        <p className="jim_text">Техника выполнения:</p>
        <img className="jim" src={teh}  alt="logo"></img>
    </div>
    
</div>

</CSSTransition>

</div>

{/*  */}



<div className="invetory_container3">

<div className="pol"></div>

<div className="invetory">
    <div>
        <p className="jim_text">
            Снаряд для приседаний
        </p>
        <img className="jim" src={pris}  alt="logo"></img>
    </div>

    <div>
        <p className="jim_text">Назначенние:</p>
        <p className="jimnaz_text"> Если говорить коротко, то это подъем штанги (или другого отягощения) с пола, выполняемый за счет работы мышц ног и спины. 
        Это упражнение отлично способствует набору мышечной массы, увеличению силовых показателей, так как здесь мы можем работать с серьезными весами, 
        задействуя при этом практически все мышечные группы нашего организма. 
       </p>
         
          <button onClick={() => setShow3(!show3)} className="btnjim">
         {show3 ? 'Скрыть' : 'Подробнее'}
          </button>

    </div>

</div>



<CSSTransition in={show3} classNames="alert" timeout={300} unmountOnExit>

<div className="invetory alert">

     <div id="dom">
        <p className="jim_text">Задействующие мышцы</p>
        <img className="jim" src={tehpris}  alt="logo"></img>
    </div>

    <div id="dom">
        <p className="jim_text">Техника выполнения:</p>
        <img className="jim" src={zadpres}  alt="logo"></img>
    </div>
    
</div>

</CSSTransition>

</div>


        </>
    );
}
export default InvetorySport;