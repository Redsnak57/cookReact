import styles from "./HeaderMenu.module.scss"

export default function HeaderMenu(){
    return (
        <ul className={`card ${styles.menuContainer} p-20`}>
            <li>Wishlite</li>
            <li>Connexion</li>
        </ul>
    )
}