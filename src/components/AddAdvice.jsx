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
            <div id='add'>
                <h1>Add Your Own Advice</h1>
                <div>
                <Input handleChange={this.handleChange} value={this.state.value}/>
                <button className='new-button'>Post</button>
                </div>
            </div>
        );
    }
}
 
export default AddAdvice ;