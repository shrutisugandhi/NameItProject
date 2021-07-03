import React from 'react'
import './NameCard.css'
const nameCheapUrl =
    'https://www.namecheap.com/domains/registration/results/?domain=%27%3B'
const NameCard = ({ resultname }) => {
    return (
        <a
            rel="noreferrer" target="_blank"
            href={`${nameCheapUrl}${resultname}`}
            className="result-name-link"
        >
            <div className="result-name-card">
                <p className="result-name">{resultname}</p>
            </div>
        </a>
    )
}
export default NameCard

//NameCard