import { useCounter } from '../hooks/useCounter';


export function CounterCustomHook() {
    const { counter, incrementCounter, decrementCounter, resetCounter } = useCounter();

    return(
        <>
            <h1>Counter con HOOK: { counter }</h1>
            <hr />
            <button className="btn btn-primary" onClick={ () => incrementCounter(5) }>+1</button>
            <button className="btn btn-primary" onClick={ resetCounter }>Reset</button>
            <button className="btn btn-primary" onClick={ () => decrementCounter(5) }>-1</button>
        </>
    );
}