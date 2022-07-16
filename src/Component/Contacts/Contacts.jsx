// import React from 'react'
import './Contacts.css'
import Email from '../../images/Email.png';
import Address from '../../images/Address.png';
import Phone from '../../images/Phone.png';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';


function Contacts() {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
        .sendForm
        ('service_kk1vgkq', 
        'template_koj3soi', 
        formRef.current, 
        '-Rtatr8J-MR3fLbYW'
        )
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div className='c'>
        <div className="c-bbg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's Discuss your Project.</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className='i-icon'/>
                        +(234)70-6696-8567
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className='i-icon'/>
                        ojnnaco@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className='i-icon'/>
                        Lagos,Nigeria.
                    </div>
                </div>
            </div>
            <div className="c-right">
                <div className="right-desc">
                    <p><b>Hey! Get in Touch</b></p>
                    <p>Available for collaborations, Hire, Freelancing. Feel Free to drop your Suggestions, advise and Observations.</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name='user_name' />
                        <input type="text" placeholder='Subject' name='user_subject' />
                        <input type="text" placeholder='Email' name='user_email' />
                        <textarea rows='6' placeholder='Drop a Message' name='Message'/>
                        <button className='submit'>Submit</button>
                        {done && '...Message Sent, Thank you'}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts