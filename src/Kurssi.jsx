
import React from "react"

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ name }) => {
  return <h1>{name}</h1>
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part =>
        <Part
          key={part.id}
          name={part.name}
          exercises={part.exercises}
        />
      )}
    </div>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Total = ({ parts }) => {
  const totalExercises = parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  )

  return (
    <p>
      <strong>Tehtäviä on yhteensä: {totalExercises}</strong>
    </p>
  )
}

export default Course