import React from "react";
import Image from "next/image";

import style from "./Card.module.css";

interface Card {
  title: string;
  text: string;
  img: any;
}

function Card({ title, text, img }: Card) {
  return (
    <div className={style.card__content}>
      <div className={style.card__img}>
        <Image className={style.card__icon} src={img} alt={`icon${title}`} />
        <h4 className={style.card__title}>{title}</h4>
      </div>

      <div className={style.card__text}>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;
