import React from 'react'

const Person = ({name, age, click, changed}) => {         // Here, name and age are the props.
    return (
        <div className = "container-fluid">
            <p onClick = {click} className = "lead"> Hi, I am {name} and I am {age} years old.</p>
            <input type="text" placeholder = "Enter the name" onChange = {changed} />
        </div>
    )
}

export default Person
