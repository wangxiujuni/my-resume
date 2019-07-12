import React from 'react'
import { mine, themeColor } from '@/common/data'

const { baseInfo, title, details } = mine

export default function ViewMine(props) {
  //为icon添加动画
  let iconClass='mine-baseinfo-item'
  if(props.currentIndex===1){
    iconClass+=" animated zoomIn"
  }

  return (
    <section className={`mine-container ${props.className}`}>
      <div className="mine-title">{title}</div>
      <ul className="mine-baseinfo">
        {baseInfo.map((item, index) => (
          <li className={iconClass} key={index}>
            <div className="mine-baseinfo-icon">
              <span
                className="mine-baseinfo-icon-svg"
                style={{ backgroundImage: `url(${item.iconURL})` }}
              />
            </div>

            <div className="mine-baseinfo-content">
              {item.key}:{item.value}
            </div>
          </li>
        ))}
      </ul>
      <div className="mine-details">
        {details.map((item, index) => (
          <p className="mine-details-item" key={index}>
            {item}
          </p>
        ))}
      </div>
      <style jsx>{`
        .mine-container {
          position: absolute;
          top:0;
          bottom:0;
          left:0;
          right:0;
          background: rgb(240, 242, 241);
          color: ${themeColor};
          overflow: hidden;
          .mine-title {
            text-align: center;
            font-size: 36px;
            margin: 11% 0 0;
          }
          .mine-baseinfo {
            display: flex;
            width: 60%;
            justify-content: space-between;
            flex-wrap: wrap;
            margin: 2em auto 4em;
            &-icon {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 90px;
              height: 90px;
              border-radius: 50%;
              background: ${themeColor};
              &-svg {
                display: inline-block;
                width: 50px;
                height: 50px;
                background: center/contain;
              }
            }
            &-content {
              text-align: center;
              font-size: 18px;
            }
          }
          .mine-details{
            margin-top: 2em;
            color: rgba(0, 0, 0,.6);
            &-item{
              font-size: 18px;
              margin: 1.5em 0; 
              text-align: center;
            }
          }
        }
      `}</style>
    </section>
  )
}
