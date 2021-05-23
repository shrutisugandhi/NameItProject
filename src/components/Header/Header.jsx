import React from 'react'
import './Header.css'
// const Header = (props) => {
//     return (
//         <div className="head-container">
//             <img
//                 alt="headerimg"
//                 src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
//                 className="head-image"
//             ></img>
//             <h1 className="head-text">{props.headTitle}</h1>
//         </div>
//     )
// }
//Destructuring props by skipping props keyword
const Header = ({ headTitle, headerExpanded }) => {
    return (
        <div className="head-container">
            <img
                alt="headerimg"
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                className={`head-image ${
                    headerExpanded
                        ? 'head-image-expanded'
                        : 'head-image-contracted'
                }`}
            ></img>
            <h1
                className={`head-text ${
                    headerExpanded
                        ? 'head-text-expanded'
                        : 'head-text-contracted'
                }`}
            >
                {headTitle}
            </h1>
        </div>
    )
}
export default Header
