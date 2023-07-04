import React from "react";
import Image from "next/image";

import style from "./Header.module.css";

import ImgGirl from "../../../assets/img/header-girl.svg";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.content__right}>
          <div className={style.header__text}>
            <p>
              We are a close-knit team of like-minded people working with
              pleasure and interest.
            </p>
            <p className={style.grey__text}>
              The goal of our work is the trust and happy smiles of our
              customers. We are ahead of the market, constantly discovering new
              opportunities for life and business.
            </p>
          </div>

          <div className={style.header__buttons}>
            <button className={style.header__btn}>Contact us</button>
            <button className={style.header__btn}>Join us</button>
          </div>
          <div className={style.stats}>
            <div className={style.stats__criteria}>
              <p className={style.quantity}>160K</p>
              <p className={style.stats__text}>Delivered parcels</p>
            </div>
            <div className={style.stats__criteria}>
              <p className={style.quantity}>25K</p>
              <p className={style.stats__text}>Clients</p>
            </div>
            <div className={style.stats__criteria}>
              <p className={style.quantity}>400</p>
              <p className={style.stats__text}>Workplaces</p>
            </div>
          </div>
        </div>
        <div className={style.content__left}>
          <Image className={style.content__img} src={ImgGirl} alt="Girl" width={550}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
