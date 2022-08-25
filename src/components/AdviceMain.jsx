import React from 'react';
import AdviceCard from './AdviceCard';
const AdviceMain = ({handleNew,advice}) => {
    return ( 
        <React.Fragment>
        <AdviceCard advice = {advice}/>
        <button onClick={handleNew}>New</button>
        </React.Fragment>
     );
}
 
export default AdviceMain;