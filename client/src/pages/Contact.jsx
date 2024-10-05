import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useSettings } from "../contexts/SettingsContext";
import {
  FaCheckCircle,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaGithubAlt,
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
        <h1>Contact</h1>
      </header>
      <div
        className="content-container content-container-column"
        data-page-width={settings.contentWidth}
      >
        <form ref={form} onSubmit={sendEmail} className="contact-email-form">
          <h2>Send me an email! </h2>
          <div className="contact-input-field">
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="user_name"
              required
            />
          </div>
          <div className="contact-input-field">
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="user_email"
              required
            />
          </div>
          <div className="contact-input-field contact-message">
            <textarea
              id="message"
              placeholder="Type your message here..."
              name="message"
            ></textarea>
          </div>
          <div className="contact-buttons">
            <div className="contact-clear-btn">
              {isSent ? (
                <button type="reset">
                  <p>Reset</p>
                </button>
              ) : (
                <button type="clear">
                  <p>Clear</p>
                </button>
              )}
            </div>
            <div className="contact-send-btn">
              {isSent ? (
                <button id="contact-sent">
                  <p>Sent!</p>
                  <i>
                    <FaCheckCircle />
                  </i>
                </button>
              ) : (
                <button type="submit">
                  <p>Send</p>
                </button>
              )}
            </div>
          </div>
        </form>
        <div className="contact-socials-container">
          <a
            href="https://github.com/landonkimber"
            className="contact-socials-btn"
            id="github"
          >
            <i>
              <FaGithubAlt />
            </i>
          </a>
          <a
            href="https://www.linkedin.com/in/landon-kimber-313364303"
            className="contact-socials-btn"
            id="linkedin"
          >
            <i>
              <FaLinkedinIn />
            </i>
          </a>
          <a
            href="https://www.facebook.com/landonkimber"
            className="contact-socials-btn"
            id="facebook"
          >
            <i>
              <FaFacebookF />
            </i>
          </a>
          <a
            href="https://www.instagram.com/landon.kimber"
            className="contact-socials-btn"
            id="instagram"
          >
            <i>
              <FaInstagram />
            </i>
          </a>
          <a
            href="mailto:landonkimber33@gmail.com"
            className="contact-socials-btn"
            id="emailBtn"
          >
            <i>
              <FaEnvelope />
            </i>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
