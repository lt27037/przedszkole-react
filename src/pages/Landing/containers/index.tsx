import React from 'react';

import Main from '../components/sections/Main';
import Info from '../components/sections/Info';
import Mission from '../components/sections/Mission';

import style from './style.scss';

const Landing = () => {
    return (
        <div className={style.container}>
            <Main />
            <Info />
            <Mission />
        </div>
    );
};

export default Landing;
