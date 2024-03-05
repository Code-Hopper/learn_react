import React from "react"
// this line will help us to write html with js (their is a special extension caled .jsx )
import ReactDOM from "react-dom/client"
// this import contains the main function to create a react app

// import gobal css
import "./index.css"

// import data to be rendred !
import App from "./App"

// now we are going to target the div#root from public/index.html and then render the element with some new content that is created using js
let root = ReactDOM.createRoot(document.getElementById("root"))

// call App function/method to get some outputs
// root.render( <App></App> )
root.render( <App /> )

// <tagname></tagname> | <tagname />

// react fragment <></> it can be used as a div