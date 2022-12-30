import { CounterComponent } from "./01-useState/CounterComponent";
import { CounterCustomHook } from "./01-useState/CounterCustomHook";
import { FormWithCustomHookComponent } from "./02-useEffect/FormWithCustomHook/FormWithCustomHookComponent";
import { SimpleFormComponent } from "./02-useEffect/SimpleFormComponent";
import { MultiplesCustomHooks } from "./03-examples/MultiplesCustomHooks";
import { FocusScreenComponent } from "./04-useRef/FocusScreenComponent";
import { Layout } from "./05-useLayoutEffect/Layout";
import { MemorizeComponent } from "./06-memo/MemorizeComponent";
import { Padre } from "./07-tarea-memo/Padre";
import { MemoHook } from "./07-useMemo/MemoHook";
import { CallbackHook } from "./08-useCallback/CallbackHook";
import { TodoAppPage } from "./09-useReducer/TodoAppPage";
import { MainApp } from "./10-useContext/MainApp";


export function HookApp () {
    return (
        <>
            <h1>HookApp</h1>

            {/* useState ejemplos */}
            {/* <CounterComponent /> */}
            {/* <CounterCustomHook /> */}

            {/* useEffect ejemplos*/}
            {/* <SimpleFormComponent /> */}
            {/* <FormWithCustomHookComponent /> */}
            <MultiplesCustomHooks />


            {/* useRef ejemplos */}
            {/* <FocusScreenComponent /> */}

            {/* useLayoutEffect */}
            {/* <Layout /> */}

            {/* Memo ejemplos */}
            {/* <MemorizeComponent /> */}

            {/* useMemo ejemplos */}
            {/* <MemoHook /> */}

            {/* CallbackHook */}
            {/* <CallbackHook /> */}

            {/* Tareas de Memo */}
            {/* <Padre /> */}


            {/* useReducer ejemplos */}
            {/* <TodoAppPage /> */}


            {/* useContext ejemplos */}
            {/* <MainApp /> */}
        </>
    );
}