import React, { useRef } from 'react'
import './Contact.css'
import Phone from '../../images/phone.svg'
import Address from '../../images/address.svg'
import Email from '../../images/email.svg'

function Contact() {
    const formRef = useRef()
    // const handleSubmit = (event) {
    //     event.preventDefault()
    // }
  return (
    <div className='c' id="contact">
        <div className="cBg"></div>
        <div className="cWrapper">
            <div className="cLeft">
                <h1 className="cTitle">Contact me!</h1>
                <div className="cInfo">
                    <div className="cInfoItem">
                        <img src={Phone} alt="" className="cIcon" /> +91-8668239228
                    </div>
                    <div className="cInfoItem">
                        <img src={Email} alt="" className="cIcon" /> maruf1611khan@gmail.com
                    </div>
                    <div className="cInfoItem">
                        <img src={Address} alt="" className="cIcon" /> A505 Fortune Srushti, Yewalewadi, Pune-48
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