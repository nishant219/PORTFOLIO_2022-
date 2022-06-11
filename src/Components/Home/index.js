import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
//import AnimatedLetters from '../AnimatedLetters'
//import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo' // logo is sidebar now
import './index.scss'

const Home = () => {



  const [letterClass, setLetterClass] = useState('text-animate')

  // // const nameArray = ['','N', 'i', 's', 'h', 'a', 'n', 't']
  // const jobArray = [
  //   'I',
  //   'T',
  //   '`',
  //   '2',
  //   '4',
  //   ' ',
  //   'u',
  //   'n',
  //   'd',
  //   'e',
  //   'r',
  //   'g',
  //   'r',
  //   'a',
  //   'd',
  //   '.',
  // ]


  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])



  return (
    <>
      <Logo /> 

      <div className="container home-page">



        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _14`}>  </span>
            
            <span className={`${letterClass} _14`}>Nishant</span>
            <br />
            <span className={`${letterClass} _14`}>IT`24 Undergrad .</span>
            <br />
            
          

            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}

            
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br /> */}

{/* 
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            /> */}
          
          </h1>
          <h2> Exploring Block-Chain Development /
            <br/>
             Front End Developer /   </h2>
          <h2> JAVA / Data Structure and Algorithms </h2>
          <Link to="/contact" className="flat-button">
            Let's Connect
          </Link>
        </div>
        {/* <Logo /> */}
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home