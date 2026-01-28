import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EducationCard from './EducationCard';
import EidkoImg from '../assets/eidiko.jpg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 25px 0px 60px 0px;
    margin-top: 20px; 
    @media (max-width: 960px) {
        padding: 0px;
    }
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`

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
`

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: #b1b2b3;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
`

const Education = () => {
  const education = [
    {
      id: 0,
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIACAAHwMBEQACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAADBgIEBQf/xAAqEAABAwMDAgYCAwAAAAAAAAABAgMEBREhABIxQXEGFCJRYYET8UKhwf/EABkBAAMBAQEAAAAAAAAAAAAAAAIEBQMBAP/EACsRAAEDAwMDAwMFAAAAAAAAAAECAxEABBIhMUFRcfBhweEigbEFFJGh8f/aAAwDAQACEQMRAD8A7DUp5jkMsgrfXhKU8k2vYXx9nA+wCBlRgGANz0+aMAASaWpdXQhExciWgOsKCfLpbBXc3Bspy+63OABj2OkHr60QDCciOpiew+aos2F04U8BXTYd4qUKpveYYahSUTFutBwtJQG1pxkbk+gqHsoAfI1q1d2bpCUyhRHGo+4/2s3rS5aSpa9Ugxr+R8U0U+c3Ma3IUFHOQLXsbHByCDgg5B02CoHFYgjyR6UkoCMk7Ur1mQ23HmSX5LjDy7Nx1toO4ekLKb2vYkjg9BnU+/eCLVKZIy17nWP6qhYMqcudEhQT16bVUVJYpjSVyENvTn2w49IdsVbiMJTfjoOmussoZQFqEqIkk+vFY3F2464W2jCEmAB6c0F6S1Np7tShDyUpr0OrYG0OIJse/Q3+LdsLtoFkvIGKhvHQ0zY3Ki+Ld36knaeCNa1qVMZakl6I8t5hxgOlbg2lS0kNqJ73Se40828ldoh0GcTjPUET+ZpZ1labhTahE6wOOaFWfDtdnvzUs15EaK8pKG2BEQfxN43EHncRgfq1Bu5/T20pQ7b5ETMk6njTp53USp1Kskqg0Gb4SgriR3anKlyXIkYNhYWEXI/mQOTwM6WfWlSFKxCQeBxyI7V1puXtNSSd/Xepv+FWJFGdiU2oTIaXylYcuHCLG+b9CckX6aO2Wy0mVthaY2Pm/wDNdVml7MGFCdqvUCj1qLJSatVmpsdcdIdjiMhCUugC5TYDBOf8yLG+7ZPJwYZx1Osk6cSNtPD1AKcByKta1q0zMVGW5TUpclWAbS4vakEm276BOOulXmypJx3o2igLGe1KjniKbDbS3W4EqK+j0rUlkutO/IIIt/Y0gq4cSYdB9qoftAv6mVA/n39qkiu1SoJUzRqbJdccNkvutltpsEc5JJ59x214POr0aB+9eFqhsy+odh57U3Uxp9MdLktP431pH5EJXuAV11SaRinXepq4yOO1f//Z",
      school: "P. R. Pote Patil College of Engineering and Management, Amravati",
      date: "Aug 2020 - July 2024",
      grade: "81.80% ",
      desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at P. R. Pote Patil College of Engineering and Management, Amravati. I have completed 6 semesters and have a Percentage of 81.80 %. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems,Data Science and Computer Networks, among others.",
      degree: "Bachelor of Engineering - B.E., Computer Science and Engineering",
    },
    {
      id: 1,
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgANwMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBQEEBgIHAP/EADQQAAIBAwIEAwUGBwAAAAAAAAECAwAEEQUSITFBUQYTcSIjMoGRFBWxwdHhJDNCUmFyof/EABoBAAIDAQEAAAAAAAAAAAAAAAQFAAECAwb/xAAuEQABAwIDBgUEAwAAAAAAAAABAAIDBBESIUETMVFhcbEFFCLh8IGRocEyM9H/2gAMAwEAAhEDEQA/ANgCe5ptZBKcnualgoodxGMySBB3Y4qrX3BZc9rc3Gy4W5gY4W4jz/tWtm7gsCohOQcEb2u5+tYyXZSM45moopye5+tRRCrSygXk7woy26GSYKGYDjtGcZx1NbY0OPqyCEqqgxjCwXPZDtbb7wLmztXusNk3Mz7VA58yPTIA78eNXI/ZC73YeXzvdBMZ5j+DcXM5fPsrSWEre6W1sLgINpjin9sjO44yozz79BQTPEKaV5ayT1e3VEGllAzjBHI5/kKhGZrVJ51IQRufNtJDtMa5OOZzngD8+HKjzheQ067jxQ0UkkQc8Hcc2nQJnFIk0SSxHMbjIP5VwcC02KbxSNlYHt3FdVldFwmN2W+EDJ9BWis3AFyllrZDUru3UvE014SzSRuSYo+bA9AcYHzOaJdIY2nLJv5PzNImR7d7Sd79RoNR+l6JbWkMNutvHGqwqu0IBwxSWQ474s7r0kcbWNDWiwCyXg25vrvxLr1ve6V9mt7KUJbOce7GPhz13DDZ6A4rLqOlhax8YF7LrhCaeKNPhaJNS8pDNaHeSy53J1BHXA4j0oymkN9nfJ3dLK6BpAmtm3P6a/6s/YhoL65tGVlWRftEYbHfBxgAY/Si3nFG140yQtGTHO6LQ+oftXK4pmgSAtbzheZicD6GttNnDquUwvE4DgeyJoTRff1k6BFWSzZV2yb/AGhgkEnjnHSqlB2LgdHICmLfMscNWratNHbwSTTMFjjQs7HoAMk0tKfNXn/gLUon8Yap/KC6hCsqbJFPtqzlhjOeTjj/AINcKd7pISXXviO++7Tf0RlYwMc1o4BbXWXRNLu3k+EQvn6Gi4QS9oHFK6lwbE4ngVirc51iFeG9LRhKfMLHdyOc8uPT0pkf6j1SeA3qmjUNN1fArimyEh2sDVqkq/ibW93NepElihltll4eYP7B3JHCivQ5mTbl2R5c0gkbLDLm+wZm2+vJNfFOr32s+E2i8MQST3k7qksaMoaFebEgkc8Y+dAeXEclpt3dP6WqjqG4mlC8Oy6zb6Sralo88N8JmlKQRjYTnh/UeY5+prytR4TOzxRk9ObxiwzOdtx9kybLHsi0q74l1mC9EunWl7DDtQySSseBK8RGD3J/CvX00DmWkc2/vqvOV1WyS8LHgak9NOqWaIs8kTXl27PLIojQtzCD9/wrvUYGnZsGQVeGtkc0zS7zkOiZUOmaABWlSFd2sd3F5co5fC3UVqOQsNwuFRTMnbhcltrpq2cjtOLk8vLltnwV48f+URJMZB6bfVKY6DYOJdc8CFYl98savdalOA43wu7EOvUdMetcxdpOTQtmMvAGJ54jj2QbTRF84yTqVjzlYt2SB2Jro+pNrD7q6fwsYsUm7gngAAAAwBwAHSg05AAFgoqlaGBitqL6qUU1FFOT3qlF0BUUU1Si+qK1/9k=",
      school: "Shri. R. L. T. College Of Science, Akola",
      date: "June 2018 - March 2020",
      grade: "74.31%",
      desc: "I completed my class 12 high school education at Shri. R. L. T. College Of Science, Akola.",
      degree: "HSC",
    },
    {
      id: 2,
      img: "data:image/jpeg;base64,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",
      school: "Jagruti Vidyalaya, Akola",
      date: "June 2017 - March 2018",
      grade: "94.20%",
      desc: "I completed my class 10 education at Jagruti Vidyalaya, Akola.",
      degree: "(X), SSC",
    },
  ];

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
    <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {education.map((education,index) => (
                            <TimelineItem >
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education}/>
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length  && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
  )
}

export default Education
