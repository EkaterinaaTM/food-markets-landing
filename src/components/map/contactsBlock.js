import React from 'react'
import Container from '../container/container'

import data from '../../data.js';

const ContactsBlock = () => (
  <Container>
    <div className='contacts' id='contacts'>
      <h4 className='title_h4'>{data.map.title}</h4>
      <p className='text mb-56'>{data.map.desc}</p>

      <div className='contacts_departments-wrapper'>
        {data.map.departmentsContacts.map((department, index) => (
          <DepartmentContact {...department} key={index}/>
        ))}
      </div>

    </div>
  </Container>
);

const DepartmentContact = ({ department, phone, mail }) => (
  <div className='contacts_department'>
    
    <p className='mb-16 subtitle subtitle--black'>{department}</p>

    {phone.map((phone, index) => (
      <a href={`tel:${phone}`} key={index}>
        <p className='link link--green mb-16' dangerouslySetInnerHTML={{ __html: phone}} />
      </a>
    ))}

    <a href={`mailto:${mail}`}>
      <p className='link link--green mb-16'>{mail}</p>
    </a>

  </div>
);

export default ContactsBlock;