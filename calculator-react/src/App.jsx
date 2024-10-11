import styles from './App.module.css'
import Display from './Components/Display'
import Button from "./Components/Button"
import { useState } from 'react'

function App() {

  let [CalVal, setCalVal] = useState([]);
  const ButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    }
    else if (buttonText === "=") {
      const result = eval(CalVal);
      setCalVal(result);
    }
    else {
      const newDisplayValue = CalVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display DisplayCalVal={CalVal}></Display>
      <Button OnButtonClick={ButtonClick}></Button>
    </div >
  )
}

export default App
