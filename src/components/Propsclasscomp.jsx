import React, { Component } from 'react'

export default class Propsclasscomp extends Component {
  render() {
    let a=(this.props.mydetils)
    return (
      <div>

      <h1>Propsclasscomp</h1>
      <h1>my name is {a.name}</h1>
      <h1>my city is {a.city}</h1>
      <h1>my email is {a.email}</h1>
<img src={a.img}/>
        
      </div>
    )
  }
}
