import { MyContainer } from "./MyContextProvider"

type AgeInfoProps = {}

export const AgeInfo = (props: AgeInfoProps) => {
  // const [state, dispatch] = MyContainer.useTracked()

  // const state = MyContainer.useTrackedState()
  // const dispatch = MyContainer.useUpdate()
  const age = MyContainer.useSelector((state) => state.age)
  return (
    <div className="info">
      <p>age: {age}</p>
      {/* <button onClick={() => dispatch({ type: "addAge" })}>
        Happy Birthday!
      </button> */}
      <p>{Math.random()}</p>
    </div>
  )
}
