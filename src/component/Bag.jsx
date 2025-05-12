import { useState } from "react"


export default function Bag() {

const [BagState, SetBagState] = useState("../assets/bag.png")
let Punch = () => {
    
}

    return (
        <>
         <div>
            <img src="../assets/bag.png" alt="" />
         </div>
        </>
    )
    
}