<<<<<<< HEAD
// import { createContext, useState } from "react";

import { createContext, useContext, useState } from "react";

// export let CounterContext = createContext(0);

// export default function CounterContextProvider(props) {
//   const [counter, setCounter] = useState(0);

//   return (
//     <CounterContext.Provider value={{ counter, setCounter }}>
//       {props.children}
//     </CounterContext.Provider>
//   );
// }

export let CounterContext = createContext(0)
export default function CounterContextProvider(props) {
    const [counter, setCounter] = useState(0)

    function countChange(){
        setCounter(Math.floor(Math.random()*100))
    }
    return <CounterContext.Provider value={{ counter, setCounter,countChange }} >
        {props.children}
    </CounterContext.Provider>
=======
// import { createContext, useState } from "react";

import { createContext, useContext, useState } from "react";

// export let CounterContext = createContext(0);

// export default function CounterContextProvider(props) {
//   const [counter, setCounter] = useState(0);

//   return (
//     <CounterContext.Provider value={{ counter, setCounter }}>
//       {props.children}
//     </CounterContext.Provider>
//   );
// }

export let CounterContext = createContext(0)
export default function CounterContextProvider(props) {
    const [counter, setCounter] = useState(0)

    function countChange(){
        setCounter(Math.floor(Math.random()*100))
    }
    return <CounterContext.Provider value={{ counter, setCounter,countChange }} >
        {props.children}
    </CounterContext.Provider>
>>>>>>> 4bd04e17803f649796db74775bc7235f22ecff85
}