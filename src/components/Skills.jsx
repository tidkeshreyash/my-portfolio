import React from 'react'
import styled from 'styled-components'
import JavaImg from '../assets/java.png';
import SpringImg from '../assets/spring.png';
import SpringBootImg from '../assets/springboot.png';
import HibernateImg from '../assets/hibernate.png';
import MysqlImg from '../assets/mysql-database.png';
import AngularImg from '../assets/angular.png';
import cssImg from '../assets/css.svg.png';
import JavaScriptImg from '../assets/javascript.webp';
import htmlImg from '../assets/html.png';
import typescriptImg from '../assets/typescript.png';
import tailwind from '../assets/tailwind.webp';
import aws from '../assets/aws.svg';
import react from '../assets/react.svg';
import docker from '../assets/docker.png';
import jenkins from '../assets/jenkins.png';
import git from '../assets/git.svg';
import github from '../assets/github.svg';




const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding-top: 85px
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: #F2F3F4;
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: #b1b2b3;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: #171721;
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #b1b2b3;
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #F2F3F480;
  border: 1px solid #F2F3F480;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }

  &:hover {
    color: #fff;
    border-color: #fff;
    transform: translateY(-1px);
  }
`

const SkillImage = styled.img`
  width: 25px;
  height: 25px;
`


const Skills = () => {
    const skills = [
        {
            title: "Frontend",
            skills: [
                {
                    name: "React Js",
                    image: react,
                },
                {
                    name: "Angular",
                    image: AngularImg,
                },
                {
                    name: "HTML",
                    image: htmlImg,
                },
                {
                    name: "CSS",
                    image: cssImg,
                },
                {
                    name: "JavaScript",
                    image: JavaScriptImg,
                },
                {
                    name: "TypeScript",
                    image: typescriptImg,
                },
                {
                    name: "Tailwind",
                    image: tailwind,
                },

            ],
        },
        {
            title: "Backend",
            skills: [
                {
                    name: "Java",
                    image: JavaImg,
                },
                {
                    name: "Spring",
                    image: SpringImg,                
                },
                {
                    name: "Spring Boot",
                    image: SpringBootImg,
                },
                {
                    name: "Hibernate",
                    image: HibernateImg,
                },
                {
                    name: "MySQL",
                    image: MysqlImg,
                },
            ],
        },
        {
            title: "DevOps & Version Control",
            skills: [
                {
                    name: "AWS",
                    image: aws,
                },
                {
                    name: "Docker",
                    image: docker,
                },
                {
                    name: "Jenkins",
                    image: jenkins,
                },
                {
                    name: "Git",
                    image: git,
                },
                {
                    name: "GitHub",
                    image: github,
                },
            ],
        },
        {
            title: "Tools & Other",
            skills: [
                {
                    name: "Postman",
                    image: "https://www.svgrepo.com/show/354202/postman-icon.svg",
                },
                {
                    name: "Kafka",
                    image: "https://openwhisk.apache.org/images/icons/icon-kafka-white-trans.png",
                },
                {
                    name: "Wordpress",
                    image: "https://ouch-prod-var-cdn.icons8.com/vp/illustrations/previews/2F39coxTOMg6P_Wh.webp",
                },
                {
                    name: "IntelliJ",
                    image: "https://img.icons8.com/?size=512&id=61466&format=png",
                },
                {
                    name: "Spring Tool Suite",
                    image:
                        "https://pbs.twimg.com/profile_images/1856632411217399808/TdD2xQ8N_400x400.png",
                },
            ],
        },
    ];
    return (
        <Container id="skills" >
            <Wrapper>
                <div className="text-center mb-4 px-4">
                    <h2 className="text-4xl text-white font-bold mb-4">Skills</h2>
                    <p className="text-lg text-gray-300">
                        Here are some of my skills on which I have been working on for the past 2 years.
                    </p>
                </div>
                <SkillsContainer>
                    {skills.map((skill) => (
                        <Skill>
                            <SkillTitle>{skill.title}</SkillTitle>
                            <SkillList>
                                {skill.skills.map((item) => (
                                    <SkillItem>
                                        <SkillImage  alt="skill-logo" src={item.image} />
                                        {item.name}
                                    </SkillItem>
                                ))}
                            </SkillList>
                        </Skill>
                    ))}

                </SkillsContainer>
            </Wrapper>
        </Container>
    )
}

export default Skills