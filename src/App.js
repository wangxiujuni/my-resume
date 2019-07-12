import React, { useState } from 'react'
import './common/global.css'
import View from './components/View/View'

import DotList from './components/DotList'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="App">
      <View currentIndex={currentIndex} />
      <DotList currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />

      {currentIndex !== 4 && (
        <i
          className="arrow"
          onClick={() => {
            setCurrentIndex(state => state + 1)
          }}
        />
      )}
      <style jsx>{`
        .arrow {
          position: fixed;
          width: 1em;
          height: 1em;
          bottom: 1em;
          left: 50%;
          border-left: 2px solid #666;
          border-top: 2px solid #666;
          z-index: 2;
          animation: arrow infinite 1s ease;
          cursor: pointer;
        }
        @keyframes arrow {
          from {
            transform: rotate(45deg) translate(-8px, 0);
          }
          to {
            transform: rotate(45deg) translate(-18px, -10px);
          }
        }
      `}</style>
    </div>
  )
}

export default App
