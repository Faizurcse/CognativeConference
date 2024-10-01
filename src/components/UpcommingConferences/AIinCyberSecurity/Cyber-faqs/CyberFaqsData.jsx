import { HiLightBulb, HiChip, HiShieldCheck, HiGlobe, HiDesktopComputer, HiUserGroup } from "react-icons/hi";

const AIfaqsData = [
  {
    icon: <HiLightBulb />,
    heading: "What is AI in cybersecurity?",
    detail:
      "AI in cybersecurity helps keep safe against online threats. It looks at lots of data to find unusual activity that might mean someone is trying to hack in.",
  },
  {
    icon: <HiChip />,
    heading: "How does AI improve threat detection?",
    detail:
      "AI makes threat detection better by using deep learning and big data to check out network traffic, how users act, and what’s going on in the system. This lets AI spot and deal with possible threats fast often before they can do any damage.",
  },
  {
    icon: <HiShieldCheck />,
    heading: "Can AI prevent all cyber attacks?",
    detail: `
      AI boosts cybersecurity and keeps it safe, but it can’t stop every cyber attack. It has the capability to mark and makes fewer threats, but how well it works depends on the data quality and how complex the attack is.
    `,
  },
  {
    icon: <HiChip />,
    heading: "What are the restrictions of AI in cybersecurity?",
    detail: `
      AI in cybersecurity has its limits. It needs big datasets, might raise false alarms, and requires constant updates to keep up with new threats. AI often struggles with clever or unknown (zero-day) attacks
    `,
  },
  {
    icon: <HiShieldCheck />,
    heading: "How does AI handle zero-day threats?",
    detail: `
      AI tackles zero-day threats by looking at patterns and behaviors linked to new and unknown weak spots. While AI can spot possible zero-day threats, it might not always give full protection. People often need to step in to make sure the defense is complete.
    `,
  },
  {
    icon: <HiGlobe />,
    heading: "AI capable of autonomous response in cybersecurity?",
    detail: "AI can respond on its own in cybersecurity by acting fast when it finds threats. It might cut off affected systems or stop harmful activities. But it’s rare for AI to work on its own. People need to keep an eye on things to make sure the response fits the situation.",
  },
  {
    icon: <HiUserGroup />,
    heading: "How are chatbots used in AI-powered cybersecurity?",
    detail: "In AI-powered cybersecurity, chatbots play a role to help detect and respond to warnings. They do this by automating how people communicate, answering questions about security, and showing users the steps in security protocols. These chatbots make cybersecurity teams more productive by taking care of everyday tasks.",
  }
];

export default AIfaqsData;
