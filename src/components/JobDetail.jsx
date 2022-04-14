import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const JobDetail = () => {
  let navigate = useNavigate()
  const closeBtnClick = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <>
      <div className="jobHeader">
        <div>jobHeader</div>
        <div className="closeBtn" onClick={closeBtnClick}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      <div className="jobContent">
        <div>Dawin</div>
        <div>Dawin</div>
      </div>
      <div className="jobBottom">Dawin</div>
    </>
  )
}

export default JobDetail
