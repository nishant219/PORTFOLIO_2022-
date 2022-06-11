import { useEffect, useState } from 'react'
import {
  faBootstrap,
  faLinkedin,
  faCss3,
  faGitAlt,
  faHtml5,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import SidebarInAbout from './sidebarInAbout'


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <SidebarInAbout />
      
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            /> */}
                        <span className={letterClass}>About</span>
                        <span className={letterClass}>  </span>
                        <span className={letterClass}>  </span>
                        <span className={letterClass}>Me</span>

          </h1>
          <p>
            Hello I'm Nishant,( IT'24 Undergrad ) <br/>
            Pursuing B.Tech from Government College Of Engineering, Karad ( GCEK ) <br/>
            Looking for opportunities to work with the latest
            technologies on challenging and diverse projects in the thriving environment.
          </p> 
          <p align="LEFT">
            Currently exploring BlockChain Development with the techstack
            Solidity and libraries like ether.js / web3.js.   
            Also exploring MERN Stack for full-stack web Development. 
            <br/>
            I have a keen interest in the Data Structures and Algorithms.
            Working on DS-Algo along with little bit of competitive programming.
            Likes to spend time on paper along with screen.
          <br/>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            Sometimes love to share thoughts via blogs (link attached on the sidebar).
            <br/>
            Let's meet on my meme page on the instagram where you will find a memer inside me :)
            <br/>
            @Startup_Leos
            <br />
            There's always room for improvement, so keep grinding : keep Hustling.
            <br />
            HAPPY CODING

          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
            <FontAwesomeIcon icon={ faBootstrap} />
           </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={ faLinkedin } color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About