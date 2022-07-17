import React from 'react';
import '../../css/resume.css';
function Resume() {
    return(
        <div>
            <section id="resume">
                <h2 class="section-title">Resume</h2>
                <p class="resume">
                    Download my <a href="../../assets/CBurtonResume.pdf">Resume</a>
                    <ul>
                    Front-end proficiencies
                        <li>React</li>
                        <li><img src={require(`../../assets/images/HTML5.svg`)} alt="HTML" /></li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>BootStrap</li>
                        <li>JQuery</li>
                        <li>Handlebar.js</li>
                    </ul>
                    <ul>
                    Back-end proficiencies
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>MondoDB</li>
                    </ul>
                </p>
            </section>
        </div>
    )    
}

export default Resume;