import p1cover from "./assets/projects/project1/cover.jpg";
import p1img1 from "./assets/projects/project1/photo1.jpg";
import p1img2 from "./assets/projects/project1/photo2.jpg";
import p1video from "./assets/projects/project1/lono.mp4";

import p3cover from "./assets/projects/project3/cover.jpg";
import p3img1 from "./assets/projects/project3/photo1.jpg";
import p3video from "./assets/projects/project3/video1.mp4";

import p4cover from "./assets/projects/project4/cover.jpg";
import p4img1 from "./assets/projects/project4/photo1.jpg";

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
    tech: [
      "Plasma Technology",
      "Water Purification",
      "UV Treatment",
      "Environmental Engineering",
    ],
    isCollaborative: true,
    team: [
      "W.N.V. Weraniyagoda",
      "S.D. Koshitha Bhagya Tharaka",
      "W.A.R.K. Wickramasinghe",
      "W.R.T.A. Bandara",
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
    tech: [
      "IoT",
      "Arduino",
      "Sensors",
      "GPS",
      "Water Quality Analysis",
    ],
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
    tech: [
      "Automation",
      "Composting",
      "Waste Management",
      "Sustainability",
    ],
    isCollaborative: true,
    team: [
      "W.N.V. Weraniyagoda",
      "S.D. Koshitha Bhagya Tharaka",
      "W.A.R.K. Wickramasinghe",
      "G.K. Pasindu Dilhan",
    ],
  },
];