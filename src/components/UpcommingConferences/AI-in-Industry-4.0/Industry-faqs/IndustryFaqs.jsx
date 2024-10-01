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

import "./Industryfaqs.css";
import GenertaivefaqsData from "./Industry40faqs.jsx";

function AIFaqs() {
  return (
    <section className="faq-warpper ai-faqs-warpper-bgc">
      <div className="paddings innerWidth flexCenter faq-container">
        <div className="flexCenter faq">
          <span className="primaryText">Frequently Asked Questions(FQAS)</span>

          <Accordion
            className="faq-accordian"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {GenertaivefaqsData.map((item, i) => {
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
                      <span className="primaryText-2">{item.heading}</span>
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

export default AIFaqs;
