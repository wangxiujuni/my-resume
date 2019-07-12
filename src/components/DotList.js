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
    const onScroll = e => {
      if (e.deltaY > 0) {
        if (currentIndexRef.current >= 4) {
          return
        }
        setCurrentIndex(prevState => prevState + 1)
      } else {
        if (currentIndexRef.current <= 0) {
          return
        }
        setCurrentIndex(prevState => prevState - 1)
      }
    }
    document.onwheel = _.debounce(onScroll, 300)
    return () => {
      document.onwheel = null
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
          @media screen and (max-width:600px){
            display:none;
          }
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index:2;
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
