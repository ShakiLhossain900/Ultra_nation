import React from 'react';

const country = (props) => {
    const {name,population,region,flag} = props.country
    const countrystyle ={border : '3px solid red', margin: '10px', padding:'10px' }
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countrystyle} >
           <h4> this is a  : {name}</h4>   
            <img style={{height:'50px'}} src={flag} alt="" />
            <p> population : {population}</p>
           <p> <small> Regin : {region}</small></p>
            <button onClick={()=>handleAddCountry(props.country)}> Add country</button>
        </div>
    );
};

export default country;