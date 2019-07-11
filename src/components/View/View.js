import React from 'react'
import ViewHome from './ViewHome'
import ViewMine from './ViewMine'
import ViewSkills from './ViewSkills'
import ViewWorks from './ViewWorks'
import ViewExperience from './ViewExperience'

function View({ currentIndex }) {
  const Render = () => {
    switch (currentIndex) {
    case 0:
      return <ViewHome />
    case 1:
      return <ViewMine />
    case 2:
      return <ViewSkills />
    case 3:
      return <ViewWorks />
    case 4:
      return <ViewExperience />
    default:
      return <ViewHome />
    }
  }

  return (<main><Render/></main>)
}

export default View
