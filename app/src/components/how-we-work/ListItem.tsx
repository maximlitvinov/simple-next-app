import React from "react";

import style from "./ListItem.module.css";

interface ListProps {
  circle: number;
  title: string;
  description: string;
}

const ListItem = ({ circle, title, description }: ListProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.circle}>{circle}</div>

      <div className={style.right__section__wrapper}>
        <div className={style.text__block}>
          <p className={style.text__block__title}>{title}</p>
          <p className={style.text__block__main__text}>{description}</p>
        </div>
      </div>
      
    </div>
  );
};

export default ListItem;
