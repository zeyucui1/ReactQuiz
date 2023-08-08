const FinishScreen = ({ points, maxPossiblePoints, highScore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100
  return (
    <>
      <p className="result">
        Your Score is <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)})%
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button className="btn btn-ui" onClick={()=>dispatch({type:'restart'})}>Restart the quiz</button>
    </>
  )
}

export default FinishScreen
