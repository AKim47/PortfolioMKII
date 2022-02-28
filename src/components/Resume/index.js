import React from 'react';
import file from '../../assets/CodingResume.pdf'

function Resume() {
    return(
        <div>
            <h3>My Proficiencies</h3>
            <ul className="flex-row"></ul>
                <li className="mx-1">Front-End: JavaScript, React, JQuery, HTML, CSS</li>
                <li className="mx-1">Back-End: Node.JS, Express, MySQL, Sequelize, NoSQL, REST APIs, Python</li>
                <li className="mx-1">Misc: Git, Agile Methodology, TDD, Heroku, MongoDB</li>
            <a href = {file} download>Download Resume</a>
        </div>
    )

}

export default Resume;