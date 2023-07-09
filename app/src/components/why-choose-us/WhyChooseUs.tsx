import React from "react";

import style from "./WhyChooseUs.module.css";

function WhyChooseUs() {
  return (
    <div className={style.wrapper}>
      <div className={style.text__block}>
        <h3 className={style.title}>
          Why choose <span>exactly us</span>
        </h3>
        <p>
          Our transport company <strong>Buhlercompany</strong> provides
          international transport.
        </p>
        <p>
          We transport goods of all types and to all destinations, representing
          one of the leading companies that control the supply chain.
          <strong>Buhlercompany</strong> employees develop and implement the
          latest ideas and solutions in transport organization and management.
        </p>
        <p>
          We provide people and companies with a range of services in a timely
          and guaranteed delivery, constantly improving the level of service,
          introducing new technologies, effectively using internal potential and
          external resources. Thus, the cohesion of a team of professionals is
          perfectly suited to implement a system of mass participation!
        </p>
      </div>
      <div>Image</div>
    </div>
  );
}

export default WhyChooseUs;
