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
  price_tracker_project
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
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
      "Leveraged Python libraries (Numpy, Pandas, Matplotlib, Seaborn) to analyze last year's Diwali sales data for a shop. Presented actionable insights that propelled this year's Diwali sales.",
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
      "Applied SQL to analyze a vast music playlist database, extracting valuable insights for business growth. Addressed critical questions, aiding the store in understanding customer preferences, optimizing inventory, and making informed decisions for holistic business development.",
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
