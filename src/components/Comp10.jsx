import React, { useState } from 'react'

const Comp10 = () => {

    let [data, setData] = useState("")

    let handelSubmit = (event) => {
        event.preventDefault()

        console.log(event)

        alert()
    }

    let handelChange = (event) => {

        console.log(event.target.value)
        console.log(event.target.name)

        console.log(typeof(event.target.value))

        // if (typeof(event.target.value) == "number") {

        //     console.log("number input !")

        // } else {
        //     setData(event.target.value)
        // }

        if(data.length < 10){
            setData(event.target.value)
        }else{
            console.log("limit reached !")
        }

    }

    let date = new Date()

    return (
        <>
            {/* controlled components */}

            <div className="container p-5">

                <form onSubmit={handelSubmit} action="">

                    <input onChange={handelChange} className='form-control' type="text" name='input1' placeholder='enter something 10 char only' value={data} />

                    {/* <input type="date" min={date.toLocaleDateString()} name="" id="" /> */}

                    <button className='btn btn-success' type='submit'>submit</button>

                </form>

            </div>

        </>
    )
}

export default Comp10