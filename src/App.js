import React, { Component } from 'react';
import getRandom from './functions';
import getAdvice from './dummyData';
import AdviceMain from './components/AdviceMain';
import AddAdvice from './components/AddAdvice';
import Header from './components/headerBar';

class App  extends Component {
  state = { 
    AdviceList:[],
    currentAdvice:{},
    addMode:false 
   };
   componentDidMount(){
    const AdviceList = getAdvice();
    const firstQuote= AdviceList[getRandom(AdviceList.length)];
    this.setState({AdviceList,currentAdvice:firstQuote});
   }; 
   newAdvice=()=>{
    const adviceList = [...this.state.AdviceList];
    const newAdvice = adviceList[getRandom(adviceList.length)];
    this.setState({currentAdvice:newAdvice});
   };
   handleIncreamen=(id)=>{
     const adviceList = [...this.state.AdviceList];
     const advice = adviceList.filter(advice=> advice.id ===id );
     advice[0].score += 1;
     this.setState({AdviceList:adviceList});
   };
   handleDecreament=(id)=>{
    const adviceList = [...this.state.AdviceList];
    const advice = adviceList.filter(advice=> advice.id ===id );
    advice[0].score -= 1;
    this.setState({AdviceList:adviceList});
   };
   addPost=(author,advice)=>{
    const AdviceList = [...this.state.AdviceList];
    const post={};
    post.Advice= advice;
    post.Author=author;
    post.score=0;
    post.id=AdviceList.length + 1;
    AdviceList.push(post);
    console.log(AdviceList);
    this.setState({AdviceList});
    this.setState({currentAdvice:post});
    const addMode=this.state.addMode;
    this.setState({addMode:!addMode});
   };
   activateAdd=()=>{
    const addMode=this.state.addMode;
    this.setState({addMode:!addMode});
   }
  render() { 
    const {addMode,currentAdvice}= this.state
    return (

      <div id='area'>
      <Header/>
      <AdviceMain advice={currentAdvice} handleNew={this.newAdvice} handleDecreament={this.handleDecreament} handleIncreament={this.handleIncreamen}/>
      <AddAdvice addPost={this.addPost} addMode={addMode} activateAdd={this.activateAdd}/>
      </div>
    );
  }
}
 
export default App ;