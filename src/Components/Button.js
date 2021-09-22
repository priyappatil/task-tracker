import React from "react"

// const Button = (props) => {
//     return <button style = {{ backgroundColor : props.backgroundColor, color : props.color }}> { props.text } </button>
// }

// destructuring the props
const Button = ({ color, backgroundColor, text }) => {
    return <button style = {{ backgroundColor : backgroundColor, color:color}}> { text } </button>
}

export default Button 