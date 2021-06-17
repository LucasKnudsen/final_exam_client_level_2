import React from 'react'
import './styles/style.css'
import Header from './components/Header'
import CoursesContainer from './components/CoursesContainer'

const App = () => {
  return (
    <div className='container' id='app'>
      <Header />
      <CoursesContainer />
    </div>
  )
}

export default App
