export default function Bouton(role) {
    return (
        <>
        <div>
           <button onClick={role.onPunch} > {role.DisplayCount <= 0 ? "Restart" : "Punch"} </button>
        </div>
        </>
    )
}