// importing components
import Comp1 from "./components/Comp1"
import Comp2 from "./components/Comp2"
import Comp3 from "./components/Comp3"

// import bootstarp for all components

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

// importing components style
import "./components/style.css"

// inline css in react

let styleObj1 =  { color:"red" , background: "yellow"} 


const App = () => {
    return (
        <>
            <h1 style={styleObj1}>Welcome to react page ! </h1>
            {/* {} this is used for writting js in html */}
            <h2>This is App.jsx page { 100 + 200 } </h2>
            <h2>my name is Code-Hopper</h2>

            <Comp1 />
            <Comp2 />
            <Comp3 />

        </>
    )
}

// when we create a custom function that is going render something it must have a capital initial

export default App