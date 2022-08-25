import React, { Component } from 'react';
import getRandom from './functions';
import getAdvice from './dummyData';
import AdviceMain from './components/AdviceMain';
import AddAdvice from './components/AddAdvice';
import Header from './components/headerBar';

class App  extends Component {
  state = { 
    AdviceList:[],
    currentAdvice:{} 
   }
   componentDidMount(){
    const AdviceList = getAdvice()
    const firstQuote= AdviceList[getRandom(AdviceList.length)]
    this.setState({AdviceList,currentAdvice:firstQuote})
   } 
   newAdvice=()=>{
    const adviceList = [...this.state.AdviceList]
    const newAdvice = adviceList[getRandom(adviceList.length)]
    this.setState({currentAdvice:newAdvice})
   }
  render() { 
    return (
      <div id='area'>
      <Header/>
      <AdviceMain advice={this.state.currentAdvice} handleNew={this.newAdvice}/>
      <AddAdvice/>
      </div>
    );
  }
}
 
export default App ;