import React from 'react'
import Container from '../container/container'
import ParallaxObjects from './parallaxObjects'

import data from '../../data'

const Team = () => (
    <Container>
      <section className='team'>
        <ParallaxObjects />
        <h2 className='title_h2' dangerouslySetInnerHTML={{ __html: data.team.title }} />

        <div className='team_members'>
          {data.team.teamMembers.map((member, index) => (
            <TeamItem {...member} key={index} />
          ))}
        </div>
        
      </section>
    </Container>
);

const TeamItem = ({ photo, name, position }) => (
  <div className='team_members_item'>
    <div className='team_members_item_photo'>
      <img src={photo} alt='photo' />
    </div>
    <p className='text text--black mb-8'>{name}</p>
    <p className='text'>{position}</p>
    <div className='team_members_item_line' />
  </div>
)
export default Team;