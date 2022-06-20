import React from 'react';
import './App.css';

export default function App() {

  const [time,setTime] = React.useState('')

  function FormatTime(value) {
    if(value < 10) {
      return '0'
    }else {
      return ''
    }
  }

  React.useEffect(() => {
    const TimerID = setInterval(() => tick(), 1000)

    return function clean() {
      clearInterval(TimerID)
    }
  })

  function tick() {
    const date = new Date().toLocaleTimeString()
  

    setTime(FormatTime(date) + date)
  }

  return (
    <div className='clock'>
      <div className='screen'>
        <h1 className='time'>{time}</h1>
      </div>
    </div>
  )

}
