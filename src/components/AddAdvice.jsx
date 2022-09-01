import React, { Component } from 'react';
import Input from './utils/input';
class AddAdvice extends Component {
    state = { 
    post:'',
    author:''

     } 

    handleChange=({currentTarget:input})=>{
        
       if(input.name==='post')this.setState({post:input.value})
       else if (input.name==='author')this.setState({author:input.value})


    }

    render() { 
        const {author,post}=this.state
        return (
            <div id='add'>
                <h1>Add Your Own Advice</h1>
                <div>
                <Input label={'Post '} handleChange={this.handleChange} value={this.state.post} name={'post'} type='textare'/>
                <Input label={'Author '}handleChange={this.handleChange} value={this.state.author} name={'author'} type='text' />
                <button className='new-button' onClick={()=>this.props.addPost(author,post)}>Post</button>
                </div>
            </div>
        );
    }
}
 
export default AddAdvice ;