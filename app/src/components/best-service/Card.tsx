import React from "react";
import Image from "next/image";

import delivery__icon from "../../../assets/icons/delivery.svg";
import stock__icon from "../../../assets/icons/stock.svg";
import package__icon from "../../../assets/icons/package.svg";

import style from "./Card.module.css";

function Card() {
  return (
    <div className={style.card__content}>
      <div className={style.card__img}>
        <Image src={delivery__icon} alt="delivery" />
      </div>
      <div className={style.card__text}>
        <h4 className={style.card__title}>Cargo transportation</h4>
        <p>Buhlercompany transports cargo in a variety of ways.</p>
      </div>
    </div>
  );
}

export default Card;
