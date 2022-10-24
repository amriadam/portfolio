import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';


const About = () => {
  
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
  
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));
  
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: theme.palette.common.black,
      maxWidth: 420,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>

          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              
              {/* ****************************************** */}
              <HtmlTooltip
                title={
                <React.Fragment>
                  <Typography color="inherit">Project Manager in Inceptum Junior Entreprise :</Typography>
                  <b>Management of 3 projects in Inceptum JE :</b>
                    <ul>
                      <li>* Monitoring progress and Setting Deadlines</li>
                      <li>* Solving issues that arise</li>
                      <li>* Communicating with clients and ensuring their satisfaction</li>
                      <li>* Guiding and motivating team members</li>
                    </ul>
                    <Typography color="inherit">Junior Member in Inceptum Junior Entreprise (Project department) : </Typography>
                    <b>Developing the Treasury part of an ERP : </b>
                    <ul>
                      <li>* Physical inventory management : Usage period, amortization, total amount, amortization </li>
                      <li>* Cashflow Management (Monthly)</li>
                      <li>* creating a traceability system that saves all actions made by the Treasurer</li>
                    </ul>
                    <Typography color="inherit">Former member in Radio Libertad Esprit Club :  </Typography>
                    <ul>
                    <li><b>* Preparing weekly radio shows  </b></li>
                    <li><b>* Interviewing Celebrities (Actors, Musicians, Atheletes)</b></li>
                    <li><b>* Organizing events : Radio Libertad Esprit Club launch event 2020/2021, saint patrick event 2021 ... </b></li>
                    </ul>
                    
                
                    
                    
              </React.Fragment>
              }
              >
                <article className='about__card' >
                <FaAward className='about__icon' />
                <h5>Extracurricular Activities</h5>
                <small>2+ years working</small>
              </article>
              {/* <Button>HTML</Button> */}
              </HtmlTooltip>
      {/* ********************************************************* */}

              <article className='about__card' >
                <FaAward className='about__icon' />
                <h5>Clients</h5>
                <small>2+ years working</small>
              </article><article className='about__card' >
                <FaAward className='about__icon' />
                <h5>Projects</h5>
                <small>6+ Projects</small>
              </article>
            </div>
            <br/>

            <p>
              A senior student majoring in software engineering in ESPRIT(Tunisia).
              I am currently an exchange student in Schmalkalden University of Applied Sciences (Germany). 
              I have the ability to think through problems with the confidence to make ideas heard and I am passionate about web development .
              I am looking for a company that can host me for a graduation internship for 6 months. 
            </p>
            <br/>

            <a href="#contact" className='btn btn-primary' >Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
