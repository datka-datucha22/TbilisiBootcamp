import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_akv11bp', 'template_wqq6rle', form.current, 'hOYAjVD0_Wd484GZt')
            .then((result) => {
                alert('message sented')
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <form ref={form} onSubmit={sendEmail}>
            <label className="form-name-label">Name</label>
            <input className="form-name-input" type="text" name="to_name" />
            <label className="form-email-label">Email</label>
            <input className="form-email-input" type="email" name="from_name" />
            <label className="form-message-label">Message</label>
            <textarea className="form-message-input" name="message" />
            <input className="form-button-input" type="submit" value="Send" />
        </form>
    );
};
export default ContactUs