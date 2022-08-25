import React from 'react';
const AdviceCard = ({advice}) => {
    return ( 
        <div id='card'>
        <div>{advice.Advice}</div>
        <small>{advice.Author}</small>
        </div>
     );
}
 
export default AdviceCard;