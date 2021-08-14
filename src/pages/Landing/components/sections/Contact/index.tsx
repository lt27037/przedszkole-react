import React from 'react';

import logo from '../../../../../assets/img/logo.svg'

import style from './style.scss';

const Contact = () => {
    return (
        <section className={style.container}>
            <span className={style.title}>Skontaktuj się z nami!</span>
            <div className={style.wrapper}>
                <div className={style.box}>
                    <span className={style.label}>Kontakt</span>
                    <span className={style.text}>+48 645 674 568</span>
                    <span className={style.text}>biuro@stokrotka.glogow.pl</span>
                </div>
                <div className={style.box}>
                    <span className={style.label}>Adres</span>
                    <span className={style.text}>ul. Stawna 8</span>
                    <span className={style.text}>67-200 Głogów</span>
                </div>
                <div className={style.box}>
                <span className={style.label}>Godziny otwarcia</span>
                <span className={style.text}>Poniedziałek - Piątek</span>
                <span className={style.text}>6:30 - 16:30</span>
                </div>
            </div>
            <div className={style.logoWrapper}>
                <img alt={'Logo'} src={logo} className={style.logo} />
            </div>
        </section>
    );
};

export default Contact;
