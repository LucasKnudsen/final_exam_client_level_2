const removeDublicates = (list) => {
  let set = []
  list.forEach((course) => {
    if (set.indexOf(course.category) === -1) {
      set.push(course.category)
    }
  })
  return set
}

export { removeDublicates }
