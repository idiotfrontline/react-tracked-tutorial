import { MyContainer } from "./MyContextProvider"

type AgeInfoProps = {}

export const AgeInfo = (props: AgeInfoProps) => {
  const [state, dispatch] = MyContainer.useTracked()

  return (
    <div className="info">
      <p>age: {state.age}</p>
      <button onClick={() => dispatch({ type: "addAge" })}>
        Happy Birthday!
      </button>
      <p>{Math.random()}</p>
    </div>
  )
}
