import React from "react";
import s from './Days.module.scss'
import { Day } from './Days'
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";

interface Props {
    days: Day
}

const Card = ({days}: Props) => {
    const {day, day_info, icon_id, degree_day, degree_night, info} = days
    return (
        <div className={s.card}>
            <div className={s.day}>{day}</div>
            <div className={s.day__info}>{info}</div>
            <div className={s.img}>
                <GlobalSvgSelector id={icon_id}/>
            </div>
            <div className={s.degree__day}>{degree_day}</div>
            <div className={s.degree__night}>{degree_night}</div>
            <div className={s.info}>{day_info}</div>   
        </div>

    )
}

export default Card;