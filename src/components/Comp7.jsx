import React from 'react'

const Comp7 = (props) => {

    let handelClick = () =>{
        // alert("hello")
        props.WhatToCall("amey ")
    }

    return (
        <>
            <button onClick={handelClick}>Click Here</button>
        </>
    )
}

export default Comp7