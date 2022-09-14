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
        <form ref={form} onSubmit={sendEmail} className='bootcamp-form'>

            <label className="form-name-label">სახელი</label>
            <input className="form-name-input form-all-input" placeholder="სახელი" type="text" name="name" />

            <label className="form-name-label">გვარი</label>
            <input className="form-name-input" placeholder="გვარი" type="text" name="lastname" />

            <label className="form-age-label">ასაკი</label>
            <input className="form-age-input" type="number" placeholder="ასაკი" name="age" />

            <label className="form-email-label">მეილი</label>
            <input className="form-email-input" type="email" placeholder="მეილი" name="mail" />

            <label className="form-number-label">ნომერი</label>
            <input className="form-number-input" type="number" name="number" placeholder="ნომერი" />


            <input className="form-button-input" type="submit" value="გაგზავნა" />
        </form >
    );
};
export default ContactUs