import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Box from './Box'
import NewBoxForm from './NewBoxForm'

const BoxList = () => {
  
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, {
      ...newBox,
      id: uuidv4()
    }])
  }

  const removeBox = (boxId) => {
    setBoxes(boxes => boxes.filter(box => box.id !== boxId))
  }

  return (
    <>
      {boxes.map((box) => (
        <Box
          key={box.id}
          color={box.color}
          id={box.id}
          width={box.width}
          height={box.height}
          removeBox={removeBox}
        />
      ))}
      <NewBoxForm addBox={addBox} />
    </>
  )
}

export default BoxList
