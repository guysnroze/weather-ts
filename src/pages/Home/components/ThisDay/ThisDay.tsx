import React from "react";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../store/types/types";
import s from '../ThisDay/ThisDay.module.scss'

interface Props {
    weather: Weather
}

const ThisDay = ({weather}: Props) => {
    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block_wrapper}>
                    <div className={s.this__degrees}>20°</div>
                    <div className={s.this__day_name}>Сегодня</div>         
                </div>
                <GlobalSvgSelector id="sun"/>
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__time}>
                    Время: <span>23:33</span>
                </div>
                <div className={s.this__city}>
                    Время: <span>Санкт-Петербург</span>
                </div>
            </div>
        </div>
    )
}

export default ThisDay;