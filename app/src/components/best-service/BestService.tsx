import React from "react";

import style from "./BestService.module.css";
import Card from "./Card";

import delivery__icon from "../../../assets/icons/delivery.svg";
import stock__icon from "../../../assets/icons/stock.svg";
import package__icon from "../../../assets/icons/package.svg";

function BestService() {
  const cardObj: { title: string; text: string; img: unknown }[] = [
    {
      title: "Cargo transportation",
      text: "Buhlercompany transports cargo in a variety of ways.",
      img: delivery__icon,
    },
    {
      title: "Cargo storage",
      text: "Buhlercompany provides quality storage services.",
      img: stock__icon,
    },
    {
      title: "Shipment transfer",
      text: "Buhlercompany provides quality shipping of small-sized cargo.",
      img: package__icon,
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h3 className={style.title}>
          We offer <span>the best service</span>
        </h3>
        <div className={style.card__container}>
          {cardObj.map((el) => (
            <Card key={el.title} title={el.title} text={el.text} img={el.img} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestService;
