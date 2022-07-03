import React from "react";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import s from '../Home/Home.module.scss'
import Days from "./components/Days/Days";

interface Props {

}

const Home = (props: Props) => {
    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay/>  
                <ThisDayInfo/>
            </div>
            <Days/>
        </div>
    )
}

export default Home;