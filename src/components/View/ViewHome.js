import React from 'react'
import { home } from '@/common/data.js'
import { themeColor } from '@/common/data'

const { avatar, avatarURL, title, details } = home

export default function ViewHome() {
  return (
    <section className="home-container">
      <div className="home-avatar">
        {/* a11yWarning */}
        {/* eslint-disable-next-line*/}
        <a href={avatarURL} />
      </div>
      <div className="home-content">
        <p className="home-content-title">{title}</p>
        <div className="home-content-details">
          {details.map((item, index) => (
            <p className="home-details-list" key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
      <style jsx>{`
        .home-container {
          height: 100vh;
          background: ${themeColor};
          .home-avatar{
            border-top:1px solid transparent;
            a{
            display: block;
            width: 10em;
            height: 10em;
            margin:10% auto 0;
            background: url('${avatar}') center / contain no-repeat;
            border-radius: 50%;
            transition: transform ease 0.5s;
              &:hover {
                transform: scale(1.1);
                }
              }
          }
          .home-content{
            width:80%;
            margin:0 auto;
            color:white;
            text-align: center;
            $leading: 20px;
            .home-content-title{
              font-size: 30px;
              padding: $leading 0;
              border-bottom: 1px solid white;
            }

            .home-content-details{
              .home-details-list{
                margin: $leading 0;
                font-size:20px;
              }
              .home-details-list:first-child{
                margin: $leading 0;
                font-size:24px;
              }
            }
          }
        }
      `}</style>
    </section>
  )
}
