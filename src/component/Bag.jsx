import "./Bag.css"


export default function Bag(props) {

    return (
         <div>
           <img src={props.imagesrc} style={{scale: `${props.scaleValue}`}} alt="" />
         </div>
    )
    
}