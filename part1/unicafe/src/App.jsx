import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const submitgood = () => setGood(good + 1)
  const submitneutral = () => setNeutral(neutral + 1)
  const submitbad = () => setBad(bad + 1)

  const total = good + neutral + bad

  return (
    <div>
      <Header/>
      <Button onClick={submitgood} text="good"/>
      <Button onClick={submitneutral} text="neutral"/>
      <Button onClick={submitbad} text="bad"/>
      <SubHeader/>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {total}</p>
      <p>Average {(good - bad) / total}</p>
      <p>Positive {(good / total) * 100} %</p>
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

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

export default App