import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import EmailAlert from './EmailAlert';
import contact from '/contact.png';

const Contact = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSentMessage, setEmailSentMessage] = useState('');
  // Test email sent message
  // const [emailSentMessage, setEmailSentMessage] = useState(<EmailAlert />);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('gmail', 'template', form.current, 'x0R3Mx5UACm3xeqpG')
      .then(
        (result) => {
          console.log(result.text + ', Email sent!');
          setEmailSentMessage(<EmailAlert key={Date.now()} />);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // Clear form input values on form submit
    setName('');
    setMail('');
    setMessage('');
  };

  return (
    <div id='contact' className='text-gray-500 dark:text-gray-400'>
      <h3 className='mb-8 mt-20 text-center text-3xl font-bold text-gray-700 dark:text-gray-200'>
        Get in touch!
      </h3>
      <div className='m-auto grid w-full grid-flow-row items-center justify-center justify-items-center gap-8 md:w-11/12 md:grid-cols-2 md:p-8'>
        <form
          className='flex w-[70vw] flex-col rounded-xl bg-gray-200 dark:bg-[#111] p-4 md:w-full transition-colors duration-300'
          ref={form}
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input
            type='text'
            name='from_name'
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className='mb-4 mt-2 rounded-md p-2 focus-visible:outline-1 focus-visible:outline-gray-500 dark:bg-[#222] dark:text-white dark:focus-visible:outline-[#555]'
          />
          <label>Email</label>
          <input
            type='email'
            name='email_id'
            value={mail}
            onChange={(event) => setMail(event.target.value)}
            required
            className='mb-4 mt-2 rounded-md p-2 focus-visible:outline-1 focus-visible:outline-gray-500 dark:bg-[#222] dark:text-white dark:focus-visible:outline-[#555]'
          />
          <label>Message</label>
          <textarea
            type='text'
            name='message'
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            className='mb-4 mt-2 rounded-md p-2 focus-visible:outline-1 focus-visible:outline-gray-500 dark:bg-[#222] dark:text-white dark:focus-visible:outline-[#555]'
          />
          <input
            className='my-3 cursor-pointer rounded-md bg-gray-800 dark:bg-white p-2 text-sm text-white dark:text-black hover:bg-black dark:hover:bg-gray-300 hover:shadow-md md:w-40 transition-colors'
            type='submit'
            value='Send'
          />
          {/* Email message sent alert */}
          <div>{emailSentMessage}</div>
        </form>
        <div className='flex w-10/12 items-center justify-center'>
          <img
            className='h-auto w-10/12 md:w-11/12 lg:w-3/4'
            src={contact}
            alt='contact image'
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
