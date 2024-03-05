import React from 'react'
// react props (function arrguments)

import Comp6 from './Comp6'

const Comp5 = () => {


    let doSomething = (name) =>{
        alert(`hello user ! i'm ${name}`)
    }

    let DisplayData = (props) =>{
        return(
            <>
                <h2>hello ! {props.name}.</h2>
                <h2>{props.contact}.</h2>
                
                <button onClick={()=>{
                    props.method(props.name)
                }}>
                    Click Here
                </button>
            </>
        )
    }

    return (
        <>
            <DisplayData name="amey"  contact="9766696550" method={doSomething} />

            <Comp6 data="this is some data that we are sending from comp5" />
        </>
    )
}

export default Comp5