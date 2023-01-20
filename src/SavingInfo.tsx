import { MyContainer } from "./MyContextProvider"

type SavingInfoProps = {}

export const SavingInfo = (props: SavingInfoProps) => {
  const [state, dispatch] = MyContainer.useTracked()

  return (
    <div className="info">
      <p>saving: {state.saving} </p>
      <button onClick={() => dispatch({ type: "addSaving" })}>
        Add Saving
      </button>
      <p>{Math.random()}</p>
    </div>
  )
}
