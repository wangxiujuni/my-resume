import React from 'react'
import { experience, themeColor } from '@/common/data'

const {
  title,
  companyImage,
  company,
  job,
  start,
  end,
  jobContent,
  contactIcon
} = experience

export default function ViewContact(props) {
  return (
    <section className={`experience-container ${props.className}`}>
      <div className="experience-title">{title}</div>
      <div className="experience-main">
        <div className="experience-end">
          <i className="experience-circle" />
          至今
        </div>
        <div className="experience-company">待续...</div>
        <div className="experience-end">
          <i className="experience-circle" />
          {end}
        </div>

        <div className="experience-company">
          <div
            className="experience-company-image"
            style={{ backgroundImage: `url(${companyImage})` }}
          />
          <div className="experience-company-content">
            <p className="experience-company-title">
              {company}—— <span className="experience-company-job">{job}</span>
            </p>
            <div>
              {jobContent.map((item, index) => (
                <p className="experience-company-content-item" key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="experience-start">
          <i className="experience-circle" />
          {start}
        </div>
      </div>
      <footer className="experience-footer">
        {contactIcon.map((item, index) => (
          /* a11yWarning */
          /* eslint-disable-next-line*/
          <a
            href={item.url}
            className={`experience-footer-item ${item.className}`}
            style={{ backgroundImage: `url(${item.icon})` }}
            key={index}
          />
        ))}
      </footer>
      <style jsx>{`
        .experience-container {
          position: absolute;
          top:0;
          bottom:0;
          left:0;
          right:0;
          background: ${themeColor};
          overflow: hidden;
          .experience-title {
            text-align: center;
            margin-top: 10%;
            color: white;
            font-size: 36px;
          }
          .experience-main {
            padding: 0 20%;
            color: rgba(0, 0, 0, 0.6);
            margin-top: 8%;
            @media screen and (max-width:600px){
              padding:0 5%;
            }
            .experience-company {
              display: flex;
              align-items: center;
              border-left: 5px solid rgba(0, 0, 0, 0.6);
              margin: 0 5px;
              padding: 1em 1em 1em 2em;

              &-image {
                width: 100px;
                height: 50px;
                flex:none;
                background: center/ contain no-repeat;
              }
              &-content {
                padding-left: 1em;
                font-size: 17px;
                @media screen and (max-width:600px){
                  font-size:13px;
                }
                &-item {
                  margin: 5px 0;
                }
              }
              &-title {
                font-size: 20px;
                @media screen and (max-width:600px){
                  font-size: 16px;
                }
              }
              &-job {
                color: rgba(0, 0, 0, 0.4);
                font-size: 18px;
                @media screen and (max-width:600px){
                  font-size:14px;
                }
              }
            }
            .experience-end,
            experience-start {
              color: rgba(0, 0, 0, 0.6);
            }
          }
          .experience-circle {
            display: inline-block;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            background: white;
          }
          .experience-footer {
            position: absolute;
            bottom: 10%;
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            &-item {
              position: relative;
              width: 3em;
              height: 3em;
              margin: 0 1em;
              border-radius: 50%;
              border: 1px solid white;
              background: center/ contain no-repeat;
            }
            .wechat:hover {
              &::before {
                content: '';
                position: absolute;
                width: 10em;
                height: 10em;
                right:-150px;
                top:-50px;
                background: url(${require('@/assets/qrcode.png')}) center/ contain no-repeat;
              }
            }
          }
        }
      `}</style>
    </section>
  )
}
