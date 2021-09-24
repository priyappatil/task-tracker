import React from 'react'

const Person = ({name, age}) => {         // Here, name and age are the props.
    return (
        <div className = "container">
            <p className = "lead"> Hi, I am {name} and I am {age} years old.</p>
        </div>
    )
}

export default Person
