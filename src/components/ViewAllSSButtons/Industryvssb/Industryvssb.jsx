import React, { useState } from "react";
import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";
import "./Industryvssb.css";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";

import {
  FaIndustry,
  FaTools,
  FaRobot,
  FaCheckCircle,
  FaShippingFast,
  FaDigitalTachograph,
  FaNetworkWired,
  FaWarehouse,
  FaProjectDiagram,
  FaCogs,
  FaMicrochip,
  FaLightbulb,
  FaBatteryThreeQuarters,
  FaClipboardList,
  FaShieldAlt,
  FaRoute,
  FaSolarPanel,
  FaRegHandPeace,
} from "react-icons/fa";

function Aivssb() {
  const topics = [
    {
      title: "Smart Manufacturing Systems",
      description:
        "Discover how Smart Manufacturing Systems (SMS) revolutionize Industry 4.0 with IoT, AI, and big data analytics. Optimize production processes, reduce downtime, and enable predictive maintenance for enhanced efficiency and sustainability.",
      icon: <FaIndustry />,
    },
    {
      title: "Predictive Maintenance AI",
      description:
        "Drive reliability and productivity in industrial operations with Predictive Maintenance AI. Our platform leverages artificial intelligence and machine learning algorithms to predict equipment failures, enabling timely interventions and extending machinery lifespan.",
      icon: <FaTools />,
    },
    {
      title: "Industrial Robotics Automation",
      description:
        "Drive reliability and productivity in industrial operations with Predictive Maintenance AI. Our platform leverages artificial intelligence and machine learning algorithms to predict equipment failures, enabling timely interventions and extending machinery lifespan.",
      icon: <FaRobot />,
    },
    {
      title: "AI-driven Quality Control",
      description:
        "Monitor and enhance product quality with AI-driven Quality Control. Our technology analyzes data from sensors, cameras, and historical records to detect defects and anomalies, ensuring high standards and minimizing human error.",
      icon: <FaCheckCircle />,
    },
    {
      title: "Supply Chain Optimization",
      description:
        "Improve supply chain efficiency with Supply Chain Optimization. Leveraging advanced technologies and algorithms, it ensures timely delivery of products, reduces costs, minimizes waste, and enhances collaboration across the supply chain for better decision-making and agility in response to market changes.",
      icon: <FaShippingFast />,
    },
    {
      title: "Digital Twin Technology",
      description:
        "Discover how Digital Twin Technology revolutionizes industries like manufacturing, healthcare, and smart cities by providing accurate, dynamic models for monitoring, testing, and maintenance. Make informed decisions and improve performance with virtual replicas and predictive capabilities.",
      icon: <FaDigitalTachograph />,
    },
    {
      title: "IoT-Enabled AI",
      description:
        "Explore the power of IoT-Enabled AI! Connect IoT devices with artificial intelligence for real-time data collection and analysis. Revolutionize industries with smart, connected systems.",
      icon: <FaNetworkWired />,
    },
    {
      title: "AI in Logistics",
      description:
        "AI in Logistics leverages artificial intelligence to streamline processes, minimize delays, and enhance overall supply chain performance. Learn how machine learning algorithms and data analytics optimize route planning, demand forecasting, and inventory management.",
      icon: <FaRoute />,
    },
    {
      title: "Intelligent Production Planning",
      description:
        "Drive competitive advantage in manufacturing with Intelligent Production Planning. Utilize AI and advanced algorithms to optimize processes, reduce lead times, and minimize waste for improved flexibility, responsiveness, and product quality.",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Factory Floor Automation",
      description:
        "Improve manufacturing efficiency with Factory Floor Automation. Utilizing robotics, IoT, and AI, automated systems streamline processes, reduce human error, and increase productivity. Stay agile and responsive to market demands with advanced automation technologies.",
      icon: <FaCogs />,
    },
    {
      title: "AI-based Process Optimization",
      description:
        "AI-based Process Optimization utilizes artificial intelligence to analyze and improve operational processes. It empowers organizations to adapt swiftly to market changes and continuously refine their operations for sustained competitive advantage.",
      icon: <FaMicrochip />,
    },
    {
      title: "Cyber-Physical Systems",
      description:
        "Learn how Cyber-Physical Systems (CPS) combine sensors, actuators, and networking capabilities with advanced computing to optimize processes, enhance efficiency, and improve safety in various sectors.",
      icon: <FaLightbulb />,
    },
    {
      title: "Smart Grid Systems",
      description:
        "Explore the world of Smart Grid Systems, where cutting-edge digital technologies revolutionize energy management. From IoT to sensors and communication networks, witness the integration of renewable energy sources, energy storage systems, and electric vehicles for a more reliable and efficient grid.",
      icon: <FaBatteryThreeQuarters />,
    },
    {
      title: "AI-powered Resource Management",
      description:
        "Discover how AI-powered Resource Management optimizes resource allocation and utilization across various domains using real-time data analysis and predictive AI models. Improve decision-making accuracy, reduce costs, and enhance productivity while supporting sustainability goals.",
      icon: <FaClipboardList />,
    },
    {
      title: "Industrial Data Analytics",
      description:
        "Dive into the world of Industrial Data Analytics to uncover valuable insights, predict equipment failures, and optimize manufacturing processes. Make informed decisions, reduce costs, and stay ahead in the digital age.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Autonomous Material Handling",
      description:
        "Explore the benefits of Autonomous Material Handling in modern smart factories and warehouses. Automate movement and management of materials with AI and IoT technologies.",
      icon: <FaWarehouse />,
    },
    {
      title: "Energy Efficiency AI",
      description:
        "Energy Efficiency AI utilizes artificial intelligence to optimize energy consumption by analyzing sensor data and historical usage patterns. Enhance building management, industrial processes, and transportation networks for cost savings, environmental sustainability, and regulatory compliance.",
      icon: <FaSolarPanel />,
    },
    {
      title: "AI-driven Workflow Automation",
      description:
        "Revolutionize your business with AI-driven Workflow Automation. Streamline processes, reduce errors, and boost efficiency with intelligent automation technology.",
      icon: <FaRegHandPeace />,
    },
    {
      title: "Industrial Safety Enhancements",
      description:
        "Enhance industrial safety with AI, IoT, and robotics technologies. Real-time data analysis, environmental monitoring, and robotic assistance reduce risks and ensure compliance. Prioritize worker well-being for a secure and efficient work environment.",
      icon: <FaShieldAlt />,
    },
    {
      title: "AI in Logistics",
      description:
        "Discover how AI in logistics uses machine learning and data analytics to optimize supply chain management and transportation. Real-time tracking, predictive maintenance, and efficient warehouse operations enhance decision-making and reduce costs.",
      icon: <FaShippingFast />,
    },
  ];

  return (
    <div>
      <div style={{ backgroundColor: "var(--black)" }}>
        <Header />
      </div>

      <div className="ai-view-hero-section">
        <div className="ai-view-hero-text">
          <h1 className="ai-view-hero-heading">
            AI In Industry Scientific Sessions
          </h1>
          <p className="ai-view-hero-paragraph">
            Join cutting-edge Artificial Intelligence Scientific Sessions to
            explore the latest advancements in AI research, technology, and
            applications. Connect with industry experts, attend keynote
            presentations, and participate in interactive workshops. Ideal for
            researchers, professionals, and enthusiasts eager to stay at the
            forefront of AI innovation. Don’t miss out on these essential AI
            conferences.
          </p>
          <div className="ai-view-buttons">
            <Link to="/ai-in-Industry/ai-in-Industry-download-broucher/">
              <button className="ai-view-button">Brochure Download</button>
            </Link>
            <Link to="/ai-in-Industry/ai-in-Industry-abstract-submission/">
              <button className="ai-view-button">Abstract Submission</button>
            </Link>
            <Link to="/ai-in-Industry/ai-in-Industry-register-now/">
              <button className="ai-view-button ai-view-goto-regs">
                Go To Registration
              </button>
            </Link>
            <Link to="/contact">
              <button className="ai-view-button ai-view-contactus">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="ai-view-sessions-all">
        <div className="paddings innerWidth  faq-container ">
          <div className="flexCenter faq">
            <Accordion
              className="faq-accordian"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {topics.map((item, i) => {
                const [className, setClassName] = useState(null);
                return (
                  <AccordionItem
                    className={`faq-accordianItem ${className}`}
                    key={i}
                    uuid={i}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter faq-accordianButton">
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>
                        <div className="flexCenter faq-icon">{item.icon}</div>
                        <span className=" primaryText-2">{item.title}</span>
                        <div className="flexCenter faq-icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.description}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
        <div className="paddings innerWidth flexCenter">
          <div className="flexColStart summit-info-container">
            <h2 className="summit-title">Cognitivetech Summit 2025</h2>
            <p className="summit-location">
              <strong>📍 Location:</strong> San Francisco
            </p>
            <p className="summit-date">
              <strong>📅 Date:</strong> [Insert Date Here]
            </p>
            <p className="summit-attendees">
              <strong>🌍 Attendees:</strong> 500+ Global Participants
            </p>
            <h3 className="summit-highlights">✨ Highlights:</h3>
            <ul className="summit-highlights-list">
              <li>Insightful presentations</li>
              <li>Panel discussions</li>
              <li>Interactive sessions with industry experts</li>
            </ul>
            <p className="orangeText summit-call-to-action">
              Join us to explore the latest advancements in cognitive
              technology!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Aivssb;
