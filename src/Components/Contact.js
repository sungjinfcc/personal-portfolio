import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    errors.email = null;
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid. Please enter a valid email address.";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const emailAddress = "ysoon0912@gmail.com";
      const subject = `Message from ${name}`;
      const body = `${message}`;

      const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;

      // Reset the form
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    }
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>Feel free to connect with me</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <textarea
          placeholder="Message"
          rows="10"
          value={message}
          onChange={handleMessageChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
