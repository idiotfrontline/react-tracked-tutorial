import { useContext } from "react"
import { MyContext } from "./MyContextProvider"

type AgeInfoProps = {}

export const AgeInfo = (props: AgeInfoProps) => {
  const { age, addAge } = useContext(MyContext)
  return (
    <div className="info">
      <p>age: {age}</p>
      <button onClick={addAge}>Happy Birthday!</button>
    </div>
  )
}
