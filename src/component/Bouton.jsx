import Break from './Bag'

export default function Bouton(onPunch, DisplayCount) {
    return (
        <>
        <div>
            {DisplayCount}
        </div>
        <button onClick={onPunch} >Punch</button>
        </>
    )
}