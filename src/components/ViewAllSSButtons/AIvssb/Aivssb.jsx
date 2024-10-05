import React, { useState } from "react";
import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";
import "./Aivssb.css";
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
  AiOutlineCloud,
  AiOutlineRobot,
  AiOutlineDatabase,
  AiOutlineLineChart,
  AiOutlineHeart,
  AiOutlineAppstore,
  AiOutlineStock,
  AiOutlineBank,
  AiOutlineUser,
  AiOutlineCloudServer,
  AiOutlineRise,
  AiOutlineSetting,
} from "react-icons/ai";

function Aivssb() {
  const aiviewsessions = [
    {
      title: "AI & Big Data",
      icon: <AiOutlineCloud />,
      content:
        "Explore how AI and Big Data are reshaping industries by enabling machines to simulate human intelligence. These transformative technologies optimize operations and drive innovation in sectors like healthcare and finance. By analyzing vast amounts of data, organizations can identify trends, enhance decision-making, and improve customer experiences. AI and Big Data work together to create smarter solutions, making businesses more efficient and competitive.",
    },
    {
      title: "AI & Robotics",
      icon: <AiOutlineRobot />,
      content:
        "Explore the intersection of AI and Robotics, driving innovation in automation. Discover how AI equips robots with cognitive abilities and how Robotics creates machines capable of interacting with the world. This fusion allows for greater precision in tasks and reduces human error. Together, they enhance productivity across various sectors, paving the way for smarter manufacturing and service delivery.",
    },
    {
      title: "Data Science",
      icon: <AiOutlineDatabase />,
      content:
        "Unlock the power of data with our comprehensive data science website. Discover how data scientists use statistics and machine learning to extract insights and drive innovation across various industries. Data science encompasses data collection, analysis, and interpretation, leading to actionable strategies. By leveraging big data, organizations can stay ahead of the competition and meet evolving consumer demands.",
    },
    {
      title: "Deep Learning",
      icon: <AiOutlineLineChart />,
      content:
        "Explore the transformative power of deep learning with our website. Discover how artificial neural networks are revolutionizing industries and driving advancements in various fields. Deep learning mimics human brain function, enabling machines to learn from vast datasets. This technology is critical in applications like image recognition, natural language processing, and autonomous systems.",
    },
    {
      title: "Data Analytics",
      icon: <AiOutlineDatabase />,
      content:
        "Discover the power of data analytics with our website. Uncover patterns and insights to make informed decisions and enhance efficiency across various domains. Data analytics transforms raw data into meaningful information, helping organizations optimize performance. By using data-driven approaches, businesses can improve strategies, reduce costs, and boost productivity.",
    },
    {
      title: "Artificial Intelligence in Healthcare",
      icon: <AiOutlineHeart />,
      content:
        "Discover how AI in healthcare revolutionizes patient care and diagnostics. Enhance diagnostic accuracy and personalize treatment plans with data-driven insights for better outcomes. AI tools assist in analyzing patient data, predicting diseases, and improving clinical workflows. This technology not only aids healthcare professionals but also enhances patient experiences and outcomes.",
    },
    {
      title: "Internet of Things (IoT)",
      icon: <AiOutlineAppstore />,
      content:
        "Dive into the realm of IoT on our website, where you can learn about interconnected devices. Explore how IoT is driving innovation and improving quality of life in various sectors. IoT connects devices, enabling them to communicate and share data, leading to smarter homes and cities. The implications of IoT extend to industries like agriculture, transportation, and healthcare, enhancing efficiency and sustainability.",
    },
    {
      title: "AI Finance",
      icon: <AiOutlineBank />,
      content:
        "Discover how AI in finance reshapes the industry with advanced algorithms and data analytics. From predictive analytics to personalized services, explore the future of finance. AI enhances risk assessment and fraud detection, ensuring safer financial transactions. As AI continues to evolve, it is expected to streamline operations and improve customer interactions significantly.",
    },
    {
      title: "Human Robotics",
      icon: <AiOutlineUser />,
      content:
        "Explore the dynamic relationship between humans and robots. We cover the collaboration and communication enhancing cooperation in industrial and healthcare settings. Human-robot interaction is crucial for improving productivity and safety in workplaces. Understanding this relationship can lead to better-designed robots that effectively support human activities.",
    },
    {
      title: "Cloud Robotics",
      icon: <AiOutlineCloudServer />,
      content:
        "Explore the future of robotics with cloud robotics technology. Enhance robot capabilities and overcome challenges for broader adoption across various industries. By leveraging cloud computing, robots can access vast data resources and improve their learning processes. This technology enables real-time collaboration between robots, leading to enhanced performance and efficiency.",
    },
    {
      title: "Advancements in Deep Learning Architectures",
      icon: <AiOutlineRise />,
      content:
        "Explore the latest advancements in deep learning architectures for AI. From CNNs to RNNs and Transformer models, discover how these innovations are reshaping image processing and more. Understanding these architectures is essential for developing robust AI solutions. As research progresses, the applications of deep learning continue to expand across various domains.",
    },
    {
      title: "Role of AI & Robotics in Industry & Business",
      icon: <AiOutlineSetting />,
      content:
        "Discover how AI and Robotics revolutionize industries with precision and efficiency. From manufacturing to healthcare, automation drives growth and competitiveness. The integration of AI and Robotics optimizes workflows and reduces operational costs. As industries adapt to these technologies, they can respond more quickly to market changes and enhance customer satisfaction.",
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
            Artificial Intelligence Scientific Sessions
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
            <Link to="/artificial-intelligence/artificial-intelligence-download-broucher/">
              <button className="ai-view-button">Brochure Download</button>
            </Link>
            <Link to="/artificial-intelligence/artificial-intelligence-abstract-submission/">
              <button className="ai-view-button">Abstract Submission</button>
            </Link>
            <Link to="/artificial-intelligence/artificial-intelligence-register-now/">
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
              {aiviewsessions.map((item, i) => {
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
                      <p className="secondaryText">{item.content}</p>
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
