import React from 'react'
import { courses } from '../data/courses'
import { removeDublicates } from './modules/helperFunctions'

const Header = ({ setActiveCategory }) => {
  const menuList = removeDublicates(courses).map((category) => {
    return (
      <li
        onClick={() => {
          setActiveCategory(category)
        }}
        className='capitalized bold'>
        {category}
      </li>
    )
  })

  return (
    <>
      <h1 className='center'>Course list</h1>
      <ul data-cy='nav-bar' className='center'>
        <li
          onClick={() => setActiveCategory('all')}
          className='capitalized bold'>
          all
        </li>
        {menuList}
      </ul>
    </>
  )
}

export default Header
