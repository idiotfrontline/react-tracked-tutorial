import { useState } from "react"
import { createContainer } from "react-tracked"

const useValue = () => {
  return useState({ age: 18, saving: 3000 })
}

export const MyContainer = createContainer(useValue)
