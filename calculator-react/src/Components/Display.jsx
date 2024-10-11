import styles from "./Display.module.css";

const Display = ({ DisplayCalVal }) => {
    return (
        <input type="text" className={styles.display} value={DisplayCalVal} readOnly />
    )
}

export default Display;