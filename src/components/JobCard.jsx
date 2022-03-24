import React from 'react'

const JobCard = (props) => {
  return (
    <div 
    className={`${props.name} company`}
    style={{backgroundImage: `${props.image}`}}
    >
      <h1>Company Name</h1>
    </div>
  )
}

export default JobCard