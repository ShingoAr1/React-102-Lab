import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: []
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() {
    //display the student list after 3 seconds
    setTimeout(()=>{this.setState({arr:studentList})},3000)
  }

  //random button handler
  randomize = (val) => {
    //shuffle the array and set the state
    let index = val.length,
     randomindex;
     
     

     while (index != 0) {
      randomindex = Math.floor(Math.random()*index);
      index--;

      [val[index], val[randomindex]] = [val[randomindex], val[index]]
     }
     this.setState({arr:val})
  }

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            {this.state.arr.map((student,index)=>{
              return(
                <li key={index}>{student}</li>
              )
               
            })}
          </ul>
        </div>
        <button className='btn large' onClick={this.randomize}>Randomize</button>
      </>
    )
  }
}