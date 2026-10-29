import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (message.trim() === "") {
      alert("Please enter a message.");
      return;
    }

    alert("Message submitted successfully!");
    setMessage("");
  }

  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Message</label>
        <div>
          <input
            id="message"
            type="text"
            placeholder="Enter your message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
