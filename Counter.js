import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0 
        }
    }
    increment(){
        this.setState ({
            count: this.state.count + 1
        })
        console.log(this.state.count)

    }
    render() {
        return (
            <div>

            <div>
                Countdown- {this.state.count}
            </div>
            <button onClick={()=> this.increment()}></button>
            </div>
        )
    }
}

export default Counter
