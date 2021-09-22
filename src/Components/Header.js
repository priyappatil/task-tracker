// Generating a component (App.js and Header.js are the components)
// import { Component } from "react";
import PropTypes from 'prop-types'

// 1. Function-based Component
// 2. Class-based Component

// 1. Function-based Components :- \

const Header = (props) => {
    return (
        // JSX => JavaScript Scripting Extension -> a combination of (HTML + CSS + JavaScript)
        // props => to reuse the components.(we cannot change this name, (props))
        // React Fragment (do not want any child and want just a block of code then we can use React Fragment), { just remove div inside the angular brackets -->  <>.....</> }  
        <div>
            {/* <h1 className = "page-header">This is my heading !</h1>
            <h1 className = "page-header"> {props.title} <small> {props.id} </small> </h1>
            <p className = "lead">Hi.. This is a paragraph</p>       */}
            <h1>Task Tracker</h1>       
        </div>
        // <p></p> => we cannot use same two JSX expressions on the same level that means this return statement doen't allow two html statements inside it. We can use React Fragment as an alternative way to this.
    );
}

// Default Props => are used when we don't specify any HTML attribute to other components. i.e we are calling the component but not passing any prop then use default props.
Header.defaultProps = {
    title: 'Default Props',
    id: -1
}

// PropTypes => are used to set the validations to the props that title should be string type and id should be of number type.
// For isRequired -> just uncomment the code of Default Props
Header.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Header;


// 2. Class-based Component :- 

// class Header extends Component {
//     render() {
//         return (
//             <header>
//                 <h1>Heading from a Class Component !</h1>
//             </header>
//         )
//     }
// }

