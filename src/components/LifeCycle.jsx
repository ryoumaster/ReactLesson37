import {useState, useEffect} from 'react'

function TimerComponent(){
    const [count, atualizarCount] = useState(0)

    useEffect(() => {
        const timerId = setInterval(() => {
            atualizarCount(prevCount => prevCount + 1);
        }, 1000)
        return () => {
            clearInterval(timerId);
            console.log("Timer Zerado")
        }
    },[])

    return <h1>{count}</h1>
}


export default TimerComponent