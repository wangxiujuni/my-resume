import React, { useEffect,useRef } from 'react'
import { titleList, themeColor } from '@/common/data.js'
import _ from 'lodash'


function DotList({currentIndex, setCurrentIndex}) {

  const currentIndexRef=useRef(0)//使用ref将state保存为实例域

  const goto = index => {
    setCurrentIndex(index)
  }



  useEffect(() => {
    currentIndexRef.current=currentIndex
  },[currentIndex])

  useEffect(() => {   
    const onScroll = e => {
      console.log(currentIndexRef.current)
      
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
    document.onwheel = _.debounce(onScroll,300)
    return () => {
      document.onwheel = null
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
 
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
              <span>{item.title}</span>
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
            filter: saturate(3);
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
