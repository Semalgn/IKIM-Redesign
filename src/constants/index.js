const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "About Us",
    link: "#about",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 60, suffix: "+", label: "Clients" },
  { value: 10, suffix: "+", label: "Projects on Contract" },
  { value: 30, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Full Stack Development",
    imgPath: "/images/webDevelopmenttool.jpg",
  },
  {
    name: "Mobile App Development",
    imgPath: "/images/smartphone.jpg",
  },
  {
    name: "Video Editing",
    imgPath: "/images/editing.jpg",
  },
  {
    name: "Market Consultancy",
    imgPath: "/images/finance.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:"Mikiyas Taye",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "CEO & Web Developer",
    date: "Unknown - Present",
    responsibilities: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
  {
    review: "Amen Dereje",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Mern Stack Developer",
    date: "unknown - Present",
    responsibilities: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
  {
    review: "Betselot Bezuayehu.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Software Developer",
    date: "unknown - Present",
    responsibilities: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Quality Service",
    review:
      "Specialize in delivering high-quality, custom web development solutions tailored to your business goals. Our team is committed to combining innovative design with reliable performance to create exceptional digital experiences. We prioritize precision, scalability, and client satisfaction in every project we build.",
  },
  {
    name: "Creative Designers",
    review:
      "Our creative designers blend innovation with aesthetics to craft visually striking and user-friendly interfaces. They turn ideas into engaging designs that elevate your brand presence online.",
  },
  {
    name: "Video Editors",
    review:
      "Our video editors transform raw footage into compelling visual stories that capture attention and communicate your message clearly. With a focus on precision and creativity, they bring your brand to life through dynamic content.",
  },
  {
    name: "Free Consultation",
    review:
      "We offer a free initial consultation to discuss your project requirements and how we can help you achieve your goals.",
  },
  {
    name: "Customer Support",
    review:
      "Our customer support team is dedicated to providing prompt and effective assistance to ensure your satisfaction. We are here to help you with any inquiries or issues you may have.",
  },
  
];

const socialImgs = [
  {
    name: "fb",
    url: "https://web.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://x.com/i/flow",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
