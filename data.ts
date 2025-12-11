import { Translation, ExperienceItem, EducationItem, ProjectItem, SkillCategory, PersonalInfo } from './types';

export const personalInfo: PersonalInfo = {
  name: "Nguyen Quang Long",
  email: "long.nq.hust@gmail.com",
  phone: "0869174722",
  address: "Hanoi, Vietnam",
  github: "https://github.com/longnq", // Assuming github from context
};

export const translations: Record<string, Translation> = {
  en: {
    nav: {
      about: "About",
      education: "Education",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      resume: "Download CV"
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Fullstack Developer",
      description: "I am a dynamic, hardworking, and responsible software engineer who is committed to delivering high-quality work. I specialize in building complex web systems, mobile applications, and game development. I love solving difficult problems and optimizing performance.",
      cta: "Get in touch"
    },
    sectionTitles: {
      about: "About Me",
      education: "Education",
      experience: "Work Experience",
      skills: "Skills & Tech Stack",
      projects: "Personal Projects",
      contact: "Contact Me",
      certificates: "Certificates"
    },
    common: {
      present: "Present",
      techStack: "Tech Stack",
      viewProject: "View Source"
    }
  },
  vi: {
    nav: {
      about: "Giới thiệu",
      education: "Học vấn",
      experience: "Kinh nghiệm",
      skills: "Kỹ năng",
      projects: "Dự án",
      contact: "Liên hệ",
      resume: "Tải CV"
    },
    hero: {
      greeting: "Xin chào, tôi là",
      role: "Lập trình viên Fullstack",
      description: "Tôi là một kỹ sư phần mềm nhiệt huyết, chăm chỉ và trách nhiệm cao trong công việc. Tôi chuyên xây dựng các hệ thống web phức tạp, ứng dụng di động và phát triển game. Tôi yêu thích việc giải quyết các vấn đề khó và tối ưu hóa hiệu năng hệ thống.",
      cta: "Liên hệ ngay"
    },
    sectionTitles: {
      about: "Về bản thân",
      education: "Học vấn",
      experience: "Kinh nghiệm làm việc",
      skills: "Kỹ năng & Công nghệ",
      projects: "Dự án cá nhân",
      contact: "Liên hệ",
      certificates: "Chứng chỉ"
    },
    common: {
      present: "Hiện tại",
      techStack: "Công nghệ sử dụng",
      viewProject: "Xem mã nguồn"
    }
  }
};

export const educationData: EducationItem[] = [
  {
    school: "Hanoi University of Science and Technology (HUST)",
    degree: "Degree of Engineer in Computer Engineering",
    period: "Sep 2019 - Jan 2024",
    details: "GPA: 3.25/4.0 - Degree classification: Very Good"
  }
];

export const experienceData: { en: ExperienceItem[]; vi: ExperienceItem[] } = {
  en: [
    {
      company: "Viettel Group (Viettel Network)",
      role: "Fullstack Developer",
      period: "Nov 2023 - Present",
      description: [
        "Participated in projects as a Software Development Engineer, handling complex business logic.",
        "Developing network infrastructure resource management systems (DCIM) providing real-time monitoring, data analytics, and device management.",
        "Optimizing operations and enhancing business performance."
      ]
    },
    {
      company: "VNG Corporation (ZingPlay Game Studios)",
      role: "Game Developer",
      period: "Aug 2023 - Nov 2023",
      description: [
        "Built a mobile PvE game for both client and server side.",
        "Developed game UI and wrote server APIs.",
        "Implemented algorithms to optimize system performance and synchronize data between client and server."
      ]
    },
    {
      company: "PPCLink",
      role: "Mobile Developer",
      period: "Aug 2022 - Aug 2023",
      description: [
        "Primarily worked as a mobile developer, involved in developing features for the company's product.",
        "Occasionally worked as a web developer, building website UI for outsourced projects."
      ]
    }
  ],
  vi: [
    {
      company: "Tập đoàn Viettel (Viettel Network)",
      role: "Lập trình viên Fullstack",
      period: "11/2023 - Hiện tại",
      description: [
        "Tham gia dự án với vai trò Kỹ sư phát triển phần mềm, xử lý các logic nghiệp vụ phức tạp.",
        "Phát triển hệ thống quản lý tài nguyên hạ tầng mạng (DCIM) cung cấp giám sát thời gian thực, phân tích dữ liệu và quản lý thiết bị.",
        "Tối ưu hóa vận hành và nâng cao hiệu quả kinh doanh."
      ]
    },
    {
      company: "VNG Corporation (ZingPlay Game Studios)",
      role: "Lập trình viên Game",
      period: "08/2023 - 11/2023",
      description: [
        "Xây dựng game mobile PvE cho cả client và server.",
        "Phát triển UI game và viết các API cho server.",
        "Triển khai thuật toán tối ưu hiệu năng hệ thống và đồng bộ dữ liệu client-server."
      ]
    },
    {
      company: "PPCLink",
      role: "Lập trình viên Mobile",
      period: "08/2022 - 08/2023",
      description: [
        "Làm việc chính với vai trò lập trình viên mobile, phát triển tính năng cho sản phẩm của công ty.",
        "Tham gia phát triển web, xây dựng UI website cho các dự án outsourcing."
      ]
    }
  ]
};

