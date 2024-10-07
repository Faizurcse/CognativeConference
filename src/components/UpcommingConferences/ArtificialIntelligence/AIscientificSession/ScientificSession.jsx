import React, { useState } from "react";
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

import "./Scientific.css";
import SSDAta1 from "../../../../utils/ScientificSession.jsx";
import SSDAta2 from "../../../../utils/ScientificSession2.jsx";
import { Link } from "react-router-dom";

function ScientificSession() {
  return (
    <section className="ss-warpper">
      <div className="paddings innerWidth flexColStart ss-heading">
        <span  className="text-align-center orangeText">AI Summit Scientific Sessions</span>
        <span className="primaryText">
          Below are the scientific sessions of the conference
        </span>
      </div>
      <div className="paddings innerWidth flexCenter ss-v-container">
        <div className=" ss-v-left">
          <Accordion
            className="ss-accordian"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {SSDAta1.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`ss-accordianItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter ss-accordianButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter ss-icon">{item.icon}</div>
                      <span className="primaryText-2">{item.heading}</span>
                      <div className="flexCenter ss-icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.details}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
        <div className=" ss-v-right">
          <Accordion
            className="ss-accordian"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {SSDAta2.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`ss-accordianItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter ss-accordianButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter ss-icon">{item.icon}</div>
                      <span className="primaryText-2">{item.heading}</span>
                      <div className="flexCenter ss-icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.details}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
      <div className="paddings innerWidth flexCenter ss-btn-container">
        <Link to="/artificial-intelligence/artificial-intelligence-scientific-sessions/">
          <button className="button ss-btn-padding">
            View All Scientific Session
          </button>
        </Link>
      </div>
    </section>
  );
}

export default ScientificSession;
