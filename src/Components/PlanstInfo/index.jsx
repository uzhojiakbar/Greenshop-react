import React from 'react'

const PlantsInfo = ({name,img}) => {
  return (
    <div>
        {name},
        <img src={img} alt="" />
    </div>
  )
}

export default PlantsInfo