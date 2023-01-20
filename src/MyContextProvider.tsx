import { createContainer } from "react-tracked"
import { ImmerReducer, useImmerReducer } from "use-immer"

const initialValue = { age: 18, saving: 3000 }

type TAction = {
  type: "addAge" | "addSaving"
}

const reducer: ImmerReducer<typeof initialValue, TAction> = (state, action) => {
  switch (action.type) {
    case "addAge":
      state.age += 1
      break
    case "addSaving":
      state.saving += 1000
      break
    default:
      break
  }
}

const useValue = () => {
  return useImmerReducer(reducer, initialValue)
}

export const MyContainer = createContainer(useValue)
