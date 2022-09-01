import React from 'react';
const Score = ({score,handleIncreament,handleDecreament,id}) => {
    return ( 
      <div id='score'>
        <div id='increase'><button className='score-button' onClick={()=>handleIncreament(id)}>+</button></div>
        <div id='number'>{score}</div>
        <div id='decrease'><button className='score-button' onClick={()=>handleDecreament(id)}>-</button></div>
      </div>
     );
}
 
export default Score ;