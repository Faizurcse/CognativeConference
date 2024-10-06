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

import "./FQAS.css";
import data1 from "../../utils/data1.jsx";

function FQAS() {
  return (
    <section className="faq-warpper">
      <div className="paddings innerWidth  faq-container">
        <div className="flexCenter faq">
          <span className="primaryText ">Frequently Asked Questions(FQAS)</span>
          
          <Accordion
            className="faq-accordian"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data1.map((item, i) => {
                const [className,setClassName] = useState(null)
              return (
                <AccordionItem className={`faq-accordianItem ${className}`} key={i} uuid={i}>
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
                      <span className=" primaryText-2 headinfText">{item.heading}</span>
                      <div className="flexCenter faq-icon">
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

export default FQAS;
