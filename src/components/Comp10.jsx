import React, { useState } from 'react'

const Comp10 = () => {

    let [data, setData] = useState({
        name: "",
        contact: "",
        email: ""
    })

    let handelSubmit = (event) => {
        event.preventDefault()
        console.log(data)
    }

    let handelChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)

        let name = event.target.name
        let value = event.target.value

        // match the pair

        setData(prevData => {
           return {...prevData , [name]:value}
        })
        
        // setData({...prevData , [name]:value})
    }

    let date = new Date()

    return (
        <>
            {/* controlled components */}

            <div className="container p-5">

                <form onSubmit={handelSubmit} action="">

                    <div className='row gap-1'>
                        <div className="col">
                            <input onChange={handelChange} className='form-control' type="text" placeholder='enter name' name='name' value={data.name} />
                        </div>
                        <div className="col">
                            <input onChange={handelChange} className='form-control' type="tel" placeholder='enter contact' name='contact' value={data.contact} />
                        </div>
                        <div>
                            <input onChange={handelChange} type="email" className='form-control' placeholder='enter email' name='email' value={data.email} />
                        </div>

                        <div className='col'>
                            <button type='submit' className='btn btn-success'>
                                submit
                            </button>
                            <button type='reset' className='btn btn-danger'>
                                Reset
                            </button>
                        </div>

                    </div>


                </form>

            </div>

        </>
    )
}

export default Comp10