import React from "react";
import Card from "./Card";
import s from './Days.module.scss'
import Tabs from "./Tabs";

interface Props { }

export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    degree_day: string;
    degree_night: string;
    info: string;
}

const Days = (props: Props) => {
    const days: Day[] = [
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'sun',
            degree_day: '+18',
            degree_night: '+15',
            info: 'Солнце',
        },
        {
            day: 'Завтра',
            day_info: '29 авг',
            icon_id: 'small_rain_sun',
            degree_day: '+18',
            degree_night: '+15',
            info: 'небольшой дождь и солнце',
        },
        {
            day: 'Ср',
            day_info: '30 авг',
            icon_id: 'small_rain',
            degree_day: '+18',
            degree_night: '+15',
            info: 'небольшой дождь',
        },
        {
            day: 'Чт',
            day_info: '31 авг',
            icon_id: 'mainly_cloudy',
            degree_day: '+18',
            degree_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Пт',
            day_info: '1 сен',
            icon_id: 'rain',
            degree_day: '+18',
            degree_night: '+15',
            info: 'Дождь',
        },
        {
            day: 'Сб',
            day_info: '2 сен',
            icon_id: 'mainly_cloudy',
            degree_day: '+18',
            degree_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Вс',
            day_info: '3 сен',
            icon_id: 'mainly_cloudy',
            degree_day: '+18',
            degree_night: '+15',
            info: 'Облачно',
        },
    ]
    return (
        <>
        <Tabs />
            <div className={s.days}>
                {days.map((day: Day) => (
                    <Card days={day} key={day.day} />
                ))}
            </div>
        </>
    )
}

export default Days;