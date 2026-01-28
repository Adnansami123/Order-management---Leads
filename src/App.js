import React, { useEffect } from "react";
import "./App.css";
import HeroImage from "./Images/image.png";
import SalesOrderManagementApp from "./Images/Sales-Order-Management-App.png";
import FixedForm from "./FixedForm";

import {
  FaBullseye,
  FaChartPie,
  FaClipboardList,
  FaFileInvoice,
  FaMapMarkedAlt,
  FaMoneyCheckAlt,
  FaRoute,
  FaStore,
  FaUndoAlt,
  FaUserClock,
} from "react-icons/fa";

export default function App() {
  /* ================= INTERSECTION OBSERVER ================= */
  useEffect(() => {
    const boxes = document.querySelectorAll(".feature-box");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    boxes.forEach((box) => observer.observe(box));

    return () => observer.disconnect();
  }, []);

  /* ================= FEATURES ================= */
  const features = [
    {
      icon: <FaStore />,
      title: "Secondary Sale",
      desc: "Track and manage the complete dealer-to-retailer sales flow with accuracy. Ensure smooth order movement across multiple distribution levels, boosting efficiency and reducing leakages.",
    },
    {
      icon: <FaUserClock />,
      title: "Employee/Staff Attendance By Location",
      desc: "Monitor employee presence in real-time with GPS-based location tracking. Simplify attendance verification and improve workforce accountability.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Dealer/Retailer Visits Tracking",
      desc: "Record and monitor client visits with GPS-based check-ins. Gain visibility into field activities, build stronger client relationships, and enhance productivity.",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Follow Up & Payments",
      desc: "Automate client follow-ups and simplify payment collections. Ensure timely reminders, reduce delays, and improve cash flow efficiency.",
    },
    {
      icon: <FaFileInvoice />,
      title: "Reports",
      desc: "Generate detailed performance reports with actionable insights. Track sales growth, employee efficiency, client interactions, and payment status for data-driven decisions.",
    },
    {
      icon: <FaUndoAlt />,
      title: "Sale / Defect Returns",
      desc: "Simplify return management by handling both sales and defective products seamlessly. Ensure quick replacements or refunds while keeping inventory updated.",
    },
    {
      icon: <FaClipboardList />,
      title: "Planned Visit with Routes",
      desc: "Create structured visit plans with optimized routes for field staff. Reduce travel time, track visit progress, and improve productivity with smart scheduling and route guidance.",
    },
    {
      icon: <FaChartPie />,
      title: "ASM (Area Sales Manager)",
      desc: "A centralized dashboard for Area Sales Managers to monitor Sales Executive attendance, Check-In and Orders at Dealer Place, track live field staff locations, and verify dealer Visits in real time.",
    },
    {
  icon: <FaBullseye />,
  title: "Target & Sales",
  desc: "Track assigned sales targets against actual achievements in real time. Monitor performance trends, identify gaps, and drive better sales outcomes.",
},{
  icon: <FaRoute />,
  title: "Future Visits",
  desc: "Schedule future dealer visits with optimized routes to maximize coverage, reduce travel time, and ensure efficient planning of field activities.",
}

  ];

  return (
    <>
      {/* ================= FLOATING FORM ================= */}
      <FixedForm />
      <section className="wrapper">
        <div className="left">
          <div className="logo">
            📍 Order / On-Field Management</div>

          <h3>One platform. One team. Complete field control.</h3>

          <p>
           Order /On Field Management is the process of tracking, managing, and fulfilling customer orders from the point of purchase to delivery.
           A well-implemented order management system (OMS) helps businesses improve efficiency, minimize errors, and deliver a better customer experience. It covers the entire order lifecycle — including order entry, inventory availability, payment processing, picking & packing, shipping, delivery tracking, returns, and customer support. For growing businesses, an OMS provides real-time visibility into order status, reduces manual effort, and automates workflows to save time and cost.
          </p>

          <ul>
            <li>Secondary Sale</li>
            <li>Employee/ Staff Attendance By Location</li>
            <li>Dealer/Retailer Visits Tracking</li>
            <li>Live Tracking</li>
            <li>Target By Dealer / Retailer</li>
            <li>Follow Up & Payments</li>
            <li>Reports</li>
          </ul>
        </div>

        <div className="right">
          <img src={SalesOrderManagementApp} alt="Field App" className="hero-image" />
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features">
        <h2>App Features</h2>

        <div className="feature-grid">
          {features.map((item, index) => (
            <div className="feature-box" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <span>CalibreCue IT Solutions</span>
          <span>📞 +91 9618240757</span>
          <a href="mailto:sales@calibrecue.in">sales@calibrecue.in</a>
          <span>Hyderabad, Telangana</span>
        </div>
      </footer>
    </>
  );
}
