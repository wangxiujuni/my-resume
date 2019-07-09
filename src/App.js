import React from 'react'
import "./common/global.css"
import View from "./components/View"
import FixedNav from "./components/FixedNav"
import DotList from "./components/DotList"

function App() {
  return (
    <div className="App">
      <FixedNav></FixedNav>
      <View></View>
      <DotList></DotList>
    </div>
  )
}

export default App
