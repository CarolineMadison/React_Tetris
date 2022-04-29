//Implement the overall grid square
//1. Build the grid square component
//2. Add styling

import React from 'react'

// Represents a grid square with a color

export default function GridSquare(props) {

  const classes = `grid-square color-${props.color}`

  return <div className={classes} />
}
