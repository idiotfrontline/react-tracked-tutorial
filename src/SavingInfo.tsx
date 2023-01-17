import { useContext } from "react"
import { MyContext } from "./MyContextProvider"

type SavingInfoProps = {}

export const SavingInfo = (props: SavingInfoProps) => {
  const { saving, addSaving } = useContext(MyContext)
  return (
    <div className="info">
      <p>saving: {saving} </p>
      <button onClick={addSaving}>Add Saving</button>
      <p>{Math.random()}</p>
    </div>
  )
}
