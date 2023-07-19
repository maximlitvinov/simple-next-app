import React from "react";
import Image from "next/image";

import ListItem from "./ListItem";
import style from "./HowWeWork.module.css";
import Workers from "../../../assets/img/workers.svg";

function HowWeWork() {
  const dataOfList: { circle: number; title: string; description: string }[] = [
    {
      circle: 1,
      title: "Sending an application",
      description:
        "Leave an application on the site, our manager will contact you.",
    },
    {
      circle: 2,
      title: "Contracting",
      description:
        "We conclude an official contract with legal force. We work with legal and physical persons. Payment by bank transfer methods.",
    },
    {
      circle: 3,
      title: "",
      description:
        "Our manager informs you about every stage of cargo movement. You can also track it yourself.",
    },

    {
      circle: 4,
      title: "",
      description:
        "Delivery and shipment of cargo occurs in accordance with the transit time of the company.",
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.left__section}>
          <Image
            className={style.left__section__img}
            src={Workers}
            alt="workers"
          />
        </div>
        <div className={style.flex__right__section}>
          <h3 className={style.title}>How we work</h3>
          {dataOfList.map((el) => (
            <ListItem
            key={el.circle}
              circle={el.circle}
              title={el.title}
              description={el.description}
            />
          ))}
          <div className={style.btn__block}>
            <button>Leave a request</button>
            <button>Join us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;
