import React from 'react';
import './Resume.css';

class Resume extends React.Component {
    render() {
        return (
            <div className="container">
            <h1 align="center">Resume</h1>
            <p>
                I'm a senior data engineer for PwC's Assurance Innovation and Technology team.
                My expertise is in building scalable data pipelines, backend systems and supporting packages.
                I primarily use Python, JavaScript (Node.js) and SQL. 
                My extended toolkit includes Docker, Git, HTML and CSS. I love to learn new things, currently I'm focusing on React and Natural Language Processing. 
                My background is in Finance and Management Information Systems. 
                To learn more, why not check out my full <a href="/resume.pdf" download>resume</a>?
            </p>
            </div>
        )
    }
}

export default Resume;