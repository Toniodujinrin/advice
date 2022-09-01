import React from 'react';
import AdviceCard from './AdviceCard';
import Score from './utils/Score';
const AdviceMain = ({handleNew,advice,handleDecreament,handleIncreament}) => {
    return ( 
        <div id='main'>
        <div id='score-card'>
        <Score score={advice.score} handleDecreament={handleDecreament} handleIncreament={handleIncreament} id={advice.id}/>
        <AdviceCard advice = {advice}/>
        
        </div>
        <button className='new-button' onClick={handleNew}>New</button>
        </div>
     );
}
 
export default AdviceMain;