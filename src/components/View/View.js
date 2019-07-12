import React from 'react'
import  "@/common/animate-min.css"
import ViewHome from './ViewHome'
import ViewMine from './ViewMine'
import ViewSkills from './ViewSkills'
import ViewWorks from './ViewWorks'
import ViewExperience from './ViewExperience'


const render=[ViewHome,ViewMine,ViewSkills,ViewWorks,ViewExperience]
let oldCurrentIndex=0
function View({ currentIndex }) {
  const classList=new Array(5)  
  if (currentIndex>oldCurrentIndex) {
    classList[currentIndex]='show animated slideInUp'
    classList[oldCurrentIndex]='show animated slideOutUp'
  }else if(currentIndex<oldCurrentIndex){
    classList[currentIndex]='show animated slideInDown'
    classList[oldCurrentIndex]='show animated slideOutDown'
  }else{
    classList[currentIndex]='show'
  }
  
  oldCurrentIndex=currentIndex

  return (<main>
    {
      render.map((Item,index)=>(
        <Item className={classList[index]} currentIndex={currentIndex} key={index}></Item>
      ))
    }
    <style global jsx>{`
      .show{
        z-index:1
      }
    `}</style>
  </main>)
}

export default View
