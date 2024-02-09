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
  powerbi,
  excel,  
  powerpoint,
  jupyter,
  numpy,
  pandas,
  python,
  sql,
  powerbi_project,
  excel_project,
  python_project,
  sql_project,
  price_tracker_project,
  shaurya_logo,
  rajbhasha_logo
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
    title: "Data Analyst",
    icon: web,
  },
  {
    title: "Business Analyst",
    icon: mobile,
  },
  {
    title: "Data Scienist",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: powerbi,
  },
  {
    name: "HTML 5",
    icon: sql,
  },
  {
    name: "HTML 5",
    icon: excel,
  },
  {
    name: "HTML 5",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: jupyter,
  },
  {
    name: "HTML 5",
    icon: powerpoint,
  },
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
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Shaurya Committee",
    company_name: "WebD Domain",
    icon: shaurya_logo,
    iconBg: "#383E56",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Led the creation of Shaurya Club's sports fest website, 'Samar', using React, Three.js, and Tailwind CSS, deploying a 3D model for an engaging user experience.",
      "Demonstrated effective team leadership, assigning tasks to juniors, fostering skill development, and contributing to successful project completion.",
      "Managed and version-controlled the project efficiently on GitHub.",
      "Strengthened networking with seniors, enhancing web development skills.",
    ],
    link:"https://samar2k22.netlify.app/",
  },
  {
    title: "Rajbhasha Club",
    company_name: "WebD Domain",
    icon: rajbhasha_logo,
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "Drove backend development for the Rajbhasha Club's website, implementing a robust forum with interactive features and efficient certificate issuance through face recognition.",
      "Spearheaded the integration of machine learning programs, enhancing the website's functionality and user experience.",
      "Demonstrated expertise in backend systems, ensuring seamless data processing and storage.",
      "Contributed to a collaborative and innovative environment, leveraging backend and machine learning skills for a dynamic web platform.",
    ],
    link:"https://samar2k22.netlify.app/",
  },
];

const testimonials = [
  {
    testimonial:
      "Akshay's data insights are key to informed decisions. A valuable asset for any data-focused team!",
    name: "Neha Singh",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Efficient and collaborative, Akshay translates complex data into user-friendly solutions seamlessly",
    name: "Akash Kumar",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Akshay's expertise in Python, SQL, and Excel is pivotal for project success. Highly recommended!!",
    name: "Yaseen Khan",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Price Tracker",
    description:
      "Crafted an e-commerce scraping platform using Next.js and Bright Data's webunlocker. Empowers users with price drop alerts and keeps competitors informed about stock status through automated cron jobs, ensuring strategic insights for both.",
    tags: [
      {
        name: "webScraping",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
    ],
    image: price_tracker_project,
    source_code_link: "https://github.com/akshayjain07/price-tracker",
  },
  {
    name: "Diwali Sales of a shop",
    description:
      "Analyzed last year's Diwali sales data for a shop using Python and its libraries (Numpy, Pandas, Matplotlib, Seaborn). Presented actionable insights, driving impactful strategies that propelled this year's Diwali sales success.",
    tags: [
      {
        name: "numpy",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: python_project,
    source_code_link: "https://github.com/akshayjain07/python-data-analysis",
  },
  {
    name: "Store Annual Sales Report",
    description:
      "Compiled a comprehensive 2022 annual sales report for Vrinda Store using MS Excel. Conducted data cleaning, constructed pivot tables and charts, and developed a dashboard for valuable insights, driving sales growth in 2023.",
    tags: [
      {
        name: "excel",
        color: "blue-text-gradient",
      },
      {
        name: "data cleaning",
        color: "green-text-gradient",
      },
      {
        name: "pivot table",
        color: "pink-text-gradient",
      },
    ],
    image: excel_project,
    source_code_link: "https://github.com/akshayjain07/excel-data-analysis",
  },
  {
    name: "HR Analytics Dashboard",
    description:
      "Engineered an online sales dashboard for Madhav Store, facilitating nationwide sales tracking and analysis. The intuitive interface delivers key insights, fostering data-driven decision-making for optimal business performance.",
    tags: [
      {
        name: "powerbi",
        color: "blue-text-gradient",
      },
      {
        name: " data-driven decision-making",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: powerbi_project,
    source_code_link: "https://github.com/akshayjain07/powerBI-data-analysis",
  },
  {
    name: "Music Store Data Analysis",
    description:
      "Applied SQL to analyze a vast music playlist database, extracting valuable insights for business growth. Addressed critical questions, aiding the store in understanding customer preferences and making informed decisions for holistic business development.",
    tags: [
      {
        name: "sql",
        color: "blue-text-gradient",
      },
      {
        name: "database",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: sql_project,
    source_code_link: "https://github.com/akshayjain07/sql-project",
  },
];

export { services, technologies, experiences, testimonials, projects };
