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
    if (!name || phone.length !== 10) {
      alert("Name required & phone must be 10 digits");
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
      setOpen(false);
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
        href="https://wa.me/919618240757"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
          alt="WhatsApp"
        />
      </a>

      <button className="form-toggle-btn" onClick={() => setOpen(!open)}>
        {open ? "✖" : "📩 Enquiry"}
      </button>

      {open && (
        <div className="fixed-form">
          <h3>📩 Enquiry Form</h3>

          {/* Name – 15 letters */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            maxLength={15}
            onChange={(e) =>
              setName(e.target.value.replace(/[^a-zA-Z ]/g, ""))
            }
          />

          {/* Mobile – 10 digits */}
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            maxLength={10}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, ""))
            }
          />

          {/* Email – 20 characters */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            maxLength={30}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Office Address – 30 characters */}
          <textarea
            placeholder="Office Address"
            value={officeAdd}
            maxLength={30}
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
