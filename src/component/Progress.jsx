import './Progress.css'

export default function Progress({progressValue}) {
    return (
        <>
        <div id="container">
            <div id="bar" style={{width: `${progressValue}%`}} >

            </div>
        </div>
        </>
    )
}