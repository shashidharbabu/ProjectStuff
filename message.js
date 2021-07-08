import React ,{ Component } from 'react';

class message extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome Shashidhar'
        }
    }
    render(){
        return(
            <h1>
                {this.state.message}
            </h1>
        )
    }


}
export default message;