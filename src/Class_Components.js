import React, { Component } from "react";

class Hello extends Component
{
    render(){
    return(
            <div id="Hello">
                <h1> Hello,{this.props.name}</h1>
                <h3> this is class component</h3>
            </div>
        )
    }
}
export default Hello;