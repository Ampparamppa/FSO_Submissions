import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const submitgood = () => setGood(good + 1)
  const submitneutral = () => setNeutral(neutral + 1)
  const submitbad = () => setBad(bad + 1)

  return (
    <div>
      <Header/>
      <Button onClick={submitgood} text="good"/>
      <Button onClick={submitneutral} text="neutral"/>
      <Button onClick={submitbad} text="bad"/>
      <SubHeader/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <p>Give feedback</p>
    </div>
  )
}

const SubHeader = () => {
  return (
    <div>
      <p>Statistics</p>
    </div>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  return(
    <div>
      <p>Good {props.good}</p>
      <p>Neutral {props.neutral}</p>
      <p>Bad {props.bad}</p>
      <p>All {total}</p>
      <p>Average {(props.good - props.bad) / total}</p>
      <p>Positive {(props.good / total) * 100} %</p>
    </div>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

export default App