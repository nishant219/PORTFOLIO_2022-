
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import SidebarInContact from './SidebarInContact'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_219',
        form.current,
        'uWgyjb_9OZrb_MnANOEja'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
      <>
          <SidebarInContact/>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            /> */}

           <span className={letterClass}>Contact</span>
            <span className={letterClass}>  </span>
            <span className={letterClass}>  </span>
            <span className={letterClass}>Me</span>


          </h1>
          <p>
            Looking for opportunities to work with the latest
            technologies on challenging and diverse projects in the thriving environment.
            <br/>
            However, if you have other request or question,
            don't hesitate to contact me using below form either or let's connect via given social media handles...
          </p>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
              </div>
              

        {/* <div className="info-map">
          Nishant Patil,
          <br />
          Maharashtra,
          <br />
          India <br />
          IT'24 Undergrad <br />
          <br />
          <span>nishantap.a20@gmail.com</span>
        </div> */}
              

        {/* <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div> */}
              
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact