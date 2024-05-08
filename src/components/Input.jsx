import React from 'react'

function Input({label, isTextArea,...props}) {
    return (
        <p>
            <label>{label}</label><br/>
            {isTextArea? <textarea {...props}/>:<input {...props}/>}
        </p>
    );
}

export default Input