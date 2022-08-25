import React, { Component } from 'react';
import Input from './utils/input';
class AddAdvice extends Component {
    state = { 
    value:''

     } 

    handleChange=({currentTarget:input})=>{
       this.setState({value:input.value})

    }

    render() { 
        return (
            <div>
                <h1>Add Your Own Advice</h1>
                <Input handleChange={this.handleChange} value={this.state.value}/>
            </div>
        );
    }
}
 
export default AddAdvice ;