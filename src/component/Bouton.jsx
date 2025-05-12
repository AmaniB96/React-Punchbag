export default function Bouton(role) {
    return (
        <>
        <div>
           <button onClick={role.onPunch} >Punch</button>
        </div>
        
        </>
    )
}