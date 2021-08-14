import React from 'react';

import { ReactComponent as Kids } from 'src/assets/img/kids.svg';

import style from './style.scss';


const Recruitment = () => {
    return (
        <div className={style.container}>
            <span className={style.title}>Rekrutacja</span>

            <div className={style.wrapper}>
                <span className={style.text}>Vulputate elementum, ut quisque non. Hendrerit conubia amet, euismod et, hac donec sollicitudin at nullam tempor ullamcorper. Vulputate fringilla, ut erat nulla. Massa litora duis, augue taciti consectetur in. Nullam facilisis, in felis sed tortor. Odio nullam lacus vulputate, vitae scelerisque cursus quis.</span>
                <Kids className={style.kids} />
            </div>
            <span className={style.textCenter}>Integer iaculis litora, adipiscing venenatis, habitant dui cubilia lorem eget est facilisis. Risus aenean, volutpat est nullam. Vitae aliquam nec, imperdiet ullamcorper a felis. Mi volutpat, aenean luctus donec. Imperdiet ipsum convallis quam, vulputate blandit pulvinar consectetur primis.</span>
        </div>
    );
};

export default Recruitment;