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

import "./AboutCognitive.css";
import data from "../../utils/accordion";

function AboutCognitive() {
  return (
    <section className="v-warpper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-robot-blue-light-technology-artificial-intelligence-future-robot-image_2199774.jpg"
              alt="Error"
            />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="orangeText">comprehensive overview</span>
          <span className="primaryText">About Cognitive tech Summit</span>
          <span className="secondaryText">
            This provides a comprehensive overview of the Cognitive Tech
            Summit's key
            <br /> focus areas, with related icons and details for each point.
          </span>
          <Accordion
            className="accordian"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
                const [className,setClassName] = useState(null)
              return (
                <AccordionItem className={`accordianItem ${className}`} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordianButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText-2">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default AboutCognitive;
