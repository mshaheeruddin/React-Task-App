import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';

//Function based component

function App() {
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
    <div className="container">
          <Header />
          <Tasks tasks= {tasks}/>
    </div>
  );
}


export default App;
