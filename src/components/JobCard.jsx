import React from 'react'

const JobCard = (props) => {
  return (
    <div
      className={`${props.name} company`}
      style={{
        backgroundImage: `${props.image}`,
        backgroundColor: `rgb(${Math.random() * 255},${Math.random() * 255},${
          Math.random() * 255
        } )`
      }}
    >
      <h1>Company Name</h1>
    </div>
  )
}

export default JobCard
