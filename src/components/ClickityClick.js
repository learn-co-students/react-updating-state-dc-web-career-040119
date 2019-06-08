// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component{

  constructor(){
    super()
    this.state = {
      hasBeenClicked : false
    }
  }


    handleClicked = (event) => {
    // debugger
    this.setState({
      hasBeenClicked:true
    })
  }

  // handleBlur = e => {
  //   this.setState({
  //     hasBeenClicked : false
  //   })
  // }

  render(){

  return(
    <div>
    <p>I have been {this.state.hasBeenClicked ? null : 'not'} clicked</p>
    <button onClick={this.handleClicked}>
      Click Me!
    </button>
    </div>
  )
  }
}

export default ClickityClick
