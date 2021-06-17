import React from 'react'
import { courses } from '../data/courses'

const Header = () => {
  const categoriesArray = (list) => {
    let categories = []
    list.forEach((course) => {
      if (categories.indexOf(course.category) === -1) {
        categories.push(course.category)
      }
    })
    return categories
  }

  const menuList = categoriesArray(courses).map((category) => {
    return <li className='capitalized bold'>{category}</li>
  })

  return (
    <>
      <h1>Course list</h1>
      <ul data-cy='nav-bar'>{menuList}</ul>
    </>
  )
}

export default Header
