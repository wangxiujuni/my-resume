import React, { useEffect, useRef } from 'react'
import { titleList, themeColor } from '@/common/data.js'
import _ from 'lodash'

function DotList({ currentIndex, setCurrentIndex }) {
  const currentIndexRef = useRef(0) //使用ref将state保存为实例域

  const goto = index => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    currentIndexRef.current = currentIndex
  }, [currentIndex])

  useEffect(() => {
    //适配鼠标滚轮事件
    const onScroll = e => {
      if (currentIndexRef.current<4&&e.deltaY > 0) {
        setCurrentIndex(prevState => prevState + 1)
        return
      }
      if(currentIndexRef.current>0&&e.deltaY < 0){
        setCurrentIndex(prevState => prevState - 1)
        return
      }
    }
    document.onwheel = _.debounce(onScroll, 300)
    //适配滑动事件
    let startClientY
    const onTouchStart = e => {
      startClientY = e.changedTouches[0].clientY
    }
    const onTouchEnd = e => {
      const endClientY = e.changedTouches[0].clientY
      if (currentIndexRef.current < 4&&startClientY - endClientY > 200) {
        setCurrentIndex(prevState => prevState + 1)
        return
      } 
      if (currentIndexRef.current > 0&&startClientY - endClientY < -200) {
        setCurrentIndex(prevState => prevState - 1)
        return
      }
    }
    document.ontouchstart = onTouchStart
    document.ontouchend = onTouchEnd

    return () => {
      document.onwheel = null
      document.ontouchstart = null
      document.ontouchend = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <nav className="dot-list">
      <ul>
        {titleList.map((item, index) => {
          let className = 'dot-list-item'
          if (currentIndex === index) {
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
              <em>
                <img src={item.svg} alt="" />
              </em>
              <span>{item.title}</span>
            </li>
          )
        })}
      </ul>

      <style jsx>{`
        .dot-list {
          @media screen and (max-width: 600px) {
            display: none;
          }
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          @mixin hover {
            transform: scale(2);
            img {
              opacity: 1;
            }
          }
          &-item {
            position: relative;
            margin: 1.6em;
            width: 20px;
            height: 20px;
            em {
              display: inline-block;
              width: inherit;
              height: inherit;
              border-radius: 50%;
              background: ${themeColor};
              filter: saturate(3);
              overflow: hidden;

              &:hover {
                @include hover;
                transition: transform ease 0.6s;
                cursor: pointer;
              }
              img {
                opacity: 0;
                width: inherit;
                height: inherit;
                object-fit: fill;
              }
            }
            span {
              position: absolute;
              left: -70px;
              top: 50%;
              transform: translateY(-50%);
              padding: 5px;
              color: white;
              border-radius: 5px;
              opacity: 0;
              background: ${themeColor};
              filter: saturate(3);
            }
            span::after {
              content: '';
              position: absolute;
              top: 50%;
              transform: translate(49%, -50%);
              border-left: 10px solid ${themeColor};
              border-top: 10px solid transparent;
              border-bottom: 10px solid transparent;
            }
            em:hover + span {
              opacity: 1;
              tansition: opacity ease 1s;
            }
          }
          &-current {
            em {
              @include hover;
            }
          }
        }
      `}</style>
    </nav>
  )
}

export default DotList
