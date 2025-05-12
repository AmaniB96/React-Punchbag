import { useState } from 'react'
import './App.css'
import Bag from './component/Bag'
import Bouton from './component/Bouton'
import Bagimg from './assets/bag.png'
import BurstBagimg from "./assets/bag-burst.png"

function App() {
  const[count, setCount] = useState(5)
  const Punch = () => {
    setCount(count -1)
    console.log(count)
  }

  const[BagState,SetBagState] = useState(Bagimg)
  const Break = () => {
    SetBagState(BurstBagimg)
  }

  return (
        <div>
          <Bag imagesrc={BagState}></Bag>
          <Bouton onPunch={Punch} DisplayCount={count}></Bouton>
        </div>
  )
}

export default App
