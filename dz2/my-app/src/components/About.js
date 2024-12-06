import React from 'react';

const About = ({ info }) => {
  const { title, body } = info
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

export default About;
