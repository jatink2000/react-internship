import React, { Component } from 'react'

export default class Inputclass extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            email:""
        }
    }


    namevalue=(e)=>{
        this.setState({
            name:e.target.value
        })
    }


    emailvalue=(e)=>{
        this.setState({
            email:e.target.value
        })
    }

    render() {
        return (
            <div>

                <h1>Inputclass component</h1>
                <input type='text' placeholder=' enter your name' onChange={this.namevalue}/>
                <p>your name is {this.state.name}</p>
                <input type='email' placeholder=' enter your email' onChange={this.emailvalue}/>
                <p>your email is {this.state.email}</p>

            </div>
        )
    }
}
