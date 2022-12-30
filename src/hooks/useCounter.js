import { useState } from "react"


export function useCounter(initialValue = 10) {
    const [ counter, setCounter ] = useState(initialValue);

    function incrementCounter(value = 1) {
        setCounter((previusCounter) => previusCounter + value);
    }

    function decrementCounter(value = 1) {
        setCounter((previusCounter) => previusCounter - value);
    }

    function resetCounter() {
        setCounter(() => initialValue);
    }



    return {
        counter,
        decrementCounter,
        incrementCounter,
        resetCounter
    }
}