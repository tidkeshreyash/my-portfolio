import React from 'react'
import { useState } from 'react'
import ProjectCard from './ProjectCards'
import styled from 'styled-components';
import LBImg from '../assets/lb_project.png'
import LCImg from '../assets/lc_project.png'
import stressImg from '../assets/stressDetection.png'
import barImg from '../assets/barcounter.png'
import portfolioImg from '../assets/portfolio.png'
import retailImg from '../assets/retail.png'
import teamicon from '../assets/teamicon.png'
import femaleIcon from '../assets/femaleIcon.png'
import maleIcon from '../assets/maleIcon.svg'
import heroImg from '../assets/heroImg.JPG'

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
      id: 1,
      title: "Liquor Counter",
      date: "Nov 2024 - Feb 2025",
      description:
        "An ERP-based software solution designed for liquor stores to manage inventory, generate reports, and handle point-of-sale operations efficiently. In this project, I contributed by developing multiple modules such as license management, scheme estimates, and dynamic user reports (e.g., sales, stock). I also improved data loading performance and optimized APIs to ensure faster and smoother operations. Additionally, I resolved critical UI rendering issues, which enhanced the overall user experience and responsiveness of the system.",
      image: LCImg,
      tags: ["Java","Spring Boot","Spring Security","JDBC API","MYSQL","Angular"],
      category: "web app",
      github: "https://github.com/tidkeshreyash/",
      webapp: "https://github.com/tidkeshreyash/",
      member: [
      {
        name: "Shreyash Tidke",
        img: heroImg,
        linkedin: "https://www.linkedin.com/in/shreyash-tidke-2b6872219/",
        github: "https://github.com/tidkeshreyash/",
      },
      {
        name: "Team Members",
        img: teamicon,
        linkedin: "",
        github: "",
      },
    ],
    },
    {
      id: 2,
      title: "LearnerBits",
      date: "May 2023 - July 2023",
      description:
        "LearnerBits is a dynamic WordPress website developed using Elementor, catering to the diverse needs of students. With a substantial user base of 200K visitors, the platform offers an extensive range of services, including comprehensive study notes, insightful blogs on the latest technologies, and regular job updates.",
      image: LBImg,
      tags: [
        "Elementor",
        "WordPress","Rank Math", "C7","Cloudflare","Astra"
      ],
      category: "web app",
      github: "https://learnerbits.com/",
      webapp: "https://learnerbits.com/",
       member: [
      {
        name: "Shreyash Tidke",
        img: heroImg,
        linkedin: "https://www.linkedin.com/in/shreyash-tidke-2b6872219/",
        github: "https://github.com/tidkeshreyash/",
      },
      {
        name: "Prajwal Bhundhade",
        img: "https://www.prajwalbundhade.in/_next/image?url=%2Fassets%2Fport-photo.jpg&w=750&q=75",
        linkedin: "https://www.linkedin.com/in/prajwalbundhade",
        github: "https://github.com/prajwalbundhade",
      },
    ],
    },
    {
      id: 3,
      title: "Retail Counter App",
      date: "Mar 2025 - Apr 2025",
      description: "A mobile ERP solution built for retail stores to monitor live sales and access key business reports such as sales, stock, and profit insights. In this project, I primarily worked on the backend, developing APIs to fetch and process real-time data for dashboards and reports. I focused on ensuring optimized data flow and accuracy in reporting, enabling retail store owners to make faster and more informed decisions.",
      image: retailImg,
      tags: [
       "Java","Spring Boot","Spring Security","JDBC API","MYSQL","Ionic"
      ],
      category: "android app",
      github: "https://github.com/tidkeshreyash/",
      webapp: "https://github.com/tidkeshreyash/",
    },
    {
      id: 4,
      title: "Portfolio Website",
      date: "Sept 2025 - Oct 2025",
      description: "A personal portfolio website built using React to showcase my skills, experience, education, and technical blogs. The website includes dedicated sections like About Me, Skills, Projects, Education, and Blogs, each designed with a clean and responsive UI for seamless navigation across devices. It highlights my expertise in full-stack development while serving as a central hub for my professional branding and technical content.",
      image: portfolioImg,
      tags: ["ReactJs","Tailwind CSS","EmailJs"],
      category: "web app",
      github: "https://github.com/tidkeshreyash/my-portfolio",
      webapp: "https://shreyashtidke.vercel.app/",
    },
    {
      id: 5,
      title: "Stress Detection System [Final Year Project]",
      date: "Sept 2023 - Feb 2024",
      description:
        "Designed and implemented a Stress Detection System utilizing Machine Learning, with a focus on leveraging the Naive Bayes algorithm. Developed the system to analyze and classify stress levels based on diverse input features, achieving accurate and reliable predictions. This project involved extensive data preprocessing, feature engineering, and model training to create a robust and effective stress assessment tool. The successful implementation demonstrates strong proficiency in machine learning techniques and a keen ability to address real-world challenges in mental health monitoring.",
      image: stressImg,
      tags: ["Python","Naive Bayes Algorithm"],
      category: "machine learning",
      github: "https://github.com/tidkeshreyash",
      webapp: "https://github.com/tidkeshreyash",
      member: [
      {
        name: "Shreyash Tidke",
        img: heroImg,
        linkedin: "https://www.linkedin.com/in/shreyash-tidke-2b6872219/",
        github: "https://github.com/tidkeshreyash/",
      },
      {
        name: "Tejas Malokar",
        img: maleIcon,
        linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
        github: "https://github.com/tidkeshreyash/",
      },
      {
        name: "Faiz",
        img: maleIcon,
        linkedin: "",
        github: "",
      },
      {
        name: "Sarvesh Udapurkar",
        img: maleIcon,
        linkedin: "",
        github: "",
      },
      {
        name: "Prajakta Gaikwad",
        img: femaleIcon,
        linkedin: "",
        github: "",
      },
    ],
    },
    
    {
      id: 6,
      title: "Bar Counter",
      date: "May 2025 - Aug 2025",
      description: "An ERP-based billing and management software solution tailored for restaurants and bars. The system includes key features such as POS (Point of Sale) billing, stock management, and daily stock closing reports, helping businesses streamline operations efficiently. In this project, I contributed by developing backend logic for stock tracking and reporting, optimizing database operations, and ensuring accurate real-time updates. Additionally, I worked on improving the overall reliability of the system by addressing performance bottlenecks and enhancing data accuracy across reports.",
      image: barImg,
      tags: ["Java","Spring Boot","Spring Security","JDBC API","MYSQL","Angular",],
      category: "web app",
      github: "https://github.com/tidkeshreyash/",
      webapp: "https://github.com/tidkeshreyash/",
      member: [
      {
        name: "Shreyash Tidke",
        img: heroImg,
        linkedin: "https://www.linkedin.com/in/shreyash-tidke-2b6872219/",
        github: "https://github.com/tidkeshreyash/",
      },
      {
        name: "Team Members",
        img: teamicon,
        linkedin: "",
        github: "",
      },
      ],
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