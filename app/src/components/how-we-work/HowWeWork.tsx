import React from "react";
import Image from "next/image";

import Workers from '../../../assets/img/workers.svg'
import style from "./HowWeWork.module.css";

function HowWeWork() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        
        <div className={style.left__section}>
            <Image className={style.left__section__img} src={Workers} alt='workers'/>
        </div>

        <div className={style.right__section}>
          <h3>How we work</h3>
          <div className={style.right__section__wrapper}>
            <div className={style.circle}>1</div>
            <div className={style.text__block}>
              <p className={style.text__block__title}>Sending an application</p>
              <p className={style.text__block__main__text}>
                Leave an application on the site, our manager will contact you.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HowWeWork;
