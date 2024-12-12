import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "DEEPESH SAI",
  initials: "k",
 
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Dynamic problem-solver with a passion for software development, research, and mentorship; leveraging technical expertise to innovate and inspire.",
  summary:
    "At the start of 2024, I transitioned from being a software developer intern at Tech Mahindra and Samsung R&D to fully focusing on research and innovative projects. In the past, [I graduated with a B.Tech in Computer Science and Technology from VIT](#education), [published impactful research on encryption and security](#research), and [mentored over 70 students as the Technical Lead of the Newton School Coding Club](#leadership). I've also enjoyed contributing to social initiatives through [VITeach, a non-profit organization](#community), and developing cutting-edge solutions like emotion-specific voice synthesis and secure multimedia encryption.",
  avatarUrl: "/deepesh.jpg",
  skills: [
    "C/C++",
    "Java",
    "Python",
    "MySQL",
    "QT",
    "Power Automate",
    "Ruby",
    "SPMT",
    "NumPy",
    "SciPy",
    "Pandas",
    "TensorFlow",
    "PyTorch",
    "Matplotlib",
    "Cryptography",
    "Md5",
    "Visual Studio",
    "Eclipse",
    "PyCharm",
    "GitHub"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    //{ href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "deepesh1312sai@gmail.com",
    tel: "(+91) 6379840698",
    social: {
      // GitHub: {
      //   name: "GitHub",
      //   url: "https://dub.sh/dillion-github",
      //   icon: Icons.github,

      //   navbar: true,
      // },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/deepesh-sai-21382b221/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:deepesh1312sai@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Tech Mahindra Ltd",
      href: "https://www.techmahindra.com/",
      logoUrl: "./techmahindra.webp",
      location: "Chennai, India",
      title: "Software Developer Intern",
      start: "October 2022",
      end: "January 2024",
      description:"Developed solutions for the BASF M365 Project, focusing on Power Apps, Power Automate, and SharePoint migrations to streamline business processes.Troubleshot and resolved issues such as migration errors, workflow automation failures, and permission management conflicts, ensuring seamless project execution.",
    },
    {
      company: "Samsung R&D",
      href: "https://research.samsung.com/sri-b",
      logoUrl: "./samsung.webp",
      location: "Bangalore, India",
      title: "Prism Developer",
      start: "January 2024",
      end: "July 2024",
      description:"Worked on an Emotional Voice Synthesis project to enhance the Tacotron model's ability to generate emotion-specific speech.Used LJ Speech and RAVDESS datasets to build a reliable baseline and improved the model to generate emotions like neutral, disgust, and anger with high intelligibility and enhanced encoder-decoder alignment. Applied learning rate scheduling and hyperparameter tuning to reduce training times and improve synthesis quality. Strengthened technical documentation and code reliability for seamless collaboration.",
    },
  ],
  education: [
    {
      school: "Vellore Institute of Technology (VIT) Chennai",
      href: "https://chennai.vit.ac.in",
      degree: "B.Tech in Computer Science and Technology",
      logoUrl: "/vit.jpeg",
      start: "2019",
      end: "2023",
      details: "GPA: 3.703/4.0 | TOEFL: 106",
      coreCourses: [
        "Operating Systems",
        "Computer Architecture",
        "Computer Networks",
        "Software Engineering",
        "Cyber Security",
        "Cryptography and Network Security",
        "Database Management System",
        "Machine Learning",
        "Compiler Design",
        "Data Structures and Algorithms",
        "Artificial Intelligence",
        "High Performance Computing",
        "Microeconomics",
        "Blockchain",
        "Internet of Things",
      ],
    },
  ],
  
  projects: [
    {
      title: "Faculty Availability Tracking System",
      //href: "https://vtop.vit.ac.in", // Hypothetical URL
      dates: "Software Engineering Course Project, VIT",
      active: true,
      description:
        "Designed and implemented a Faculty Availability Tracking System integrated into the VTOP platform using Java, Spring Boot, and MySQL. The system allows faculty to update availability in real-time, reducing unnecessary trips for students by over 50%.",
      technologies: ["Java", "Spring Boot", "MySQL", "JUnit", "Git"],
      links: [
        {
          type: "Source",
          href: "https://github.com/username/faculty-tracking-system", // Replace with actual URL
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "", // Add image path if available
      video: "", // Add video path if available
    },
    {
      title: "Placement Queries Chatbot",
     // href: "https://placementchatbot.vit.ac.in", // Hypothetical URL
      dates: "Artificial Intelligence Course Project, VIT",
      active: true,
      description:
        "Developed a chatbot using Python, NLP, and RAG software for answering placement-related queries at VIT University. The chatbot provides information about company details, job openings, interview processes, and placement statistics.",
      technologies: ["Python", "NLP", "RAG software", "Machine Learning"],
      links: [
        {
          type: "Source",
          href: "https://github.com/username/placement-chatbot", // Replace with actual URL
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "", // Add image path if available
      video: "", // Add video path if available
    },
    {
      title: "Image Zipping Software",
      //href: "https://imagezipping.vit.ac.in", // Hypothetical URL
      dates: "Advisor: Dr. Nithyanandam P",
      active: true,
      description:
        "Developed a novel zipping software leveraging Arnold Cat Map (ACM), Integer Wavelet Transforms (IWT), and Matrix Embedding to efficiently store multiple images or entire videos within a single image. The software ensures lossless data retrieval while addressing challenges in cloud storage and data compression.",
      technologies: ["Arnold Cat Map (ACM)", "IWT", "Matrix Embedding"],
      links: [
        {
          type: "Source",
          href: "https://github.com/username/image-zipping-software", // Replace with actual URL
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "", // Add image path if available
      video: "", // Add video path if available
    },
  ]
  ,
  hackathons: [{
    title: "Dynamic Approach for Time Reduction in RSA Algorithm",
    dates: "2024",
    location: "International Journal of Intelligent Engineering & Systems",
    description:
      "Enhanced the efficiency of the RSA algorithm to reduce encryption and decryption time. Our dynamic approach outperforms traditional RSA in terms of execution time, cost, and CPU efficiency.",
    image:
      "https://example.com/dynamic-rsa-image.png", // Replace with actual image link
    links: [
      {
        title: "Published Paper",
        href: "https://example.com/dynamic-rsa-paper.pdf", // Replace with actual link
      },
    ],
  },
  {
    title: "Enhanced Image Security through Dynamic RSA and Arnold Cat Map Shuffling",
    dates: "2024",
    location: "International Journal of Intelligent Engineering & Systems",
    description:
      "Implemented RSA encryption and Arnold Cat Map shuffling to enhance image security while preserving visual integrity. The method secures image pixels while maintaining quality.",
    image:
      "https://example.com/arnold-cat-map-image.png", // Replace with actual image link
    links: [
      {
        title: "Published Paper",
        href: "https://example.com/arnold-cat-map-paper.pdf", // Replace with actual link
      },
    ],
  },
  {
    title: "Secure Multi-modal Encryption Using Dynamic Rijndael S-Box Variations",
    dates: "2024",
    location: "International Journal of Intelligent Engineering & Systems",
    description:
      "Developed a multi-modal encryption method using dynamic S-Boxes, Fisher-Yates Shuffle, and PRNG to resist cryptographic attacks on text, image, and audio data.",
    image:
      "https://example.com/multi-modal-encryption-image.png", // Replace with actual image link
    links: [
      {
        title: "Published Paper",
        href: "https://example.com/multi-modal-encryption-paper.pdf", // Replace with actual link
      },
    ],
  },
  {
    title: "Timestamped Steganographic Embedding Using Arnold Cat Map for Secure Image Transmission and Attack Detection",
    dates: "2024",
    location: "VIT, India",
    description:
      "Designed a timestamped steganographic embedding method using Arnold Cat Map for secure image transmission and detection of active and passive attacks.",
    image:
      "https://example.com/timestamped-steganography-image.png", // Replace with actual image link
    links: [
      {
        title: "Final Year Thesis",
        href: "https://example.com/timestamped-steganography-thesis.pdf", // Replace with actual link
      },
    ],
  },
  
],

leadershipSkills: [
  {
    title: "Technical Lead",
    organization: "Newton School Coding Club, VIT Chennai",
    description:
      "Led and mentored a team of 70+ members in the development of the club’s website and ongoing research projects. Organized events and coding competitions and conducted LaTeX workshops to help members improve their document formatting and academic presentation skills. Guided juniors in enhancing their technical skills through hands-on projects.",
   // image:
     // "https://example.com/newton-school-coding-club.png", // Replace with actual image link
    links: [
      // {
      //   title: "Website",
      //   icon: <Icons.link className="h-4 w-4" />,
      //   href: "https://newtonschool.ac.in", // Replace with actual link
      // },
    ],
  },
  {
    title: "Core Committee",
    organization: "VITeach: A non-profit organization to support underprivileged children",
    description:
      "Contributed to supporting underprivileged children by teaching English, math, and computer science during weekly school visits, organizing educational activities, and distributing supplies. Promoted to Junior Core Committee, where I took on a leadership role in planning and implementing the club’s community-focused initiatives.",
    //image:
      //"https://example.com/viteach-logo.png", // Replace with actual image link
    links: [
      {
        //title: "Website",
        //icon: <Icons.link className="h-4 w-4" />,
        //href: "https://viteach.org", // Replace with actual link
      },
    ],
  },
  {
    title: "Content Head",
    organization: "iSpace, VIT Chennai - an iOS Development Club",
    description:
      "Supervised a team of 7 students while managing content creation for posts, emails, posters, and captions. Ensured effective communication of club events and news through digital and print media.",
    //image:
      //"https://example.com/ispace-logo.png", // Replace with actual image link
    links: [
      // {
      //   title: "Website",
      //   icon: <Icons.link className="h-4 w-4" />,
      //   href: "https://ispace.com", // Replace with actual link
      // },
    ],
  },
]
} as const;
