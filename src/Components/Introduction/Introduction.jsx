import React from 'react'
import './Introduction.css'

export const Introduction = () => {
  return (
    <div   id='Intro'>
    <div className='intro__container'>

      {/* Introduction Area: */}
      <div className='introduction__welcome'>
        <h1>Welcome to <span className='introduction__span'>
            <span className='introduction__spantext'>Live Apps</span>
          </span></h1>
      </div>
      <div className='introduction__dev'>
        <h3>
          Developing something Bigger
        </h3>
      </div>
      <div className='introduction__para'>
        <p>
          We are building projects to learn and help others learn. Join our team of
          passionate contributors and make a difference in the open-source community.
          Help us build the future of web development
        </p>
      </div>
    </div>
</div>
  )
}
