import { useState } from 'react'
import './App.css'
import Bag from './component/Bag'
import Bouton from './component/Bouton'
import Bagimg from './assets/bag.png'
import BurstBagimg from "./assets/bag-burst.png"
import Progress from './component/Progress'

function App() {
  const PvMax= 100
  const[count, setCount] = useState(10)
  const[barState,SetBarState] = useState(PvMax)

  const Punch = () => {
     if (count <= 0) {
      return; 
    }
    const newCount = count - 1
    setCount(newCount)
    console.log(newCount)
    if (newCount <= 0) {
      console.log("Bag broke");
      Break();
    };

    SetBarState(barState -10)
  
  }


  const[BagState,SetBagState] = useState(Bagimg)
  const Break = () => {
    SetBagState(BurstBagimg)
    
  }


  return (
        <div>
          <Progress progressValue={barState}></Progress>
          <Bag imagesrc={BagState}></Bag>
          <Bouton onPunch={Punch} DisplayCount={count}></Bouton>
        </div>
  )
}

export default App
