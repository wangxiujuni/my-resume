import React ,{useState} from 'react'
import "./common/global.css"
import View from "./components/View/View"
import FixedNav from "./components/FixedNav"
import DotList from "./components/DotList"

function App() {
  const [currentIndex, setCurrentIndex] = useState(4)

  return (
    <div className="App">
      <FixedNav></FixedNav>
      <View currentIndex={currentIndex}></View>
      <DotList currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}></DotList>
    </div>
  )
}

export default App
