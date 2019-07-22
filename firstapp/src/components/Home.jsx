import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <img style={{width:"20%",height:"20%", onclick:"onClick(this)", alt:"beautiful nature"}} src="images/2.jpg" />
        <img style={{width: '20%', height: '20%'}} src="images/3.jpg" />
        <img style={{width: '20%', height: '20%'}} src="images/6.jpg" />
        <img style={{width: '20%', height: '20%'}} src="images/5.jpg" />
        <img style={{width: '20%', height: '20%'}} src="images/2.jpg" />
      </div>
    )
  }
}
