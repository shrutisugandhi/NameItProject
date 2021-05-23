import React from 'react'
import NameCard from '../NameCard/NameCard'
import './ResultsContainer.css'

const ResultContainer = ({ suggestedName, isSuggest }) => {
    const suggest = suggestedName.map((item) => {
        return <NameCard key={item.toString()} resultname={item} />
    })
    return <div className="results-container">{isSuggest ? suggest : []}</div>
}

export default ResultContainer
