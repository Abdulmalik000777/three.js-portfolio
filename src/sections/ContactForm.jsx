import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID').then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      },
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <label>Full Name</label>
        <input type="text" name="user_name" required />
      </div>
      <div>
        <label>Email Address</label>
        <input type="email" name="user_email" required />
      </div>
      <div>
        <label>Your Message</label>
        <textarea name="message" required />
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
