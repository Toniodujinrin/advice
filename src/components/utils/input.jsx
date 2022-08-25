import React from 'react';
const Input = ({value,handleChange}) => {
    return ( 
        <input id='input' type="text" value={value} onChange={handleChange} />
     );
}
 
export default Input;