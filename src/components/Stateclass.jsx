import React, { Component } from 'react'

export default class Stateclass extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }


    update=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    render() {
        return (
            <div>
                <h1>Stateclass component</h1>
                <h1>{this.state.count}</h1>

                <button onClick={this.update}>click here </button>

            </div>
        )
    }
}
