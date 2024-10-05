import React, { useState } from "react";
import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";
import "./Cybervssb.css";
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
  FaEye,
  FaExclamationTriangle,
  FaBug,
  FaShieldAlt,
  FaLightbulb,
  FaUserSecret,
  FaRobot,
  FaLock,
  FaBell,
  FaTasks,
  FaWrench,
  FaBalanceScale,
} from "react-icons/fa";

function Aivssb() {
  const sessions = [
    {
      title: "Threat Detection Automation",
      description:
        "Threat detection automation leverages AI, machine learning, and automation tools to identify, analyze, and respond to security threats efficiently. It involves collecting data from various sources, normalizing and analyzing it using AI and ML algorithms, and integrating threat intelligence. Automated systems detect anomalies, correlate data, and trigger predefined response actions through playbooks. This approach enhances speed, consistency, and scalability in threat detection, while freeing up security analysts for complex tasks. Challenges include integration, adaptability, and managing false positives.",
      icon: <FaEye />, // Eye icon for detection
    },
    {
      title: "Anomaly Detection Systems",
      description:
        "Anomaly detection systems identify unusual patterns or behaviors in data that may indicate security threats or other issues. They use statistical models, machine learning algorithms, and data mining techniques to establish a baseline of normal activity and flag deviations. Key components include data collection from various sources, model training with historical data, real-time monitoring, and alerting for further investigation when anomalies are detected. These systems enhance security by enabling early threat detection and improving operational efficiency.",
      icon: <FaExclamationTriangle />, // Warning triangle icon for anomalies
    },
    {
      title: "Malware Analysis Techniques",
      description:
        "Malware analysis techniques involve examining malicious software to understand its behavior, origin, and impact. Key methods include static analysis, which inspects the code without executing it; dynamic analysis, which runs the malware in a controlled environment to observe behavior; behavioral analysis, which monitors system changes and interactions; and memory analysis, which examines memory dumps for hidden processes and malicious code. These techniques help develop effective defenses and mitigation strategies.",
      icon: <FaBug />, // Bug icon for malware
    },
    {
      title: "Network Intrusion Prevention",
      description:
        "Network Intrusion Prevention (NIP) involves proactive measures to detect and block potential security threats within a network. It uses advanced techniques like deep packet inspection, behavior analysis, and signature-based detection to identify malicious activity. NIP systems monitor network traffic in real-time, analyzing data packets for known attack patterns and anomalies. When a threat is detected, these systems can automatically block or mitigate the attack to prevent damage. Key benefits include enhanced security, reduced risk of data breaches, and improved network performance by preventing malicious traffic.",
      icon: <FaShieldAlt />, // Shield icon for protection
    },
    {
      title: "Cyber Attack Prediction",
      description:
        "Cyber attack prediction uses machine learning, artificial intelligence, and big data analytics to anticipate potential cyber threats before they occur. It involves collecting data from sources like network logs and threat intelligence feeds, training predictive models on historical data, and continuously analyzing real-time data to detect early signs of attacks. This approach enhances proactive defense, reduces breach risks, and improves incident response planning.",
      icon: <FaLightbulb />, // Lightbulb icon for prediction
    },
    {
      title: "Behavioral Biometrics Security",
      description:
        "Behavioral biometrics security focuses on unique patterns in human behavior, such as typing rhythm, mouse movements, voice characteristics, and gestures, for authentication and identification. Unlike traditional biometrics, which rely on physical traits, behavioral biometrics analyze how individuals interact with devices and systems. It enhances security by providing continuous authentication based on these behavior patterns, adding an extra layer of protection against unauthorized access and fraud.",
      icon: <FaUserSecret />, // User icon for identity
    },
    {
      title: "AI-driven Threat Intelligence",
      description:
        "AI-driven threat intelligence involves using artificial intelligence and machine learning to analyze vast amounts of data from various sources to identify and predict potential security threats. It enhances traditional threat intelligence by automating the analysis of data such as network traffic, system logs, and external threat feeds. AI algorithms can detect patterns, anomalies, and indicators of compromise that may not be apparent through manual methods. This approach accelerates threat detection, improves accuracy, and enables proactive defenses against evolving cyber threats.",
      icon: <FaRobot />, // Robot icon for AI
    },
    {
      title: "Data Breach Prevention",
      description:
        "Data breach prevention involves implementing strategies and technologies to protect sensitive information. This includes encrypting data to secure it from unauthorized access, controlling who can access data and how, monitoring systems for suspicious activities, auditing access logs for anomalies, educating employees on security best practices, and having a plan to respond swiftly to breaches. These efforts aim to reduce the risk of data breaches, ensure compliance with regulations, and maintain trust with stakeholders.",
      icon: <FaLock />, // Lock icon for security
    },
    {
      title: "AI-Driven Threat Detection",
      description:
        "AI-driven threat detection leverages machine learning and artificial intelligence to enhance the identification and response to cyber threats. It involves using sophisticated algorithms to analyze vast amounts of data, such as network traffic, system logs, and user behavior, in real-time. By establishing patterns of normal behavior and identifying anomalies or known attack patterns, AI can detect threats more quickly and accurately than traditional methods. This proactive approach helps organizations mitigate risks, reduce response times, and strengthen overall cybersecurity posture against evolving threats.",
      icon: <FaBell />, // Bell icon for alerts
    },
    {
      title: "Automated Incident Response",
      description:
        "Automated incident response refers to the use of AI and machine learning to streamline and accelerate the handling of cybersecurity incidents without human intervention. It involves creating predefined playbooks and workflows that automate the detection, analysis, and response to security alerts and incidents.",
      icon: <FaTasks />, // Tasks icon for automation
    },
    {
      title: "AI in Vulnerability Assessment",
      description:
        "Enhance cybersecurity with AI in vulnerability assessment. Automated scanning, risk prioritization, behavioral analysis, and predictive analytics for proactive security measures.",
      icon: <FaWrench />, // Wrench icon for assessment
    },
    {
      title: "Ethical Considerations",
      description:
        "Explore ethical considerations in AI for cybersecurity, including privacy, bias, transparency, accountability, and human oversight. Ensure trustworthiness in AI-driven systems.",
      icon: <FaBalanceScale />, // Balance scale icon for ethics
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
            AI In Cyber Security Scientific Sessions
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
            <Link to="/cyber-security/cyber-security-download-broucher/">
              <button className="ai-view-button">Brochure Download</button>
            </Link>
            <Link to="/cyber-security/cyber-security-abstract-submission/">
              <button className="ai-view-button">Abstract Submission</button>
            </Link>
            <Link to="/cyber-security/cyber-security-register-now/">
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
              {sessions.map((item, i) => {
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
