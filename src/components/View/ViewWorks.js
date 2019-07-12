import React from 'react'
import { works, themeColor } from '@/common/data'

const { title, worksList } = works

export default function ViewWorks(props) {
  //为table添加动画
  let workItemClass = 'works-main-item'
  if (props.currentIndex === 3) {
    workItemClass += ' animated zoomIn'
  }

  return (
    <section className={`works-container ${props.className}`}>
      <div className="works-title">{title}</div>
      <div className="works-main">
        {worksList.map((item, index) => (
          <div className={`${item.className} ${workItemClass}`} key={index}>
            <div className="works-main-item-title">{item.name}</div>
            {/* a11yWarning */}
            {/* eslint-disable-next-line*/}
            <a
              href={item.url}
              className="works-main-item-image"
              style={{ backgroundImage: `url(${item.imageURL})` }}
            />
            <a href={item.url} className="works-main-item-detail">
              {item.details.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </a>
          </div>
        ))}
      </div>
      <style jsx>{`
        .works-container {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: #f0f2f1;
          overflow: hidden;
          .works-title {
            margin-top: 10%;
            text-align: center;
            font-size: 36px;
            color: ${themeColor};
          }
          .works-main {
            display: grid;

            width: 80%;
            height: 30rem;
            margin: 0 auto;
            grid-template: repeat(8, 1fr) / repeat(20, 1fr);
            &-item {
              position: relative;
              font-size: 18px;
              border-radius: 10px;
              &-title {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                padding-left: 5px;
                color: white;
                background: #81d4fa;
                border-radius: 0 0 10px 10px;
              }
              &-image {
                display: block;
                height: 100%;
                background: center/ cover no-repeat;
                border-radius: 10px;
              }
              &-detail {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                border-radius: 10px;
                background: rgba(0, 0, 0, 0.7);
                color: rgb(153, 153, 153);
                opacity: 0;
                &:hover {
                  opacity: 1;
                }
                p {
                  margin: 5px 0;
                }
              }
            }
            .remuse {
              grid-area: 2/2 / span 4 / span 10;
            }
            .weather {
              grid-area: 1/-8 / span 6 / span 5;
            }
          }
        }
      `}</style>
    </section>
  )
}
