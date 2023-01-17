import { AgeInfo } from "./AgeInfo"
import "./App.css"
import { MyContextProvider } from "./MyContextProvider"
import { SavingInfo } from "./SavingInfo"

function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <h1>Dashboard</h1>
        <AgeInfo />
        <SavingInfo />
      </div>
    </MyContextProvider>
  )
}

export default App
