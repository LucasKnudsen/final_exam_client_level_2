import React from 'react'
import { courses } from '../data/courses'
import Course from './Course'

const CoursesContainer = ({ activeCategory }) => {
  const listOfCourses = courses
    .filter((course) => course.category === activeCategory)
    .map((course) => {
      return <Course key={course.title} course={course} />
    })

  return <div>{listOfCourses}</div>
}

export default CoursesContainer
