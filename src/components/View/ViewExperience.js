import React from 'react'
import { experience, themeColor } from '@/common/data'

const { title, companyImage, company, job, start, end, jobContent } = experience

export default function ViewContact() {
  return (
    <section className="experience-container">
      <div className="experience-title">{title}</div>
      <div className="experience-main">
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
                <p className="experience-company-content-item" key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="experience-start">
          <i className="experience-circle" />
          {start}
        </div>
      </div>
      <style jsx>{`
        .experience-container {
          background: ${themeColor};
          height: 100vh;
          overflow: hidden;
          .experience-circle {
            display: inline-block;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            background: white;
          }
          .experience-title {
            text-align: center;
            margin-top: 10%;
            color: white;
            font-size: 36px;
          }
          .experience-company {
            display: flex;
            align-items: center;
            border-left: 5px solid rgba(0, 0, 0, 0.6);
            margin: 0 5px;
            padding: 1em;
            
            &-image {
              width: 100px;
              height: 50px;
              background: center/ contain no-repeat;
            }
            &-content {
              padding-left: 1em;
              font-size: 17px;
              &-item{
                margin:5px 0;
              }
            }
            &-title {
              color: rgba(0, 0, 0, 0.6) ;
              font-size: 20px;
            }
            &-job {
              color:rgba(0, 0, 0, 0.4);
              font-size: 18px;
            }
          }
          .experience-end,
          experience-start {
            color: rgba(0, 0, 0, 0.6);
          }
        }
      `}</style>
    </section>
  )
}
