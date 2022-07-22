import React from 'react';
import '../../css/about.css';


function About() {
    return (
        <div>
            <section id="aboutme">
                <section class="profile-pic">
                    <img src={require(`../../assets/images/profilepic.webp`)} alt="/" />
                    
                </section>  
                <h2 class="section-title">About Me</h2>
                <p class="aboutme-info">
                    Hello, I am Chris.
                    <br/>
                    <br/>
                    I’m an aspiring full stack web developer in Southern Minnesota. 
                    <br/> 
                    <br/>   
                    I have spent the last two decades in manufacturing. I have built ATV’s, boats, and Indian motorcycles. Do I ride a motorcycle? No, my wife would kill me. Do I want to? Oh yeah. I’ll convince her someday just like I convinced her to marry me and to stop pursuing other, hunkier, possibly God like blonde Chris’s. 
                    My initial degree was in Information Technology, but it was never enough for me. You see, I love building things hence the motorcycle assembly career. Becoming a full stack developer has led me to merge my two biggest passions, problem solving and developing programs. 
                    I fill the void to create physical objects by spending an exorbitant amount of time designing prototypes for my 3d printer at home. I’m currently designing a display for my wifes (and my) Disneyland pin collection. 
                    When I am not 3D printing, I like to watch movies, read Sci-Fi novels, take road trips and nap. That last one has my heart. Don’t tell my wife. 
                </p>
            </section>
        </div>
    )
}

export default About;