import React  from 'react'
import { useRef } from 'react'
import './Contact.css'
import Phone from '../../images/phone.svg'
import Address from '../../images/address.svg'
import Email from '../../images/email.svg'
import Download from '../../images/download.svg'
import Github from '../../images/github.svg'
import LinkedIn from '../../images/linkedin.svg'

function Contact() {
    const formRef = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
    }
  return (
    <div className='c' id="contact">
        <div className="cBg"></div>
        <div className="cWrapper">
            <div className="cLeft">
                <h1 className="cTitle">Contact me!</h1>
                <div className="cInfo">
                    <div className="cInfoItem">
                        <img src={Download} alt="" className="cIcon" /> <a target="_blank" rel='noreferrer' href='https://drive.google.com/file/d/1D3bP1vS1K1mqzQSXmxspmtTnijw9-_tY/view?usp=sharing'>Download Resume</a>
                    </div>
                    <div className="cInfoItem">
                        <img src={Github} alt="" className="cIcon" /> <a target="_blank" rel='noreferrer' href='https://github.com/EmotionalApe'>Github profile</a>  
                    </div>
                    <div className="cInfoItem">
                        <img src={LinkedIn} alt="" className="cIcon" /> <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/maruf-j-khan'>LinkedIn profile</a> 
                    </div>
                    <div className="cInfoItem">
                        <img src={Phone} alt="" className="cIcon" /> <a href="tel:+918668239228">+91-8668239228</a>
                    </div>
                    <div className="cInfoItem">
                        <img src={Email} alt="" className="cIcon" /> <a href="mailto:maruf1611khan@gmail.com">maruf1611khan@gmail.com</a>

                    </div>
                    <div className="cInfoItem">
                        <img src={Address} alt="" className="cIcon" /> <a target="_blank" rel='noreferrer' href='https://goo.gl/maps/khCMhrnAAdgywFz27'>A505 Fortune Srushti, Yewalewadi, Pune-48</a> 
                    </div>
                </div>
            </div>
            <div className="cRight">
                <div className="cDesc">
                    <p><strong>Have an interesting idea?</strong> Get in touch. I am always looking for new and exciting projects! </p>
                </div>

                <form ref={formRef} onSubmit='handleSubmit'>
                    <input type="text" placeholder="Name"
                    name="userName"/>
                    <input type="text" placeholder="Subject"
                    name="userSubject"/>
                    <input type="text" placeholder="Email"
                    name="userEmail"/>
                    <textarea name="userMessage" rows="5" placeholder='Message'></textarea>
                    <button >Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact