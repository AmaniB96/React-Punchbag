import { useState } from 'react'
import './App.css'
import Bag from './component/Bag'
import Bouton from './component/Bouton'
import Bagimg from './assets/bag.png'
import BurstBagimg from "./assets/bag-burst.png"
import Progress from './component/Progress'
import punchSoundFile from './assets/dspunch.wav'


function App() {
  const PvMax= 100
  const maxPunch= 10
  const[count, setCount] = useState(10)
  const[barState,SetBarState] = useState(PvMax)
  const[scaleState,SetscaleState] = useState(1)

  let punchSound= new Audio(punchSoundFile)

  const Punch = () => {
     if (count <= 0) {
        setCount(maxPunch)
        SetBarState(PvMax)
        SetBagState(Bagimg)
        return
    }

    punchSound.play();

    const newCount = count - 1
    setCount(newCount)
    console.log(newCount)

    if (newCount <= 0) {
      console.log("Bag broke");
      Break();
    };

    SetscaleState(0.7)

    setTimeout(() => {
      SetscaleState(1)
    }, 120);
    
    SetBarState(barState -10)
  
  }

  const[BagState,SetBagState] = useState(Bagimg)
  const Break = () => {
    SetBagState(BurstBagimg)
  }


  return (
        <div>
          <Progress progressValue={barState}></Progress>
          <Bag imagesrc={BagState} scaleValue={scaleState}></Bag>
          <Bouton onPunch={Punch} DisplayCount={count}></Bouton>
        </div>
  )
}

export default App
