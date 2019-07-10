import React from 'react'
import avatar from '@/assets/avatar.jpg'
import { themeColor } from "@/common/data"

export default function ViewHome() {
  return (
    <section className="home-container">
      <div>
        <a className="home-avatar" href="https://github.com/wangxiujuni" />
      </div>
      <div>
        <p className="home-title"/>
        <div className="home-details">
          <p className="home-details-list"/>
        </div>
      </div>
      <style jsx>{`
        .home-container{
          height:100vh;
          background:${themeColor};
          .home-avatar{
            display: block;
            width: 10em;
            height: 10em;
            margin:0 auto;
            background: url(${avatar}) center / contain no-repeat;
            border-radius: 50%;
          }
        }
      `}</style>
    </section>
  )
}
