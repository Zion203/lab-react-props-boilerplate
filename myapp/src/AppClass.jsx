import React, {  Component } from 'react'
import './App.css'

export default class AppClass extends Component{
    
    render(){
        let props = this.props.pro;
        console.log(props)

        let tags  = props.map(function(ele){
            return (
                <div>
                    <img src={ele.img} alt="" />
                </div>
            )
            
        })
        return (
        <div id="container">
            {tags}
        </div>
        )
    }
}