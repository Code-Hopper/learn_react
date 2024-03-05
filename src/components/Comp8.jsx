import React from 'react'

const Comp8 = (props) => {

  let greet = () => {
    console.log("this is comp8 greet function !")
  }

  return (
    <div>
      Comp8

      {
        props.call ? greet() : ""
      }

    </div>
  )
}

export default Comp8