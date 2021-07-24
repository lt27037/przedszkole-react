import React from 'react';

import style from './style.scss';

type OfferItemProps = {
    title: string
    img: string
    content: string
}
const OfferItem = (props: OfferItemProps) => {
    const {title, img, content} = props;
    return (
        <div className={style.container}>
            <span className={style.label}>{title}</span>
            <img alt={'thumbnail'} src={img} className={style.image} />
            <p className={style.text}>{content}</p>
        </div>
    );
};

export default OfferItem;
