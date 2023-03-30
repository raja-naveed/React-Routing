import React from 'react'
import About from './About';
import Home from './Home';
import {Routes , Route} from 'react-router-dom'


function App() {
  
  return (
    <React.Fragment>
      <Navigation />
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/about" exact element={<About />} />
            </Routes>
    </React.Fragment>
    
  )
  }

export default App
