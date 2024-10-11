import styles from "./Button.module.css";

const Button = ({ OnButtonClick }) => {
    const btnNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
    return (
        <div className={styles.buttonsContainer}>

            {btnNames.map((btnNames, index) => (
                <button key={index} className={styles.btn} onClick={() => OnButtonClick(btnNames)}>{btnNames}</button>
            ))}

        </div>
    )
}

export default Button; 