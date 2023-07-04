import Link from "next/link";
import Image from "next/image";

import Logo from "../../../assets/img/nav-logo.svg";
import home__icon from "../../../assets/icons/home.svg";
import about__icon from "../../../assets/icons/about.svg";
import contact_icon from "../../../assets/icons/contact.svg";
import testimonials__icon from "../../../assets/icons/testimonials.svg";

import style from "./Nav.module.css";

export function Nav() {
  const navigation: string[] = ["Home", "About", "Contact", "Testimonials"];
  const icons: any = [
    home__icon,
    about__icon,
    contact_icon,
    testimonials__icon,
  ];
  return (
    <nav>
      <div className={style.container}>
        <div className={style.logo__block}>
          <Link href={"/"}>
            <Image src={Logo} alt="Logo" width={70} />
            <p className={style.logo__title}>Buhlercompany</p>
            <p className={style.logo__text}>Buhlercompany is the People</p>
          </Link>
        </div>

        <ul className="flex justify-end flex-wrap">
          {navigation.map((el: string, index: number) => (
            <li className={style.nav__list} key={index}>
                <Link className={style.icon__block} href={`/${el.toLocaleLowerCase()}`}>
                  <Image
                    className={style.icons}
                    src={icons[index]}
                    alt={el}
    
              
                  />
                  {el}
                </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
