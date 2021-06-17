import React from 'react'
import { courses } from '../data/courses'
import Course from './Course'

const CoursesContainer = () => {
  const listOfCourses = courses.map((course) => {
    return <Course key={course.title} course={course} />
  })

  return <div>{listOfCourses}</div>
}

export default CoursesContainer
