import React from "react";

import style from "./BestService.module.css";
import Card from "./Card";

function BestService() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h3 className={style.title}>
          We offer <span>the best service</span>
        </h3>
        <div className={style.card__container}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default BestService;
