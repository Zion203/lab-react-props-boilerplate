import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Data from "./componets/data"
import './App.css'





const App = ({pro}) =>{
  console.log(pro)
  let tags = pro.map(function(elemnets){
    return (
      <div>
        <img src={elemnets.img} alt="" />
      </div>
      )
  }
  )
  return (
          <div id="container">
              {tags}
          </div>
        ) 

}


export default App
