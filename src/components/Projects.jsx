import React from 'react'
import { useState } from 'react'
import ProjectCard from './ProjectCards'
import styled from 'styled-components';

const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
    padding-top: 85px;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
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

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: #b1b2b3;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid #854CE6;
    color: #854CE6;
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: #854CE620;
    `
    }
    &:hover {
        background: #854CE68;
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`
const Divider = styled.div`
    width: 1.5px;
    background: #854CE6;
`


const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;


const Projects = ({openModal,setOpenModal}) => {
     const projects = [
    {
      id: 9,
      title: "Electricity Billing System",
      date: "Jun 2022 - Jul 2022",
      description:
        "Developed an electricity billing system using Java Swing GUI toolkit, allowing users to manage billing information and generate invoices.",
      image:
        "https://user-images.githubusercontent.com/94781499/197719527-707a6c41-97f2-4461-8115-42118ffd9d01.png",
      tags: [
        "Java",
        "Java Swing",
        "MySQL",
        "Netbeans",
      ],
      category: "web app",
      github: "https://github.com/tidkeshreyash/CC-OCR-JAVA-DEVELOPMENT",
      webapp: "https://github.com/tidkeshreyash/CC-OCR-JAVA-DEVELOPMENT",
       member: [
      {
        name: "Rishav Chanda",
        img: "https://avatars.githubusercontent.com/u/64485885?v=4",
        linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
        github: "https://github.com/rishavchanda/",
      },
      {
        name: "Upasana Chaudhuri",
        img: "https://avatars.githubusercontent.com/u/100614635?v=4",
        linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
        github: "https://github.com/upasana0710",
      },
    ],
    },
    {
      id: 0,
      title: "WanderLust",
      date: "Sept 2023 - Oct 2023",
      description:
        "Wanderlust is an innovative online platform that facilitates the seamless connection between property owners and travelers offering a convenient solution for holiday accommodation. Wanderlust enables property owners to effortlessly list theirspaces for short-term rentals, while providing travelers with a diverse range of options for a comfortable stay away from home.",
      image:
        "https://user-images.githubusercontent.com/94781499/278882931-ddcb1d82-8578-431a-82c7-6acd3adaec98.png",
      tags: ["HTML","CSS", "MongoDb", "Node Js", "Express Js",],
      category: "web app",
      github: "https://github.com/tidkeshreyash",
      webapp: "https://github.com/tidkeshreyash",
    },
    
    {
      id: 1,
      title: "LearnerBits",
      date: "May 2023",
      description:
        "LearnerBits is a dynamic WordPress website developed using Elementor, catering to the diverse needs of students. With a substantial user base of 15,000 visitors, the platform offers an extensive range of services, including comprehensive study notes, insightful blogs on the latest technologies, and regular job updates.",
      image:
        "https://user-images.githubusercontent.com/94781499/278882944-adea6f38-9920-4ad5-93ba-7fb17c2ddb51.png",
      tags: [
        "Elementor",
        "WordPress",
      ],
      category: "web app",
      github: "https://learnerbits.com/",
      webapp: "https://learnerbits.com/",
    },
    {
      id: 2,
      title: "Stress Detection System",
      date: "June 2023 - Aug 2023",
      description:
        "Designed and implemented a Stress Detection System utilizing Machine Learning, with a focus on leveraging the Naive Bayes algorithm. Developed the system to analyze and classify stress levels based on diverse input features, achieving accurate and reliable predictions. This project involved extensive data preprocessing, feature engineering, and model training to create a robust and effective stress assessment tool. The successful implementation demonstrates strong proficiency in machine learning techniques and a keen ability to address real-world challenges in mental health monitoring.",
      image:
        "https://user-images.githubusercontent.com/94781499/278882952-eec6bc63-52de-446e-b7d8-512727250d9b.png",
      tags: ["Python","Naive Bayes Algorithm"],
      category: "machine learning",
      github: "https://github.com/tidkeshreyash",
      webapp: "https://github.com/tidkeshreyash",
    },
    {
      id: 10,
      title: "College App",
      date: "Jun 2023 - Jul 2023",
      description:
        "The College App aims to create a user-friendly mobile application that provides comprehensive information about a college.",
      image:
        "https://user-images.githubusercontent.com/94781499/256132534-e113d3ed-f573-4cfd-81bb-bcbaad27a111.png",
      tags: ["Java","XML","Eclipse ADT"],
      category: "android app",
      github: "https://github.com/tidkeshreyash/My_College_App",
      webapp: "https://github.com/tidkeshreyash/My_College_App",
    },
    {
      id: 4,
      title: "Usability Hub[Clone Website]",
      date: "Jul 2021",
      description:
        "Developed a fully functional clone of Usability Hub, a prominent usability testing platform, using HTML and CSS. Meticulously crafted the user interface to replicate the original site's design and responsiveness. This project showcases proficiency in front-end web development, attention to detail in design implementation, and a solid understanding of HTML and CSS principles. The clone faithfully captures the user experience of Usability Hub, reflecting a commitment to creating polished and user-friendly web applications",
      image:
        "https://user-images.githubusercontent.com/94781499/278882909-c0acdb51-4587-4929-bb81-54117230b416.png",
      tags: ["HTML", "CSS"],
      category: "web app",
      github: "https://github.com/tidkeshreyash/Usability_Hub_WebsiteClone",
      webapp: "https://github.com/tidkeshreyash/Usability_Hub_WebsiteClone",
    },
  ];
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <div className="text-center mb-4 px-4">
                    <h2 className="text-4xl text-white font-bold mb-4">Projects</h2>
                    <p className="text-lg text-gray-300">
                         I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
                    </p>
                </div>
      
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEBSITES</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEBSITES</ToggleButton>
          }
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects