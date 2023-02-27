import Header from '@/components/Header';
import { React, useState } from 'react';

import { useForm } from "react-hook-form";
import { init, sendForm } from 'emailjs-com';
init('iYYOjJnGDY_PcNFl0');

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const [contactNumber, setContactNumber] = useState("000000");

  const [statusMessage, setStatusMessage] = useState("");

  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }
  
  const onSubmit = formData => {
    const form = document.querySelector('#contact-form');
    generateContactNumber();
    sendForm('contact_form', 'template_1g6tpbt', '#contact-form')
      .then(function (response) {
        form.reset();
        setStatusMessage("Success!")
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        setStatusMessage("Failed to Send")
        console.log('FAILED...', error);
      });
  }

  return (
    <div>
      <Header />
      <p className='text-[rgb(251,247,245)] text-2xl font-semibold text-center
       decoration-[#F7AB0A] underline'>Send us an Email!</p>

      <form
        id='contact-form' onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col space-y-2 w-96 mx-auto p-10 sm:w-96'>
        <input
          type='hidden'
          name='contact_number'
          value={contactNumber}
        />

        <input
          type="text"
          maxLength="30"
          {...register('name', { required: true })}
          className='contactInput'
          placeholder='Name'
          minLength="1"
        />

        <input
          type="email"
          {...register('email', { required: true })}
          className='contactInput'
          placeholder='Email Address'
          minLength="1"
        />

        <textarea
          {...register("message", { required: true })}
          className='contactInput'
          placeholder='Message'
          minLength="1"
          maxLength="1500"
        />

        <button type='submit' value="send" className='bg-[#F7AB0A] py-3 px-10
         rounded-md text-black font-bold text-lg'>Submit</button>

        {statusMessage === "Success!" ?
          <p className='contact-form text-center font-semibold
         text-green-500'>{statusMessage}</p> :
          <p className='contact-form text-center text-red-500'>{statusMessage}</p>}
      </form>
    </div>
  );
}

export default Contact;