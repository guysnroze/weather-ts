import React, { useEffect, useState } from "react";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import s from './Header.module.scss'
import Select from 'react-select'

interface Props {

}

const Header = (props: Props) => {
    const [theme, setTheme] = useState('light')
    const options = [
        { value: 'city-1', label: 'Санк-Петербург' },
        { value: 'city-2', label: 'Москва' },
        { value: 'city-3', label: 'Кузнецк' }
    ];

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme === 'dark' ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme === 'dark' ? '#FFF' : '#000',
        })
    }

    function changeThem() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        const root = document.querySelector(':root') as HTMLElement
        
        const components = [
            'body-background',
            'components-background',
            'card-background',
            'card-shadow',
            'text-color',
        ]

        components.forEach(component => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${theme})`
            )
        })
    }, [theme])

    return (
        <div className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id="header-logo" />
                </div>
                <div className={s.title}>React Weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeThem}>
                    <GlobalSvgSelector id="change-them" />
                </div>
                <Select defaultValue={options[0]} styles={colorStyles} options={options} />
            </div>
        </div>
    )
}

export default Header;