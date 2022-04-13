import { useEffect, useState } from 'react'

const Nav = () => {
  const getTime = () => {
    let time = new Date()

    let hour = time.getHours() % 12 === 0 ? 12 : time.getHours() % 12
    let minute =
      time.getMinutes() < 10
        ? String(time.getHours().toString().padStart(2, 0))
        : time.getMinutes()
    let second =
      time.getSeconds() < 10
        ? String(time.getSeconds().toString().padStart(2, 0))
        : time.getSeconds()

    return hour + ':' + minute + ':' + second
  }
  const [time, setTime] = useState(getTime())

  useEffect(() => {
    setInterval(() => {
      setTime(getTime())
    }, 1000)
  }, [time])

  return (
    <div className="navBar">
      <ul className="leftNav">
        <li>2022</li>
        <li>Cindy Leong</li>
      </ul>
      <ul className="rightNav">
        <li>Head of Design, Darwin Homes</li>
        <li>{time}</li>
      </ul>
    </div>
  )
}

export default Nav
