import React, { useState } from 'react'
import './common/global.css'
import View from './components/View/View'
import FixedNav from './components/FixedNav'
import DotList from './components/DotList'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)


  return (
    <div className="App">
      <FixedNav />
      <View  currentIndex={currentIndex} />
      <DotList currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <style jsx>{`
        @keyframes slideInDown {
          from {
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
            visibility: visible;
          }

          to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }

        .slideInDown {
          -webkit-animation-name: slideInDown;
          animation-name: slideInDown;
        }
      `}</style>
    </div>
  )
}

export default App
