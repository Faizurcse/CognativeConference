import React, { useState } from "react";
import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";
import "./Generativevssb.css";
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
  FaNetworkWired,
  FaEdit,
  FaBrain,
  FaArtstation,
  FaCogs,
  FaCube,
  FaBookOpen,
  FaComment,
  FaPalette,
  FaFilm,
  FaShieldAlt,
  FaDatabase 
} from "react-icons/fa";

function Aivssb() {
  const sessions = [
    {
      title: "Generative Adversarial Networks",
      description:
        "Explore the world of Generative Adversarial Networks (GANs) – deep learning frameworks where two neural networks compete to create realistic synthetic data instances. Learn about image synthesis, video generation, and more!",
      icon: <FaNetworkWired />, // Replace with actual icon
    },
    {
      title: "AI-driven Content Creation",
      description:
        "The Cognitivetech Summit 2025 was a resounding success, bringing together over 500 attendees from around the globe to explore the latest advancements in cognitive technology. Held in San Francisco, the event featured three stages packed with insightful presentations, panel discussions, and interactive sessions led by industry experts.",
      icon: <FaEdit />, // Replace with actual icon
    },
    {
      title: "Next Generation Models",
      description:
        "Explore the world of text generation models, from rule-based systems to advanced deep learning models like RNNs, transformers, and GPT variants. Discover how these AI algorithms are transforming information processing and communication in diverse fields.",
      icon: <FaBrain />, // Replace with actual icon
    },
    {
      title: "Creative AI Applications",
      description:
        "Explore the intersection of art and technology with Creative AI applications. From realistic visual images to AI-generated music and storytelling, discover how AI is reshaping creativity and design.",
      icon: <FaArtstation />, // Replace with actual icon
    },
    {
      title: "Generative Model Training",
      description:
        "Train AI models like GANs and VAEs to generate new data resembling training data. GANs use a generator and discriminator, while VAEs encode and decode data for high-quality outputs.",
      icon: <FaCogs />, // Replace with actual icon
    },
    {
      title: "3D Model Generation",
      description:
        "Explore the world of 3D model generation for architecture, gaming, VR, and more. Learn about manual modeling, 3D scanning, AI algorithms, and advanced techniques. Enhance visual simulations and product design with realistic and complex 3D models.",
      icon: <FaCube />, // Replace with actual icon
    },
    {
      title: "Story Generation AI",
      description:
        "Explore the world of Story Generation AI – creating engaging narratives autonomously or with human input. Learn about NLP, deep learning, and applications in entertainment, education, marketing, and interactive media.",
      icon: <FaBookOpen />, // Replace with actual icon
    },
    {
      title: "Language Model Advances",
      description:
        "Learn about the transformative impact of language model advances on natural language processing (NLP), including the latest innovations in transformer architectures like GPT models. Discover how these advancements are driving new capabilities and efficiencies in language-based interactions across digital platforms.",
      icon: <FaComment />, // Replace with actual icon
    },
    {
      title: "Generative Art Algorithms",
      description:
        "Explore the world of generative art algorithms that create autonomous artworks using computational methods. From simple procedural rules to complex AI-driven systems, these algorithms generate visuals, music, and literature by following predefined instructions or learning patterns from datasets. Discover how techniques like genetic algorithms, neural networks, and GANs challenge traditional notions of creativity and push the boundaries of artistic creation in the digital age.",
      icon: <FaPalette />, // Replace with actual icon
    },
    {
      title: "Visual Content Synthesis",
      description:
        "Explore the world of visual content synthesis with algorithms and AI techniques. Enhance creativity and productivity in digital art, graphic design, and multimedia production. Learn about GANs, style transfer, and their applications in creating personalized avatars, virtual environments, and visual effects in movies and games. Evolve your creativity with computational capabilities for visually compelling media.",
      icon: <FaFilm />, // Replace with actual icon
    },
    {
      title: "Deepfake Detection Techniques",
      description:
        "Protect your digital media with deepfake detection techniques. Learn how AI and machine learning algorithms can identify manipulated videos and images. Utilize forensic analysis, watermarking, and blockchain verification for authenticity.",
      icon: <FaShieldAlt />, // Replace with actual icon
    },
    {
      title: "Synthetic Data Generation",
      description:
        "Discover the importance of synthetic data generation in enhancing model accuracy and protecting privacy. Explore techniques such as statistical modeling, GANs, and AI-driven approaches for creating artificial data with real-world patterns.",
      icon: <FaDatabase  />, // Replace with actual icon
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
            Generative AI Scientific Sessions
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
            <Link to="/generative-ai/generative-ai-download-broucher/">
              <button className="ai-view-button">Brochure Download</button>
            </Link>
            <Link to="/generative-ai/generative-ai-abstract-submission/">
              <button className="ai-view-button">Abstract Submission</button>
            </Link>
            <Link to="/generative-ai/generative-ai-register-now/">
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
