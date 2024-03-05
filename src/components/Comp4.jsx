// conditional rendering
// it can if-else, it can be itrating an array

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let Comp4 = () => {

    let a = 100

    let displayElements = (element,index) =>{
        return <h1 key={index}>{element}</h1>
    } 

    let date = new Date()
  
    return (
        <>
            {/* {
                false ? <h1>Thhis is true </h1> : <h1>tHIS IS FALSE</h1>
            } */}

            {/* this is react commet */}

            {/* {
                // FOR, forEach, for of, map, filter
                data.map((element, index) => {
                    return (
                        <h1 key={index} >{element}</h1>
                    )
                }) //using map function we itrate any array
            } */}

            {/* {
                data.map( (element, index ) => <h1 key={index}> {element}</h1>)
            } */}

            {
                data.map(displayElements)
            }

            {
                date.getHours() < 12 ? <h1>Good Morning</h1> : <h1> NOT Good Morning</h1>  
            }

        </>
    )
}

export default Comp4