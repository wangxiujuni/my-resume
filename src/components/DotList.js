import React from 'react'
import { titleList } from "@/common/data.js"

function DotList() {
  return (
    <nav className="dotList">
      <ul>
        {
          titleList.map((item,index)=>(
            <li></li>
          ))
        }
        
      </ul>
  
      <style jsx>{`
        .dotList{
          display: flex;
          flex-direction: column;
          position:fixed;
          right: 0;
          top: 50%;
        }
      `}</style>
    </nav>
  )
}

export default DotList
