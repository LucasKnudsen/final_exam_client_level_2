import React, { useState } from 'react'
import './styles/style.css'
import Header from './components/Header'
import CoursesContainer from './components/CoursesContainer'

const App = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <div className='container' id='app'>
      <Header setActiveCategory={setActiveCategory} />
      <CoursesContainer activeCategory={activeCategory} />
    </div>
  )
}

export default App
