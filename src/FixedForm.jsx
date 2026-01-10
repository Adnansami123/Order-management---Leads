import React, { useState } from "react";
import "./App.css";

export default function FixedForm() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [officeAdd, setOffice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !phone) {
      alert("Name and phone number are required");
      return;
    }

    try {
      setLoading(true);

      await fetch("http://localhost:5000/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadName: name,
          mobile: phone,
          email,
          officeAddress: officeAdd,
          userXid: 20,
        }),
      });

      alert("Form submitted successfully!");
      setName("");
      setPhone("");
      setEmail("");
      setOffice("");
      setOpen(false); // close after submit
    } catch {
      alert("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
          alt="WhatsApp"
        />
      </a>
      {/* 🔘 Floating Toggle Button */}
      <button
        className="form-toggle-btn"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖ Close" : "📩 Enquiry"}
      </button>

      {/* 📩 Floating Form */}
      {open && (
        <div className="fixed-form">
          <h3>📩 Enquiry Form</h3>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Office Address"
            value={officeAdd}
            onChange={(e) => setOffice(e.target.value)}
          />

          <button onClick={handleSubmit} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      )}
    </>
  );
}