export const skillsData: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C/C++", "SQL", "Dart"]
  },
  {
    name: "Frameworks & Libs",
    skills: ["ReactJS", "Angular", "Flutter", "Spring Boot", "ExpressJS", "Node.js", "JSF", "ThreeJS", "Cocos2d"]
  },
  {
    name: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "MariaDB", "Oracle", "Redis"]
  },
  {
    name: "Tools & DevOps",
    skills: ["Docker", "Kubernetes", "Git", "Linux", "Postman", "Latex"]
  }
];

export const projectsData: { en: ProjectItem[]; vi: ProjectItem[] } = {
  en: [
    {
      name: "Smart Home IoT",
      description: "Simulating a smart home system, managing interactive functions with the house devices through IoT boards via a smartphone.",
      techStack: ["C/C++", "IoT", "Mobile"],
      url: "#"
    },
    {
      name: "Tower Defense Game",
      description: "A strategy-based real-time game where players defend their territory. Objective is to prevent enemies from reaching the end while managing resources.",
      techStack: ["Java", "Cocos2d"],
      url: "#"
    },
    {
      name: "Matching CV and JD",
      description: "An NLP system that takes a CV as input and generates a suitable Job Description. Involved crawling data, cleaning, and using ML models for matching.",
      techStack: ["Python", "NLP", "Machine Learning"],
      url: "#"
    },
    {
      name: "Game PvP (TCP/IP)",
      description: "PvP game utilizing network programming techniques with TCP/IP protocol and Winsock library to simulate a connected application at the Socket level.",
      techStack: ["C++", "Winsock", "Socket Programming"],
      url: "#"
    }
  ],
  vi: [
    {
      name: "Smart Home IoT",
      description: "Mô phỏng hệ thống nhà thông minh, quản lý các chức năng tương tác với thiết bị trong nhà thông qua bo mạch IoT và điện thoại thông minh.",
      techStack: ["C/C++", "IoT", "Mobile"],
      url: "#"
    },
    {
      name: "Tower Defense Game",
      description: "Game chiến thuật thời gian thực. Người chơi đặt tháp phòng thủ để ngăn chặn kẻ địch. Quản lý tài nguyên và nâng cấp tháp.",
      techStack: ["Java", "Cocos2d"],
      url: "#"
    },
    {
      name: "Matching CV and JD",
      description: "Hệ thống NLP nhận đầu vào là CV và tạo ra mô tả công việc (JD) phù hợp. Bao gồm cào dữ liệu, làm sạch và dùng mô hình học máy để khớp nối.",
      techStack: ["Python", "NLP", "Machine Learning"],
      url: "#"
    },
    {
      name: "Game PvP (TCP/IP)",
      description: "Game PvP sử dụng kỹ thuật lập trình mạng với giao thức TCP/IP và thư viện Winsock để mô phỏng kết nối ở tầng Socket.",
      techStack: ["C++", "Winsock", "Lập trình Socket"],
      url: "#"
    }
  ]
};

export const certificates = [
  "Completed Game Development Fresher 2023 Program (GDF18)",
  "Certified Kubernetes Administrator (CKA) - 2024"
];