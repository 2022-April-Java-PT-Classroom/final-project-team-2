import BioCard from "../../components/bios/biosCard";
import React from "react";
import SamLeiva from "../../assets/bioPics/SamLeiva.jpg"
import style from "../about/style.module.scss";

const About =()=>{
    return(  <div>
        <div>
            <section>
                <div className={style.heroAbout}>
                    <div className={style.headTitle}>Get in touch</div>
                    <div className={style.subTitle}>The Developers Team</div>
                    
                </div>
            </section>
            <div className={style.developers}>
            <BioCard
                
                bioName="Samuel Leiva"
                imageDev ='https://media-exp1.licdn.com/dms/image/D5635AQHyIoo2Ijofzw/profile-framedphoto-shrink_400_400/0/1658445629590?e=1661475600&v=beta&t=VLoAKL5xx11-bD3sHXifNMEzKFhwFXCEAmblbL51HF4'
                bioTitle="Full-Stack Software Developer"
                bioDescription="I enjoy creating things that live on the internet. I am a Full-Stack Software 
                Developer specializing in building (and occasionally designing) exceptional digital experiences. My focus these days is building accessible, inclusive 
                products and digital experiences at Lab275 for a variety of clients. I also recently creating a DownTime tracker for Amazon warehouses using Java for Back-End and React 
                JS for the Front-End."
                
                gitHub="https://samleivadev.github.io/profile/"
              
            />
            <BioCard
                
                bioName="Penny Schuenke"
                imageDev ='https://media-exp1.licdn.com/dms/image/C5603AQEts2rMqIO8nA/profile-displayphoto-shrink_400_400/0/1657918448299?e=1665619200&v=beta&t=JJsa43KyIP8w35l5eVUcIkPfTnJaLTPEDvGFgl458cE'
                bioTitle="Full-Stack Software Developer"
                bioDescription="Hi I'm Penny and I Love to Create Things that make a differeance ,I'm a Full-stack jr. developer with a passion to learn and grow , I live in the greater columbus area but im from all over im from a militarty Family and spouse , I have 5 yrs in marketing and Social Media Content creation, 8 yrs photography and videographer, 10yrs  management in marketing, sales promoting, 12yrs in the medical feild ER Trama Tech , ICU ,Pediatric & Phelbotomist
                . with a degree in Art"
                // bioSkills="Java, CSS, HTML, JavaScript, React, Node"
                gitHub="https://www.linkedin.com/in/penny-schuenke/"
              
            />
            <BioCard
                
                bioName="Stephanie Ingraham"
                imageDev ='https://media-exp1.licdn.com/dms/image/C5603AQGtSGbsaoluQw/profile-displayphoto-shrink_400_400/0/1651262793216?e=1665619200&v=beta&t=k002SuyY7DnneOk4WIAdAfF2Lc5nQxQHdPICcmzFcSg'
                bioTitle="Full-Stack Software Developer"
                bioDescription="Hi! I am a software developer who loves building a positive synergetic environment and creating an appealing vision on the front page. Born in Alabama and leveling up here in Ohio, I decided to pursue a career change in software development to put my problem solving skills to the big screen through We Can {Code} IT."
                // bioSkills="Java, CSS, HTML, JavaScript, React, Node"
                gitHub="Website"
              
            />
            <BioCard
                
                bioName="Jimmy Negron"
                imageDev ='https://media-exp1.licdn.com/dms/image/D5635AQFoXUCM8D4vtw/profile-framedphoto-shrink_200_200/0/1660170763315?e=1661212800&amp;v=beta&amp;t=pZO4r04S2SM5GFrjl5meAxZ8DclQ1NGi-AmtftJbiMI'
                bioTitle="Full-Stack Software Developer"
                bioDescription="My name is Jimmy, I am a software developer .I enjoy problem solving and working with computers, started my journey as a software developer watching videos and googling Problems and errors. Then I found we can code it and learned the correct skills I need to be a Full Stack Developer."
                // bioSkills="Java, CSS, HTML, JavaScript, React, Node"
                gitHub="https://github.com/JNegron300"
            
              
            />
            <BioCard
                
                bioName="Dane Firestone"
                imageDev ='https://media-exp1.licdn.com/dms/image/C4D03AQGRKaUhnxlf0A/profile-displayphoto-shrink_400_400/0/1658958812133?e=1665619200&v=beta&t=QU6vlxq1GD-ZsZHYdM54QS2wI9021XTOxZ9FMtiVPLg'
                bioTitle="Full-Stack Software Developer"
                bioDescription="My passion for tech started as kid and hasn't stopped evolving. After starting my own Web Design & IT business that focused on developing small businesses in my rural hometown. I took an opportunity to move to the Harrisburg area and start at Amazon. Amazon has provided me the space to grow my career in Information Technology and continually expand my knowledge. I am currently pursuing Full Stack Development through WCCI and cannot wait to see what awaits."
                // bioSkills="Java, CSS, HTML, JavaScript, React, Node"
                gitHub="https://github.com/danefirestone"
              
            />
            <BioCard
                
                bioName="Mark Sypniewski"
                imageDev ='https://media-exp1.licdn.com/dms/image/D4E35AQFOu-f4cUILfg/profile-framedphoto-shrink_400_400/0/1660703561600?e=1661313600&v=beta&t=wahcQeerfBfwsHxfa_LnTEy8Xn2nPDua1TSkQF-CaKs'
                bioTitle="Full-Stack Software Developer"
                bioDescription="Mark is a Full-stack Jr. Developer from Cleveland, Ohio. He has 17 years experience in 3D modeling and CNC programming as well as 10 years as a Design Engineer in the Aerospace field."
                // bioSkills="Java, CSS, HTML, JavaScript, React, Node"
                gitHub="https://github.com/mark-sypniewski"
              
            />
            
            </div>
            <section>
                <div className={style.heroAbout}>
                    <div className={style.bottonTitle}>“Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.”</div>
                    <div className={style.subTitle}>– Patrick McKenzie.</div>
                    
                </div>
            </section>
            
        </div>
    </div>);
}
export default About;