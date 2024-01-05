import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Data from "./componets/data.jsx"
import App from './App.jsx'
import AppClass from './AppClass.jsx'

const data = Data()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App pro = {data}></App> */}
    <AppClass pro = {data}></AppClass>
  </React.StrictMode>

)

