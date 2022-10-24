import React,{useState} from 'react'
import './portfolio.css'
import IMG1 from "../../assets/hb1.PNG"
import IMG2 from "../../assets/ilearn.PNG"
import IMG3 from "../../assets/optimed.PNG"
import IMG4 from "../../assets/manazello.PNG"
import IMG5 from "../../assets/shop.PNG"
import IMG6 from "../../assets/gp.PNG"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Portfolio = () => {
  const [isOpen, setOpen] = useState(false)

  const data=[
    {
      id:1,
      image : IMG1,
      title : "Healthbloom",
      // github : "https://github.com/amriadam" , 
      demo :  "https://www.youtube.com/watch?v=H9-pm8cosBA&ab_channel=AdamELAMRI"
    },
    {
      id:2,
      image : IMG2,
      title : "ILearn",
      // github : "https://github.com/amriadam" , 
      // demo :  "https://github.com/amriadam"
    },
    {
      id:3,
      image : IMG3,
      title : "Optimed",
      // github : "https://github.com/amriadam" , 
      // demo :  "https://github.com/amriadam"
    },
    {
      id:4,
      image : IMG4,
      title : "Manazello",
      // github : "https://github.com/amriadam" , 
      // demo :  "https://github.com/amriadam"
    },
    {
      id:5,
      image : IMG5,
      title : "Shop Project",
      // github : "https://github.com/amriadam" , 
      // demo :  "https://github.com/amriadam"
    },
    {
      id:6,
      image : IMG6,
      title : "Ghost Prod",
      // github : "https://github.com/amriadam" , 
      // demo :  "https://github.com/amriadam"
    },
  ]

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({id,image,title,github,demo})=>{
          return(
                  <article key={id} className="portfolio__item">
                    <div className="portfolio__item-image">
                      <img src={image} alt="" />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                    {github && 
                      <a href={github} className='btn' target='_blank' rel="noreferrer" >Github</a>
                      }
                    {demo &&  
                      <a  className='btn btn-primary' target='_blank' rel="noreferrer" onClick={handleOpen} >Live Demo</a>
                    }
                    </div> 
                    <Modal 
                      open={isOpen}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                      width="320" height="240"
                      
                    >
                      <Box sx={style}>

                      <video src={demo} width="320" height="240" controls  type="video/mp4" >Your browser does not support the video tag.</video>
                      </Box>
                    </Modal>

                  </article>
                  
          )
        })}
        
      </div>
    </section>
  )
}

export default Portfolio