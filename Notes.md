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

### direct styling

#### In line

           <h1 style={{color: 'red', backgroundColor: 'black'}>{title}</h1>

### external 
           
         <h1 style={headingStyle}>{title}</h1>

         const headingStyle  = {
                   color: 'red', 
                   backgroundColor: 'black', 
         }


# Reusable components example

               <Button color='green' text = 'Press Green' />
            <Button color='Blue' text = 'Press Blue' />
            <Button color='red' text = 'Press Red' />

# e - event log 

### if you want to access event's properties 

           const Button = ({color, text}) => {
                 const onClick = (e) => {
                 console.log(e)
            }

# Make it part of your state - not seperate component

- Previously, tasks array was out of the function
- To make it part of state, use hooks (useState)
# Create a list with .map() 
    

                     import { useState } from 'react'

                      export const Tasks = () => {
                      const [tasks, setTask] = useState([
                       {
                          id: 1,
                              text: 'Doctors appointment',
                              day: 'Monday',
                             reminder: true,
                              },
                            {
                              id: 2,
                              text: 'School appointment',
                              day: 'Tuesday',
                              reminder: true,
                            },

                            {
                              id: 3,
                              text: 'Food appoitnment',
                              day: 'Saturday',
                              reminder: true,
                            },
                          ])

                          return (
                            <>
                              {tasks.map((task) => (
                                <h3>{task.text}</h3>
                              ))}
                            </>
                          )
                        }
 
 - **State is immutable!** which means you can't do something like: 
                    return(
                      tasks.push() 
                       <>
                      .....
                      </>
                    )
 - You basically recreate it and send it down - its one way data
               return(
                      setTask([...tasks,{JSON: *add new tasks here*}])
                       <>
                      .....
                      </>
                    )           
> sidenote: ... is spread operator so ...tasks means add previous tasks


# Global State

- Now, we dont want to have our tasks in Tasks.js component because we want to access tasks from other components
- You can use CONTEXT API or Redux where you would have store to kind of hover over UI where you can pull different states
- But, here we will put into our App.js that will make it our global state and  we can pass components as props! 