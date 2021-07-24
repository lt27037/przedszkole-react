import React from 'react';

import OfferItem from '../../OfferItem';
import zdrowie from '../../../../../assets/img/przedszkole4.svg';
import zabawki from '../../../../../assets/img/przedszkole5.svg';
import wizyta from '../../../../../assets/img/przedszkole3-2.svg';

import style from './style.scss';

const data = [
    {
        title: 'Nowoczesne wyposażenie',
        image:  wizyta,
        content: 'Dolor sit amet consectetur adipisicing elit. Deserunt facilis voluptatibus alias, repellendus quam doloribus labore vel fugit.',
    },
    {
        title: 'Wizyty specjalistów',
        image:  zabawki,
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
        <section className={style.conteiner}>
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
