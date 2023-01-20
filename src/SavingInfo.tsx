import { MyContainer } from "./MyContextProvider"

type SavingInfoProps = {}

export const SavingInfo = (props: SavingInfoProps) => {
  const [state, setState] = MyContainer.useTracked()

  const addSaving = () => {
    setState((prev) => ({
      ...prev,
      saving: prev.saving + 1000,
    }))
  }

  return (
    <div className="info">
      <p>saving: {state.saving} </p>
      <button onClick={addSaving}>Add Saving</button>
      <p>{Math.random()}</p>
    </div>
  )
}
