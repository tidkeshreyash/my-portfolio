
import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from './ExperienceCard';
import EidkoImg from '../assets/eidiko.jpg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 0px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
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

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;



const Experience = () => {
    const experiences = [
        {
            id: 1,
            img: EidkoImg,
            role: "Software Engineer ",
            company: "Eidiko Systems Integrators",
            date: "8th July 2025 - Present",
            desc: "Currently working as a Software Engineer, developing and maintaining enterprise-level applications, including banking projects with high-security requirements. Responsible for designing and implementing backend modules, integrating databases, and building user-friendly interfaces. Work closely with cross-functional teams to deliver scalable, secure, and efficient solutions, following best practices in microservices architecture, Spring Security, and secure coding standards.",
            skills: [
                "Java",
                "Spring",
                "Spring Boot",
                "Spring Security",
                "MYSQL",
                "Spring Data JPA",
                "JDBC API",
                "Hibernate",
                "ReactJs",
                "Microservices"
            ],
            // doc: "https://user-images.githubusercontent.com/94781499/278882918-ba5e08d8-1182-4a50-af37-72fb24df4ecb.png",
        },
        {
            id: 3,
            img: EidkoImg,
            role: "Trainee Software Engineer",
            company: "Eidiko Systems Integrators",
            date: "8th July 2024 - 8th July 2025",
            desc: "Worked as a full-time Trainee Software Engineer on enterprise applications with secure access and data handling. Designed and developed modules for desktop and web applications using Java and XML, implemented backend logic, and built user interfaces connected to relational databases. Gained strong experience in Spring Boot, Angular, and secure application development, contributing to real-world enterprise-level projects.",
            skills: [
                "Java",
                "Spring",
                "Spring Boot",
                "Spring Security",
                "MYSQL",
                "Spring Data JPA",
                "JDBC API",
                "Hibernate",
                "Angular",
            ],
        },
    ];
    return (
        <Container id="experience">
            <Wrapper>

                <div className="text-center mb-4 px-4">
                    <h2 className="text-4xl text-white font-bold mb-4">Experience</h2>
                    <p className="text-lg text-gray-300">
                        My work experience as a software engineer and working on different companies and projects.
                    </p>
                </div>
                <TimelineSection>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Experience