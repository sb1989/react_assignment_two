import React from 'react';

const validate = (props) => {
    
    let validationMessage = 'Text long enough'; 

    if(props.inputLength.length <= 5){
        validationMessage = 'Text too short';
    }
    

return <div>{validationMessage}</div>
};

export default validate;