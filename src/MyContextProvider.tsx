import { Reducer, useReducer, useState } from "react"
import { createContainer } from "react-tracked"

const initialValue = { age: 18, saving: 3000 }

type TAction = {
  type: "addAge" | "addSaving"
}

const reducer: Reducer<typeof initialValue, TAction> = (state, action) => {
  switch (action.type) {
    case "addAge":
      return {
        ...state,
        age: state.age + 1,
      }
    case "addSaving":
      return {
        ...state,
        saving: state.saving + 1000,
      }
    default:
      return state
  }
}

const useValue = () => {
  return useReducer(reducer, initialValue)
}

export const MyContainer = createContainer(useValue)
