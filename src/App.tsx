import { AgeInfo } from "./AgeInfo"
import "./App.css"
import { MyContainer } from "./MyContextProvider"
import { SavingInfo } from "./SavingInfo"

function App() {
  return (
    <MyContainer.Provider>
      <div className="App">
        <h1>Dashboard</h1>
        <AgeInfo />
        <SavingInfo />
      </div>
    </MyContainer.Provider>
  )
}

export default App
