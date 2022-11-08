# CREATING COMPONENTS:

- For class based compoenets, importing react is necessary

 import React from 'react'

## Class based components

          class App extends React.Component {
             render() {
              return <h1>Hello World!</h1>
             }
          }
 

 # PROPTYPES:

* if you want to ensure that your prop 
should me of certain datatype

>Header.js

         import PropTypes from 'prop-types'
         const Header = ({title}) => {
          return (
             <header>
               <h1>{title}</h1>         
              </header>
            )
         }

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
   title: PropTypes.string.isRequired,
}

> App.js


               function App() {
                    return (
                      <div className="container">
                       this {1} wil give an error warning as it is not string 
                         <Header title= {1} />
                     </div>
                    );
                }


# Styling

2 ways: 
1. Default using seperate stylesheet
2. Direct Styling in React 

### 2 direct styling

#### In line

           <h1 style={{color: 'red', backgroundColor: 'black'}>{title}</h1>

