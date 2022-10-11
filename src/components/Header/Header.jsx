import styles from "./Header.module.scss"
import logo from "../../assets/img/logo.jpg"
import { useState } from "react";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";

export default function Header() {

  const [showMenu, setShowMenu] = useState(false)
  // const handleClick = () => setShowMenu(!showMenu)

  return (
    <header className={`${styles.header} d-flex align-items-center`}>
        <div className="flex-fill">
            <img src={logo} alt="Logo Cookchef" />
        </div>
        <ul className={styles.headerList}>
            <button className="mr-5 btn btn-reverse-primary">
                <i class="fa-solid fa-heart mr-5"></i>
                <span className="mr-5">Whislist</span>
            </button>
            <button className="btn btn-primary">Connexion</button>
        </ul>
        <i onClick={() => setShowMenu(true)} className={`fa-solid fa-bars ${styles.headerXs}`}></i>
        { showMenu && 
          <>
            <div onClick={() => setShowMenu(false)} className="calc"></div>
            <HeaderMenu />
          </>
        }
    </header>
  );
}
