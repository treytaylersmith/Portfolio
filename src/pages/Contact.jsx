import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure the environment variables are set correctly
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      setStatus("Missing required EmailJS credentials.");
      return;
    }

    emailjs
      .sendForm(
        serviceId,   // Use the service ID from .env
        templateId,  // Use the template ID from .env
        e.target,    // The form element
        userId       // Use the user ID from .env
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          setStatus("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Your name"
            style={{ width: "100%", padding: "8px", margin: "10px 0" }}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Your email"
            style={{ width: "100%", padding: "8px", margin: "10px 0" }}
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            placeholder="Your message"
            style={{ width: "100%", padding: "8px", margin: "10px 0" }}
          ></textarea>
        </div>

        <div>
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none" }}>
            Send Message
          </button>
        </div>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}
