import React from 'react';
const Input = ({value,handleChange,label,name,type}) => {
    return ( 
        <div>
        <span>
            <label>{label}</label>
        </span>
        <span>
        {
            (type==='text')?
            <input id='input' type="text" value={value} onChange={handleChange} name={name} />:
            <textarea id='post' type="text" value={value} onChange={handleChange} name={name}/>
        }
        
        </span>
        </div>
     );
}
 
export default Input;