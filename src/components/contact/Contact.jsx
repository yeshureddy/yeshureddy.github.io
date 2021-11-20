import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="center">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          {!message && <button type="submit">Send</button>}
          {message && <span> Thank you! </span>}
        </form>
      </div>
    </div>
  );
  //TODO to work on the send button color change
  //TODO to resend message after color change
}
