import React, { useState, useEffect } from 'react'
import { titleList, themeColor } from '@/common/data.js'
import _ from 'lodash'


//问题，使用useEffect第二个空数组参数，只在mount后调用绑定onwhell。事件监听函数通过作用域链访问的state永远是初始值
//尝试过function、尝试过对象属性
function DotList() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goto = index => {
    setCurrentIndex(index)
  }
  const onScroll = e => {
    if (e.deltaY > 0) {
      if (currentIndex >= 4) {
        return
      }
      setCurrentIndex(prevState => prevState + 1)
    } else {
      if (currentIndex <= 0) {
        return
      }
      setCurrentIndex(prevState => prevState - 1)
    }
  }
  const throttle=_.throttle(onScroll,1000)


  useEffect(() => {   
    document.onwheel = throttle
    return () => {
      document.onwheel = null
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  })
 
  return (
    <nav className="dot-list">
      <ul>
        {titleList.map((item, index) => {
          let className = 'dot-list-item'
          if (currentIndex === index) {
            console.log(currentIndex,11)
            
            className += ' dot-list-current'
          }
          return (
            <li
              className={className}
              key={index}
              onClick={() => {
                goto(index)
              }}
            >
              <img src={item.svg} alt="" />
            </li>
          )
        })}
      </ul>

      <style jsx>{`
        .dot-list {
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          @mixin hover {
            transform: scale(2);
            img {
              opacity: 1;
            }
          }
          &-item {
            width: 20px;
            height: 20px;
            margin: 1.6em;
            border-radius: 50%;
            background: ${themeColor};
            &:hover {
              @include hover;
              transition: transform ease 0.6s;
            }
            img {
              opacity: 0;
              width: inherit;
              height: inherit;
              object-fit: fill;
            }
          }
          &-current {
            @include hover;
          }
        }
      `}</style>
    </nav>
  )
}

export default DotList
