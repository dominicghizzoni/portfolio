import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center neo-brutalism-blue'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm <span className='font-semibold'>Dominic.</span>
            <br/>I'm a software engineer.
        </h1>
    ),
    2: (
        <InfoBox 
            text="I have experience in full-stack development, with a focus on React and Node.js. I enjoy building interactive web applications and learning new technologies."
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox 
            text="I have experience in full-stack development, with a focus on React and Node.js. I enjoy building interactive web applications and learning new technologies."
            link="/projects"
            btnText="View Projects"
        />
    ),
    4: (
        <InfoBox 
            text="I have experience in full-stack development, with a focus on React and Node.js. I enjoy building interactive web applications and learning new technologies."
            link="/contact"
            btnText="Get In Touch"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo