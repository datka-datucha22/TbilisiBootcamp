import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';


export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_akv11bp', 'template_wqq6rle', form.current, 'hOYAjVD0_Wd484GZt')
            .then((result) => {
                // alert('message sented')
                swal("", "თქვენი თხოვნა მიღებულია", "success");

            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <form ref={form} onSubmit={sendEmail} className='bootcamp-form'>
            <span className='form-text'>კურსზე რეგისტრაციისათვის </span>
            <span className='form-text'>შეავსეთ ფორმა</span>


            <input required className="form-name-input form-all-input" placeholder="   სახელი" type="text" name="name" />


            <input required className="form-name-input" placeholder="   გვარი" type="text" name="lastname" />


            <input required className="form-age-input" type="number" placeholder="   ასაკი" name="age" />


            <input required className="form-email-input" type="email" placeholder="   მეილი" name="mail" />


            <input required className="form-number-input" type="number" name="number" placeholder="   ნომერი" />

            <input className="form-button-input" type="submit" value="გაგზავნა" />
        </form >
    );
};
export default ContactUs