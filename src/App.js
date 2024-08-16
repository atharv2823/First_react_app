import React from 'react'
import "./App.css"


const greet2 = {
    backgroundColor:"green",
    color:"white",
}

function App() {
  return (
    <h1 className='Heading'>Hello EveryOne This is My First React App 👋</h1>
  )
}

function Greet1(){
    return ( <div style={{
        backgroundColor : "black",
        color : "white",
        width:"300px",
        borderRadius:"10px",
        padding:"10px"
    }}>How Are You ? 🤔 </div>)
}

function Greet2(){
    return <div style={greet2}>What Do You think about React 🤔 </div>
}



export default App
export  {
    Greet1,
    Greet2
}