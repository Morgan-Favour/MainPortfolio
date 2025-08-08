import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  moviefinder,
  movieretail
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Python",
    icon: python,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Literesults",
    icon: meta,
    iconBg: "#383E56",
    date: "June 2023 - December 2023",
    points: [
      "Developed user interfaces for web applications using React.js and Tailwind CSS, enhancing user experience and responsiveness.",
      "Collaborated with designers and senior developers to implement pixel-perfect designs and ensure cross-browser compatibility.",
      "Assisted in debugging and optimizing frontend code, improving page load times by 15%.",
      "Participated in agile team meetings, contributing to sprint planning and code reviews.",
    ],
  },
  {
    title: "Python Developer Intern",
    company_name: "Bincom Dev Center",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "January 2024 - July 2024",
    points: [
      "Built and maintained server-side logic for web applications using Python and Django, integrating with frontend interfaces.",
      "Collaborated with a team of developers to create RESTful APIs, enabling seamless data communication between frontend and backend.",
      "Contributed to database management and optimization, ensuring efficient data retrieval and storage.",
      "Engaged in code reviews, adopting best practices for clean and scalable Python code.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Nexlify Solutions",
    icon: shopify,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Developed full-stack web applications using React.js, Node.js, and MongoDB for small business clients.",
      "Worked closely with product managers to implement responsive designs and enhance user interaction flows.",
      "Integrated third-party APIs to add features like payment gateways and analytics tracking.",
      "Participated in weekly code reviews, providing feedback to improve team code quality.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },

  {
    name: "Movie Finder",
    description:
      "A streamlined web app for movie lovers. Search movies by title with real-time results. Discover your next watch with a simple, intuitive interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: moviefinder,
    source_code_link: "https://github.com/Morgan-Favour/Movie-App",
  },

  {
    name: "Movie Retail Dashboard",
    description:
      "A web app for movie retail owners. Manage inventory, track sales, and update stock in real-time. View detailed reports on movie rentals, purchases, and customer trends. Simplify operations with an easy-to-use, secure interface.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: movieretail,
    source_code_link: "https://github.com/Morgan-Favour/Movie-App",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, project };
