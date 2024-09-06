import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useSettings } from "../contexts/SettingsContext";
import { FaCheckCircle } from "react-icons/fa";

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
          <div className="contact-input-field">
            <h2 htmlFor="name">Name</h2>
            <input type="text" id="name" name="user_name" required />
          </div>
          <div className="contact-input-field">
            <h2 htmlFor="email">Email</h2>
            <input type="email" id="email" name="user_email" required />
          </div>
          <div className="contact-input-field">
            <h2 htmlFor="message">Message</h2>
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
        <div className="contact-socials-container"></div>
      </body>
    </main>
  );
};

export default Contact;
