import p1cover from "./assets/projects/project1/cover.jpg";
import p1img1 from "./assets/projects/project1/photo1.jpg";
import p1img2 from "./assets/projects/project1/photo2.jpg";
import p1video from "./assets/projects/project1/lono.mp4";

import p3cover from "./assets/projects/project3/cover.jpg";
import p3img1 from "./assets/projects/project3/photo1.jpg";
import p3video from "./assets/projects/project3/video1.mp4";

import p4cover from "./assets/projects/project4/cover.jpg";
import p4img1 from "./assets/projects/project4/photo1.jpg";

import p5cover from "./assets/projects/project5/cover.png";
import p5video from "./assets/projects/project5/video1.mp4";

import p6cover from "./assets/projects/project6/cover.jpg";
import p6img1 from "./assets/projects/project6/photo1.jpg"; 
import p6img2 from "./assets/projects/project6/photo2.jpg";
import p6img3 from "./assets/projects/project6/photo3.jpg"; 
//import p6video from "./assets/projects/project6/video1.mp4";

export const projects = [
  {
    id: 1,
    title: "LONO PUREX",
    shortDescription: "Plasma-based water purification system.",
    fullDescription:
      "LONO PUREX is a plasma-based hybrid water purification and surface sterilization system developed as a compact, energy-efficient, and eco-friendly solution for improving water safety and hygiene. The system integrates plasma corona discharge, aeration, and ultraviolet (UV) irradiation into a single platform to generate highly reactive oxygen species such as hydroxyl radicals, atomic oxygen, ozone, and hydrogen peroxide. These reactive species effectively remove microbial pathogens, pesticide residues, and organic contaminants without producing harmful chemical by-products. Designed for practical and scalable applications, the system operates on low power and can be extended for household water purification, agricultural post-harvest washing, food processing, and healthcare sterilization. This project demonstrates the potential of plasma technology as a modern solution for environmental and food safety challenges.",
    cover: p1cover,
    images: [p1img1, p1img2],
    video: p1video,
    exhibition: "Pro Food Pro Pack Agri Biz 2025",
    tech: ["Plasma Technology", "Water Purification", "UV Treatment"],
    isCollaborative: true,
    team: [
      "W.N.V. Weraniyagoda",
      "S.D. Koshitha Bhagya Tharaka",
      "W.A.R.K. Wickramasinghe",
      "W.T.A. Bandara",
    ],
  },

  {
    id: 3,
    title: "AQUA INTEL",
    shortDescription: "Smart water quality monitoring boat system.",
    fullDescription:
      "AQUA INTEL is an innovative Arduino-based water quality measuring boat developed to monitor aquatic environments in a smart and efficient manner. The system is equipped with multiple sensors to measure key water quality parameters such as pH, temperature, electrical conductivity (EC), total dissolved solids (TDS), salinity, water depth, and visibility. It collects real-time data while navigating across water bodies, reducing the need for manual sampling and laboratory testing. With integrated GPS and communication modules, AQUA INTEL enables remote monitoring and accurate location tracking. This project provides a practical solution for environmental monitoring, early pollution detection, and sustainable water resource management, while demonstrating the integration of IoT, automation, and environmental science in a real-world application.",
    cover: p3cover,
    images: [p3img1],
    video: p3video,
    exhibition: "Winner – Best Green Innovation | Pro Food Pro Pack Agri Biz 2024",
    tech: ["IoT", "Arduino", "Sensors", "GPS", "Water Quality Analysis"],
    isCollaborative: true,
    team: [
  "W.N.V. Weraniyagoda",
  "S.D. Koshitha Bhagya Tharaka",
  "W.A.R.K. Wickramasinghe",
],
  },

  {
    id: 4,
    title: "COMPO TECH",
    shortDescription: "Automated composting and waste management system.",
    fullDescription:
      "COMPO TECH is an innovative automated composting system designed to efficiently manage organic waste in urban and domestic environments. The smart compost bin converts kitchen and biodegradable waste into nutrient-rich compost through a controlled and automated process. The system is programmed to handle essential composting functions such as timed mixing and temperature regulation, ensuring optimal conditions for faster and more effective decomposition. By reducing manual effort and improving composting efficiency, COMPO TECH promotes sustainable waste management, minimizes environmental pollution, and encourages eco-friendly practices. This project highlights the practical application of automation and smart systems in solving real-world environmental challenges.",
    cover: p4cover,
    images: [p4img1],
    video: null,
    exhibition: "Pro Food Pro Pack Agri Biz 2025",
    tech: ["Automation", "Composting", "Waste Management", "Sustainability"],
    isCollaborative: true,
    team: [
      "W.N.V. Weraniyagoda",
      "S.D. Koshitha Bhagya Tharaka",
      "W.A.R.K. Wickramasinghe",
      "G.K. Pasindu Dilhan",
      "D.M.S.K. Dasanayake",
    ],
  },

  {
    id: 5,
    title: "VERTIGREEN",
    shortDescription: "Smart vertical hydroponic system for sustainable urban farming.",
    fullDescription: `VertiGreen – Automated Vertical Hydroponic System is an innovative smart farming solution developed to combine sustainability with modern technology.

This system is designed to maximize crop production in limited spaces by using a vertical structure integrated with hydroponic and aquaponic principles.

The project creates a balanced and self-sustaining ecosystem where plant growth and aquatic life work together. By recycling nutrients through water, VertiGreen significantly reduces waste while improving efficiency and productivity in urban agriculture environments.

A key highlight of VertiGreen is the integration of real-time monitoring sensors, which continuously track critical water quality parameters such as pH, temperature, and electrical conductivity (EC). This ensures that plants always receive optimal growing conditions.

The system also introduces a natural nutrient enhancement approach by incorporating seaweed-based nutrients, supporting healthy plant growth while maintaining a safe aquatic environment.

To improve sustainability, VertiGreen is designed with an energy-efficient water circulation mechanism, reducing power consumption without compromising performance.

Additionally, the project is being further developed towards IoT-based remote monitoring and control, enabling users to manage the system from anywhere.

This project was successfully presented at the Pro Food Pro Pack & Agbiz Exhibition, showcasing its potential as a scalable solution for modern urban farming and sustainable food production.`,
    cover: p5cover,
    images: [],
    video: p5video,
    exhibition: "Pro Food Pro Pack & Agbiz Exhibition 2024",
    tech: ["Hydroponics", "Aquaponics", "IoT", "Sensors", "Automation"],
    isCollaborative: true,
    team: [
      "W.N.V. Weraniyagoda",
      "W.M.N.B Weerakoon",
      "S.D. Koshitha Bhagya Tharaka",
      "W.A.R.K. Wickramasinghe",
    ],
  },
  {
  id: 6,
  title: "AQUA SWEEP",
  shortDescription: "Smart water garbage collection system for urban waterways.",
  fullDescription: `The Smart Water Garbage Collector is an automated system designed to collect floating waste from urban water sources. Developed using a NodeMCU microcontroller, the system can be remotely controlled, allowing efficient waste collection without direct human involvement.

The device includes a smart bin that detects when it becomes full. Once the bin reaches its capacity, a buzzer alert is activated to notify the operator for timely waste removal. This ensures smooth operation and prevents overflow during continuous use.

The system is designed for stable deployment in urban waterways and can be effectively used in emergency situations where water bodies are heavily polluted. This project highlights the use of IoT and automation to improve environmental cleanliness and water management.`,

  cover: p6cover,
  images: [p6img1, p6img2, p6img3],
  video: null,

  exhibition: "Pro Food Pro Pack Agri Biz 2025",

  tech: ["NodeMCU", "IoT", "Automation", "Smart Bin", "Buzzer Alert"],

  isCollaborative: true,

  team: [
    "W.N.V. Weraniyagoda",
    "S.D. Koshitha Bhagya Tharaka",
    "W.A.R.K. Wickramasinghe",
    "W.T.A. Bandara",
  ],
},
];