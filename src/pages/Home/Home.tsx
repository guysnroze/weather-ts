import React, { useEffect } from "react";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import s from '../Home/Home.module.scss'
import Days from "./components/Days/Days";
import { useCustomDispatch, useCustomSelector } from "../../hooks/useCustomDispatch";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { selectCurrentWeatherData } from "../../store/selectors";

interface Props {}

const Home = (props: Props) => {
    const dispatch = useCustomDispatch()

    const {weather} = useCustomSelector(selectCurrentWeatherData)

    useEffect(() => {
       dispatch(fetchCurrentWeather('paris')) 
    }, [])

    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay weather={weather}/>  
                <ThisDayInfo/>
            </div>
            <Days/>
        </div>
    )
}

export default Home;