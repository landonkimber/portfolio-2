import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useSettings } from "../contexts/SettingsContext";
import {
  FaCheckCircle,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const { settings, setSettings } = useSettings();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("Email sent successfully!");
          setIsSent(true);
          // Reset form fields
          form.current.reset();
        },
        (error) => {
          console.log("Email send failed:", error.text);
        }
      );
  };

  return (
    <main className="page-content">
      <header className="basic-header" data-page-width={settings.contentWidth}>
        <h1>Contact Me</h1>
      </header>
      <body
        className="content-container"
        data-page-width={settings.contentWidth}
      >
        <form ref={form} onSubmit={sendEmail} className="contact-email-form">
          <h2>Send me an email! </h2>
          <div className="contact-input-field">
            <h3 htmlFor="name">Name</h3>
            <input type="text" id="name" name="user_name" required />
          </div>
          <div className="contact-input-field">
            <h3 htmlFor="email">Email</h3>
            <input type="email" id="email" name="user_email" required />
          </div>
          <div className="contact-input-field">
            <h3 htmlFor="message">Message</h3>
            <textarea id="message" name="message"></textarea>
          </div>
          <div className="contact-send-btn">
            {isSent ? (
              <div>
                <FaCheckCircle />
                Sent!
              </div>
            ) : (
              <button type="submit">Send</button>
            )}
          </div>
        </form>
        <h1 className="contact-or">OR</h1>
        <div className="contact-socials-container">
          <h2>Find me at: </h2>
          <a
            href="https://github.com/landonkimber"
            className="contact-socials-btn"
            id="github"
          >
            <i>
              <FaGithub />
            </i>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/landon-kimber-313364303"
            className="contact-socials-btn"
            id="linkedin"
          >
            <i>
              <FaLinkedin />
            </i>
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/landonkimber"
            className="contact-socials-btn"
            id="facebook"
          >
            <i>
              <FaFacebook />
            </i>
            Facebook
          </a>
          <a
            href="https://www.instagram.com/landon.kimber"
            className="contact-socials-btn"
            id="instagram"
          >
            <i>
              <FaInstagram />
            </i>
            Instagram
          </a>
        </div>
      </body>
    </main>
  );
};

export default Contact;
