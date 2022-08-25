import React from 'react';
const AdviceCard = ({advice}) => {
    return ( 
        <div>
        <h1>{advice.Advice}</h1>
        <small>{advice.Author}</small>

        </div>
     );
}
 
export default AdviceCard;