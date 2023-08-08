import { useEffect } from 'react'

const Timer = ({ dispatch, secondsRemaining }) => {
  const mins = Math.floor(secondsRemaining / 60)
  const second = secondsRemaining % 60
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' })
    }, 1000)
    return () => clearInterval(id)
  }, [dispatch])
  return (
    <div className="timer">
      {mins < 10 && '0'}
      {mins}:{second < 10 && '0'}
      {second}
    </div>
  )
}

export default Timer
