
import "./prepod_s.scss";

import kobzev from "../img/kobzev.jpg";

export function Prepodavatel() {
    return (
       <>
        <div className="prepodavatel_container">

        <div className="prepod">

        <div className=" prepod_block">
        <h1 className="prep_text">Преподаватель  
        <p>Сергей Сергеевич Кобзев – учитель физической культуры.С самого детства я занимаюсь спортом. В 11 лет пришел в греблю на каноэ. Был многократным призером и чемпионом первенства по гребле и чемпионатов России.
        👨‍🎓Когда я закончил школу, было огромное желание поступить в ЧЕЛГУ на психологию или управление предприятия по отраслям. Тренер по гребле посоветовал подать документы в ЧГПУ (педагогический университет), туда и привела меня дорога.
        На третьем курсе, когда была первая практика я понял, что это МОЕ.

        </p>
        </h1>
        <img className="kob_img" src={kobzev}  alt="logo"></img>
        </div>

        </div>

        </div>


        </>
    );
}
export default Prepodavatel;