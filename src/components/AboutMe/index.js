import React from 'react';
import headshot from '../../assets/Abel.jpg';

function AboutMe() {
  return (
    <div>
        <img src={headshot} alt="headshot"></img>
        <p>Full stack web developer with mechanical engineering and software engineering
            experience educated at UT Austin. Skills in HTML, Javascript, Node.JS, and React and
            strengths in agile methodology, teamwork, problem solving, and practical solutions. Fascinated by computer science
            fundamentals and approaching problems bit-by-bit until the bug is fixed. 
            I worked on a team of 5 to implement a MERN single page application that helps the user keep track of their daily exercise routine.
            I'm excited to utilize my skills as part of a fast-paced, quality-driven team to build better experiences for our users.
        </p>
    </div>
  );
};

export default AboutMe;