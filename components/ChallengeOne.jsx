import React, { Component } from 'react';
//import images
import leftEye from '../assets/look-left.jpeg'
import rightEye from '../assets/look-right.jpeg'

class ChallengeOne extends Component {
  //declare the state here
  state = {
  };

  
  //click left/right button handler goes here
    clickLeft = (e) => {
     this.setState(() => ({ pic:leftEye }))
   }
   clickRight = (e) => {
    this.setState(() => ({ pic:rightEye }))
  }


  render() {
     
    return (
      <React.Fragment>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.pic}
            alt=""
          />
        </div>
        <button className="btn" onClick={this.clickLeft}>⭠</button>
        <button className="btn" onClick={this.clickRight}>⭢</button>
      </React.Fragment>
    );
  }
}

export default ChallengeOne;