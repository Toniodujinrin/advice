import React from 'react';
import AdviceCard from './AdviceCard';
const AdviceMain = ({handleNew,advice}) => {
    return ( 
        <div id='main'>
        <AdviceCard advice = {advice}/>
        <button className='new-button' onClick={handleNew}>New</button>
        </div>
     );
}
 
export default AdviceMain;