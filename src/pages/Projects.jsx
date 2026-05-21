import React from 'react'
import { projects } from '../constants'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text pt-10'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>

      <p className='mt-5 text-slate-500 max-w-3xl'>
        Selected projects showcasing full-stack development, system design,
        and data-driven applications. Each project highlights my role,
        technical decisions, and engineering contributions.
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[420px] w-full' key={project.name}>

            {/* ICON */}
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className='mt-5 flex flex-col'>

              {/* TITLE */}
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>

              {/* ROLE */}
              {project.role && (
                <p className='text-sm text-slate-400 mt-1 font-medium'>
                  {project.role}
                </p>
              )}

              {/* DESCRIPTION */}
              <p className='mt-3 text-slate-500 leading-relaxed'>
                {project.problem && (
                  <p className='mt-3 text-slate-500'>
                    <span className='font-semibold text-slate-700'>Problem: </span>
                    {project.problem}
                  </p>
                )}

                {project.system && (
                  <p className='mt-3 text-slate-500'>
                    <span className='font-semibold text-slate-700'>System: </span>
                    {project.system}
                  </p>
                )}

                {project.features && (
                  <p className='mt-3 text-slate-500'>
                    <span className='font-semibold text-slate-700'>Features: </span>
                    {project.features}
                  </p>
                )}

                {project.tradeoffs && (
                  <p className='mt-3 text-slate-500'>
                    <span className='font-semibold text-slate-700'>Tradeoffs: </span>
                    {project.tradeoffs}
                  </p>
                )}

                {project.outcome && (
                  <p className='mt-3 text-slate-500'>
                    <span className='font-semibold text-slate-700'>Outcome: </span>
                    {project.outcome}
                  </p>
                )}
              </p>

              {/* TECH STACK */}
              {project.tech && (
                <p className='mt-3 text-sm text-slate-400'>
                  <span className='font-semibold text-slate-600'>Tech:</span>{' '}
                  {project.tech}
                </p>
              )}

              {/* LINKS */}
              <div className='mt-6 flex flex-col gap-3'>

                {/* DEPLOYMENT (OPTIONAL) */}
                {project.deploy && (
                  <div className='flex items-center gap-2'>
                    <a
                      href={project.deploy}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-semibold text-blue-600'
                    >
                      View Deployment
                    </a>
                    <img
                      src={arrow}
                      alt='arrow'
                      className='w-4 h-4 object-contain'
                    />
                  </div>
                )}

                {/* REPO (OPTIONAL — NOW FIXED) */}
                {project.link && (
                  <div className='flex items-center gap-2'>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-semibold text-blue-600'
                    >
                      View Repository
                    </a>
                    <img
                      src={arrow}
                      alt='arrow'
                      className='w-4 h-4 object-contain'
                    />
                  </div>
                )}

              </div>
            </div>

          </div>
        ))}
      </div>

      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default Projects