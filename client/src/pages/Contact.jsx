import React from "react";

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <p>I'm always open to new opportunities and collaborations.</p>
      <ul>
        <li>Email: your.email@example.com</li>
        <li>LinkedIn: linkedin.com/in/yourprofile</li>
        <li>GitHub: github.com/yourusername</li>
      </ul>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
