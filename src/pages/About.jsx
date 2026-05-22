import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'

import CTA from '../components/CTA'
import { skills, experiences } from '../constants'

const About = () => {
  return (
    <section className='max-container py-16'>

      <div className='max-w-4xl'>
        <h1 className='head-text'>
          About{' '}
          <span className='blue-gradient_text font-semibold drop-shadow'>
            Me
          </span>
        </h1>

        <p className='text-2xl font-semibold mt-4 text-slate-800'>
          Dominic Ghizzoni
        </p>

        <div className='mt-6 flex flex-col gap-5 text-slate-600 text-lg leading-8'>
          <p>
            I'm a software engineer and incoming M.S. Computer Science
            student at the University of Florida with a strong interest in
            algorithms, full-stack web development, and data-driven
            applications.
          </p>

          <p>
            I enjoy building scalable and intuitive software systems while
            combining analytical problem-solving with modern technologies
            such as React, Node.js, TypeScript, MongoDB, and cloud-based
            tools.
          </p>

          <p>
            My interests include software engineering, data analysis,
            backend architecture, and developing applications that are both
            technically efficient and user-focused.
          </p>
        </div>
      </div>

      <div className='py-20'>
        <h3 className='subhead-text'>Technical Skills</h3>

        <div className='mt-14 flex flex-wrap gap-10'>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className='relative group'
            >

              <div className='absolute -top-11 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10'>
                <div className='bg-slate-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap shadow-xl'>
                  {skill.name}
                </div>
              </div>

              <div className='block-container w-20 h-20 transition-transform duration-300 group-hover:scale-110'>
                <div className='btn-back rounded-2xl' />

                <div className='btn-front rounded-2xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-10'>
        <h3 className='subhead-text'>Education</h3>

        <div className='mt-12 flex'>
          <VerticalTimeline lineColor='#334155'>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.title}
                date={experience.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                iconStyle={{
                  background: experience.iconBg,
                }}
                contentStyle={{
                  borderBottom: '8px solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow:
                    '0 10px 30px rgba(0,0,0,0.08)',
                  borderRadius: '18px',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid rgb(226 232 240)',
                }}
              >
                <div>
                  <h3 className='text-slate-900 text-xl font-bold'>
                    {experience.title}
                  </h3>

                  <p
                    className='text-slate-500 font-medium text-base mt-1'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-3'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-slate-600 font-normal pl-1 text-sm leading-6'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200 my-16' />

      <CTA />
    </section>
  )
}

export default About