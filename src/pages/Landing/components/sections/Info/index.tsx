import React from 'react';

import OfferItem from '../../OfferItem';
import zdrowie from 'src/assets/img/zdrowie.svg';
import zabawki from 'src/assets/img/zabawki.svg';
import wizyta from 'src/assets/img/wizyta.svg';

import style from './style.scss';

const data = [
    {
        title: 'Nowoczesne wyposażenie',
        image:  zabawki,
        content: 'Dolor sit amet consectetur adipisicing elit. Deserunt facilis voluptatibus alias, repellendus quam doloribus labore vel fugit doloribus unde corporis.',
    },
    {
        title: 'Wizyty specjalistów',
        image:  wizyta,
        content: 'Possimus dignissimos aspernatur praesentium delectus a reiciendis obcaecati, perferendis unde veritatis autem optio doloremque labore vel fugit laboriosam. Culpa voluptatum ut minus?',
    },
    {
        title: 'Zdrowy rozwój',
        image:  zdrowie,
        content: 'Repudiandae, temporibus, sequi, minus doloribus unde corporis eum explicabo ullam quod autem inventore! Maxime quaerat esse laudantium delectus at amet modi provident!',
    },
]

const Info = () => {
    return (
        <section className={style.container}>
            <span className={style.title}>Dlaczego nasza placówka?</span>
            <div className={style.wrapper}>
                {
                    data.map((item: any) => (
                        <OfferItem title={item.title} content={item.content} img={item.image} key={item.title}/>
                    ))
                }
            </div>
        </section>
    );
};

export default Info;
