// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "VRGreg's Portfolio",
  description:
    "I'm a web developer who's making something amazing and crazy little bit for the world. Even if it's Ctrl+C -> Ctrl+V from StackOverflow",
  og: {
    title: "Roman Vitsiuk Portfolio",
    type: "website",
    url: "https://lancergreg.github.io/vrgreg.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Roman Vitsiuk",
  logo_name: "RomanVitsiuk",
  nickname: "vrgreg",
  subTitle: "Hello there 👋 I'm a web developer who's making something amazing and crazy little bit for the world. Even if it's Ctrl+C -> Ctrl+V from StackOverflow 😁",
  portfolio_repository: "https://github.com/LancerGreg/vrgreg.github.io",
  githubProfile: "https://github.com/LancerGreg",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/LancerGreg",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/roman-vitsiuk-a0b29a175/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:vrv2323@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Telegram",
    link: "https://t.me/VRGreg",
    fontAwesomeIcon: "fa-telegram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚒ Building backend and frontend part of website using Razor Pages",
        "⚒ Developing API serve"
      ],
      softwareSkills: [
        {
          skillName: "C#",
          img: "csharp",
        },
        {
          skillName: "ASP.NET Framework",
          img: "netframework",
        },
        {
          skillName: "ASP.NET Core",
          img: "netcore",
        },
        {
          skillName: "Razor Pages",
          img: "razor",
        },
        {
          skillName: "MS SQL",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#1163a4",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National Technical University of Ukraine 'Ihor Sikorsky Kyiv Polytechnic Institute'",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "kpi_logo.png",
      alt_name: "NTUU KPI Sikorsky",
      duration: "2015 - 2019",
      descriptions: [
        "👨‍🎓 I have studied basic software engineering subjects like Computer Logic and Architecture, Algorithms and Methods of Calculation, DCS etc.",
        "👨‍🎓 Apart from this, I have studied java and made program of computer graphics by Swagger and javafx"
      ],
      website_link: "https://kpi.ua",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Company and private work",
  description:
    "I have worked with IT companies and private customers as Web developer. I love developing service systems and creating unique solution.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Company work",
      experiences: [
        {
          title: "Web developer",
          company: "Itransition",
          company_url: "https://www.itransition.com/",
          logo_path: "itransition_logo.png",
          duration: "Jun 2021 - Currently",
          location: "Ukraine, Kiyv",
          description:
            "I am working on web products of our partners. The products is about automate and managing resurs.",
          color: "#0879bf",
        },
        {
          title: "Web developer",
          company: "INSTITUTE OF INFORMATION SYSTEMS DEVELOPMENT LIMITED LIABILITY COMPANY (IISD LLC)",
          company_url: "https://youcontrol.com.ua/catalog/company_details/39682689/",
          logo_path: "iris_logo.png",
          duration: "Feb 2020 - May 2021",
          location: "Ukraine, Kiyv",
          description:
            "I have worked on state websites like BTI, Online Account and Kyiv Municipal Service. I have developed backend and frontend part for the website projects.",
          color: "#9b1578",
        },
        {
          title: "Junior .Net developer",
          company: "Opinov8",
          company_url: "https://opinov8.com/",
          logo_path: "opinov8_logo.png",
          duration: "Apr 2019 - Sept 2019",
          location: "Ukraine, Kiyv",
          description:
            "I have worked on security manager products. The projects involve automation for process notification of your email secure",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Private work",
      experiences: [
        {
          title: "Developer ZMIST resources",
          company: "ZMIST",
          company_url: "https://www.zmist.in.ua/materials",
          logo_path: "zmist_logo.png",
          duration: "Oct 2020 - Apr 2021",
          location: "Ukraine, Boryspil",
          description:
            "I have wokred on a private person and developed Landing page https://www.zmist.in.ua, Web store https://www.zmist.in.ua/materials and other resources.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vrgreg.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
