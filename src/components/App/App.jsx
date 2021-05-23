import React from 'react'
import Header from '../Header/Header'
import './App.css'
import SearchBox from '../SearchBox/SearchBox'
import ResultContainer from '../ResultsContainer/ResultsContainer'

const name = require('@rstacruz/startup-name-generator')
class App extends React.Component {
    //Class Based Component
    state = {
        headerText: 'Name It!', //here headerText is passed as props to Header component
        headerExpanded: true,
        suggestedNames: [],
        isSuggested: true,
    }
    handleInputChange = (inputText) => {
        // console.log('input Text>>', inputText)
        this.setState({
            headerExpanded: !inputText,
            isSuggested: inputText,
            suggestedNames: name(inputText),
        })
    }
    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultContainer
                    isSuggest={this.state.isSuggested}
                    suggestedName={this.state.suggestedNames}
                />
            </div>
        )
    }
}

// function App() {
//     //Functional based Component
//     return <h2>Hello React</h2>
// }
export default App

//object is key-value pair
//state ->keyword is provided by react

//State is a piece of data(js object) which we need to save which will change or update in future
//props is sort of data which we can use to communicate between components(parents ->child)
//child->parent communication of data is done using calback method
//to update state object in react direct updation is not possible rather setState is used to set state object
//App compoennt is parent of all compoennts .Direct child->child communication is not possible
//First child will send data to parent and parent will transfer that data to another child Component
