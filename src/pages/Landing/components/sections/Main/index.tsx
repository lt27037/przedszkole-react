import React from 'react';

import background from '../../../../../assets/img/tło_testowe.svg';
import logo from '../../../../../assets/img/logo-biale.svg';

import style from './style.scss';

const Main = () => {
    return (
        <section className={style.container}>
            <img alt={'background image'} src={background} className={style.background} />
            <img alt={'Logo'} src={logo} className={style.logo} />
            <div>
                <span className={style.label}>Rok szkolny 2021/2022</span>
                <h1 className={style.title}>Rekrutacja</h1>
                <button className={style.button}>Zobacz szczegóły</button>
            </div>
        </section>
    )
}

export default Main;
