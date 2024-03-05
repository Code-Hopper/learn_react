import { React, useState } from 'react'

import { FaHeart } from "react-icons/fa";


// useState ,  this creates variables and then those variables are called as state variables, state variable does have their privious values and then they replace with new value.

const Comp9 = () => {

    // syntac for creating a state variable

    // scope [ variable, handler ] = useState(initial)

    let [like, setLike] = useState(0)

    let [glow , setGlow ] = useState(false)

    let handelClick = () => {
        // alert()

        // setLike( ()=>{
        //     return like + 1
        // } )

        // setLike( ()=>{
        //     return like + 1
        // } )

        // setLike( (prev)=>{
        //     return prev + 1
        // } )

        // setLike( (prev)=>{
        //     return prev + 1
        // } )

        // setLike( (prev)=>{
        //     return prev + 1
        // } )

        setLike((prev) => {
            return prev + 1
        })

        setGlow(true)

        setTimeout(()=>{
            setGlow(false)
        },200)


    }

    return (
        <>
            <div className='like-container w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
                <div className='like-counter'>
                    <h1 className='count'>{like}</h1>
                    <FaHeart className={ glow ? "heart heartGlow" : "heart" } />
                </div>
                <button onClick={handelClick} className='btn btn-outline-danger d-flex justify-content-center align-items-center gap-1'>
                    Like  <FaHeart />
                </button>
            </div>
        </>
    )
}

export default Comp9