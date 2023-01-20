import { MyContainer } from "./MyContextProvider"

type AgeInfoProps = {}

export const AgeInfo = (props: AgeInfoProps) => {
  // const { age, addAge } = useContext(MyContext)
  const [state, setState] = MyContainer.useTracked()

  const addAge = () => {
    setState((prev) => ({
      ...prev,
      age: prev.age + 1,
    }))
  }

  return (
    <div className="info">
      <p>age: {state.age}</p>
      <button onClick={addAge}>Happy Birthday!</button>
      <p>{Math.random()}</p>
    </div>
  )
}
