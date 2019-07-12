import React from 'react'
import { skills, themeColor } from '@/common/data'

const { title, skillTable, skillContent, otherSkills } = skills

export default function ViewSkills(props) {
  //为table添加动画
  let tableClass='skills-table'
  if(props.currentIndex===2){
    tableClass+=" animated slideInLeft"
  }

  return (
    <section className={`skills-container ${props.className}`}>
      <div className="skills-title">{title}</div>
      <div className="skills-main">
        <div className="skills-main-container">
          <div className={tableClass}>
            {skillTable.map((item, index) => (
              <div
                className="skills-table-item"
                key={index}
                style={{
                  width: `${item.percent}`,
                  backgroundColor: `${item.backgroundColor}`,
                  color: `${item.color}`
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="skills-content">
            {skillContent.map((item, index) => (
              <p className="skills-content-item" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="skills-other">
          {otherSkills.map((item, index) => (
            <div
              className={`skills-other-item ${item.name}`}
              key={index}
              style={{ backgroundColor: `${item.backgroundColor}` }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .skills-container {
          position: absolute;
          top:0;
          bottom:0;
          left:0;
          right:0;
          background: ${themeColor};
          overflow: hidden;
          .skills-title {
            margin: 10% 0 2rem;
            text-align: center;
            font-size: 36px;
            color: white;
          }
          .skills-main {
            position: relative;
            width: 80%;
            margin: 0 auto;
            &-container{
              display:flex;
            }
            .skills-table {
              width: 60%;
              font-weight: 600;
              &-item {
                display: flex;
                align-items: center;
                height: 2em;
                margin-top: 1em;
                padding-left: 2px;
                border-left: 3px solid;
              }
            }
            .skills-other {
              display: inline-flex;
              height: 13em;
              margin-top: 7em;
              flex-wrap: wrap;
              &-item {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 5em;
                height: 5em;
                color: white;
                border-radius: 50%;

                &.webpack {
                  grid-area: 2/2 / span 2;
                }
                &.express {
                  grid-area: 4/3 / span 2;
                }
                &.sass {
                  grid-area: 2/4 / span 2;
                }
                &.jQuery {
                  grid-area: 4/5 / span 2;
                }
                &.jest {
                  grid-area: 2/6 / span 2;
                }
                &.小程序 {
                  grid-area: 4/7 / span 2;
                }
                &.GraphQL {
                  grid-area: 2/8 / span 2;
                }
              }
            }
          }
          .skills-content {
            color: rgba(0, 0, 0, 0.7);
            &-item {
              font-size: 16px;
              margin: 2em 0;
              @media screen and (max-width:600px){
                font-size:12px;
                margin: 1em 0;
              }
            }
          }
        }
      `}</style>
    </section>
  )
}
