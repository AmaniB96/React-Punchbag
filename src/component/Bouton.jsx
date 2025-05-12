export default function Bouton(role) {
    return (
        <>
        <div>
            {role.DisplayCount}
        </div>
        <button onClick={role.onPunch} >Punch</button>
        </>
    )
}