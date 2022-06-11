// import { useEffect, useRef } from 'react'
// import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
// import LogoS from '../../../assets/images/logo-s.png'
// import './index.scss'

// const Logo = () => {
//   const bgRef = useRef()
//   const outlineLogoRef = useRef()
//   const solidLogoRef = useRef()

//   useEffect(() => {
//     gsap.registerPlugin(DrawSVGPlugin)

//     gsap
//       .timeline()
//       .to(bgRef.current, {
//         duration: 1,
//         opacity: 1,
//       })
//       .from(outlineLogoRef.current, {
//         drawSVG: 0,
//         duration: 20,
//       })

//     gsap.fromTo(
//       solidLogoRef.current,
//       {
//         opacity: 0,
//       },
//       {
//         opacity: 1,
//         delay: 4,
//         duration: 4,
//       }
//     )
//   }, [])

//   return (
//     <div className="logo-container" ref={bgRef}>
//       <img
//         className="solid-logo"
//         ref={solidLogoRef}
//         src={LogoS}
//         alt="JavaScript,  Developer"
//       />

//       <svg
//         width="559pt"
//         height="897pt"
//         version="1.0"
//         viewBox="0 0 559 897"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <g
//           className="svg-container"
//           transform="translate(0 457) scale(.1 -.1)"
//           fill="none"
//         >
//           <path
//             ref={outlineLogoRef}
//
// d goes here 
//

//           />
//         </g>
//       </svg>
//     </div>
//   )
// }

// export default Logo




import './index.scss'
//import LogoS from '../../assets/images/logo-s.png'
//import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faBlogger
 // faYoutube,
 // faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        {/* <img src={LogoS} alt="Logo" /> */}
        {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
      </Link>
      
          <nav>
       
              <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
       
              <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
       
              <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
       
              <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/nishant-patil-88b69618b"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/nishant219"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
              </li>

              <li>
          <a
            href="https://blogstoarise.blogspot.com/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faBlogger} color="#4d4d4e" />
          </a>
        </li>
              
      </ul>
    </div>
  )
}

export default Logo;
