import { createContext, useState } from "react"

type TInitialValue = {
  age: number
  addAge: () => void

  saving: number
  addSaving: () => void
}

export const MyContext = createContext({} as TInitialValue)

type MyContextProviderProps = {
  children: React.ReactNode
}

export const MyContextProvider = (props: MyContextProviderProps) => {
  const [age, setAge] = useState(18)
  const addAge = () => {
    setAge((prevAge) => prevAge + 1)
  }
  const [saving, setSaving] = useState(3000)
  const addSaving = () => {
    setSaving((prevSaving) => prevSaving + 1000)
  }
  return (
    <MyContext.Provider value={{ age, addAge, saving, addSaving }}>
      {props.children}
    </MyContext.Provider>
  )
}
