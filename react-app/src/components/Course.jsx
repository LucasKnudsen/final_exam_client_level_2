import React from 'react'

const Course = ({ course }) => {
  return (
    <div data-cy='course'>
      <h2 data-cy='title'>{course.title}</h2>
      <p data-cy='description'>{course.description}</p>
      <p data-cy='category' className='capitalized'>
        <span className='bold'>Category: </span>
        {course.category}
      </p>
      <p data-cy='instructors'>
        <span className='bold'>Instructors: </span>
        {course.instructors}
      </p>
      <p data-cy='info'>{course.info}</p>
      <p data-cy='price'>
        <span className='bold'>Price: </span>
        {course.price}
      </p>
    </div>
  )
}

export default Course
