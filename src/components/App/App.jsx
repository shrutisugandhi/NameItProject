import React, { useCallback, useMemo, useState } from 'react'
import Header from '../Header/Header'
import './App.css'
import SearchBox from '../SearchBox/SearchBox'
import ResultContainer from '../ResultsContainer/ResultsContainer'
import debounce  from 'lodash.debounce'
const name = require('@rstacruz/startup-name-generator')
const App = () => {
    //Functional based Component dont have state object like class so we use useState hook
    const [headerText, setHeaderText] = useState('Name It!')
    const [headerExpanded, setHeaderExpanded] = useState(true)
    const [suggestedNames, setsuggestedNames] = useState([])
    const [isSuggested, setisSuggested] = useState(true)


    // const debounceSave = useMemo(() => {
    //     () => debounce(eventHandler, 300)
    //   }, []);
    
    //   const throttledEventHandler = useMemo(() => {
    //     () => throttle(eventHandler, 300)
    //   }, []);
      
    const debounceSave=useCallback(
        debounce(searchVal=>setsuggestedNames(name(searchVal)),5000),[]    //alternative is useMemo() which will avoid creating new instance of debounce at each compoent rendering only create instance at initial render
 
       );

    const handleInputChange = (inputText) => {
     //   console.log('input Text>>', inputText)
      
        setHeaderExpanded(!inputText)
        // setsuggestedNames(inputText?name(inputText):[])
      //  setsuggestedNames(name(inputText))
      // const debounceSave=debounce(()=>setsuggestedNames(name(inputText)),2000);
       
      
      debounceSave(inputText);
      setisSuggested(inputText);

    }
    
    return (
        <div>
            <Header headerExpanded={headerExpanded} headTitle={headerText} />
            <SearchBox onInputChange={handleInputChange} />
            <ResultContainer
                isSuggest={isSuggested}
                suggestedName={suggestedNames}
            />
        </div>
    )
}
// class App extends React.Component {   //inheritance 
//     //Class Based Component
//     state = {
//         headerText: 'Name It!', //here headerText is passed as props to Header component
//         headerExpanded: true,
//         suggestedNames: [],
//         isSuggested: true,
//     }
//     handleInputChange = (inputText) => {
//         // console.log('input Text>>', inputText)
//         this.setState({
//             headerExpanded: !inputText,
//             isSuggested: inputText,
//             suggestedNames: name(inputText),
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <Header
//                     headerExpanded={this.state.headerExpanded}
//                     headTitle={this.state.headerText}
//                 />
//                 <SearchBox onInputChange={this.handleInputChange} />
//                 <ResultContainer
//                     isSuggest={this.state.isSuggested}
//                     suggestedName={this.state.suggestedNames}
//                 />
//             </div>
//         )
//     }
// }

export default App;

//object is key-value pair
//state ->keyword is provided by react

//State is a piece of data(js object) which we need to save which will change or update in future
//props is sort of data which we can use to communicate between components(parents ->child)
//child->parent communication of data is done using calback method
//to update state object in react direct updation is not possible rather setState is used to set state object
//App compoennt is parent of all compoennts .Direct child->child communication is not possible
//First child will send data to parent and parent will transfer that data to another child Component
//useState Hook allow us to use state inside our functional based component in order to update or change data object
//We cant have complex object to maintain state using useState hook
//We cant have single setter function in useState rather to have separate setter functiom for each data
