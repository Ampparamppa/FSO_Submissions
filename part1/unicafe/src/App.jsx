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
  const average = ((props.good - props.bad)/total)
  const positive = props.good/total*100
  if (total ===0) {
    return(
      <div>
        You need to press the buttons
      </div>
    )
  }
  return(
    <table>
      <tbody>
        <tr><StatisticLine text="good" value={props.good} /></tr>
        <tr><StatisticLine text="neutral" value={props.neutral} /></tr>
        <tr><StatisticLine text="bad" value={props.bad} /></tr>
        <tr><StatisticLine text="All" value={total} /></tr>
        <tr><StatisticLine text="Average" value={average}/></tr>
        <tr><StatisticLine text="Positive"  value={positive + " %"}/></tr>
      </tbody>
    </table>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => {
  return(
    <>
      <td>{text}</td> 
      <td>{value}</td>
    </>
  )
}

export default App