import { faUserTimes } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const Nav = () => {
  const [time, setTime] = useState('')
  const [timeOfDay, setTimeOfDay] = useState('')
  const [timeZone, setTimeZone] = useState(
    new Date()
      .toLocaleTimeString('en-us', { timeZoneName: 'short' })
      .split(' ')[2]
  )

  useEffect(() => {
    setInterval(() => {
      setTime(getTime())
      setTimeOfDay(getTimeOfDay())
    }, 1000)
  }, [])

  const getTime = () => {
    let time = new Date()

    let hour = time.getHours() % 12 === 0 ? 12 : time.getHours() % 12
    let minute =
      time.getMinutes() < 10
        ? String(time.getHours().toString().padStart(2, 0))
        : time.getMinutes()
    // let second =
    //   time.getSeconds() < 10
    //     ? String(time.getSeconds().toString().padStart(2, 0))
    //     : time.getSeconds()

    return hour + ':' + minute //+ ':' + second
  }

  const getTimeOfDay = () => {
    const time = new Date().getHours() > 12 ? 'PM' : 'AM'
    return time
  }

  return (
    <div className="navBar">
      <ul className="leftNav">
        <li>2022</li>
        <li>Cindy Leong</li>
      </ul>
      <ul className="rightNav">
        <li>Head of Design, Darwin Homes</li>
        <li>{time + ' ' + timeOfDay + ' ' + timeZone}</li>
      </ul>
    </div>
  )
}

export default Nav
