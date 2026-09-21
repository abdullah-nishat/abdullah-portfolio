export type Project = {
  title: string;
  subtitle: string;
  category: "Full Stack" | "Backend";
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  featured?: boolean;
  credentials?: {
    email: string;
    password: string;
  };
};

export const portfolio = {
  personal: {
    name: "Khondaker Abdullah Nishat",
    shortName: "Abdullah Nishat",
    role: "Full-Stack Developer",
    secondaryRole: "CSE Graduate from AIUB",
    location: "Bashundhara R/A, Dhaka, Bangladesh",
    phone: "01627693345",
    email: "abdullahnishat172@gmail.com",
    status: "Open to work",
    profileImage: "/profile.png",
    coverImage: "/linkedin-cover.png",
    cvPath: "/Abdullah_Nishat_CV.pdf",
    summary:
      "Computer Science graduate with hands-on experience building and deploying full-stack web applications using Next.js, NestJS, React, TypeScript, PostgreSQL and Tailwind CSS. I enjoy working across frontend, backend, databases, authentication and deployment, and I am looking for an opportunity where I can contribute while continuing to grow as a software engineer.",
    intro:
      "I am passionate about full-stack development and practical software engineering. My projects include e-commerce platforms, a CRM and sales pipeline application, and an ASP.NET Core backend system. I am comfortable taking a project from interface design and API development through database integration and production deployment.",
  },

  social: {
    github: "https://github.com/abdullah-nishat",
    linkedin: "https://www.linkedin.com/in/abdullah46/",
  },

  highlights: [
    { value: "4", label: "Featured projects" },
    { value: "1", label: "Research publication" },
    { value: "3NP", label: "Primary web stack" },
  ],

  skills: {
    "Full-Stack": ["Next.js", "React", "NestJS", "Node.js", "TypeScript", "JavaScript", "Tailwind CSS", "REST API"],
    Backend: ["NestJS", "Node.js", "ASP.NET Core", "Entity Framework Core", "AutoMapper"],
    Databases: ["PostgreSQL", "Neon", "MySQL", "Microsoft SQL Server"],
    Programming: ["C++", "C#", "Java", "Python", "JavaScript", "TypeScript"],
    Deployment: ["Vercel", "Render", "Neon", "Brevo", "Git", "GitHub"],
    "Practical Experience": ["Google OAuth", "OTP Verification", "Pusher", "SSLCommerz", "Session/Auth", "Responsive UI"],
  },

  projects: [
    {
      title: "NexaBazar",
      subtitle: "Online Marketplace",
      category: "Full Stack",
      description:
        "A complete e-commerce application with product browsing, authentication, Google OAuth, Brevo OTP verification, real-time notifications and SSLCommerz payment integration.",
      technologies: ["Next.js", "NestJS", "React", "TypeScript", "PostgreSQL", "Pusher", "SSLCommerz"],
      liveUrl: "https://nexa-bazar-ecommerce-zokr.vercel.app",
      githubUrl: "https://github.com/abdullah-nishat/NexaBazar_Ecommerce",
      image: "/projects/nexabazar.svg",
      featured: true,
    },
    {
      title: "NokshiLane",
      subtitle: "Fashion & Lifestyle Platform",
      category: "Full Stack",
      description:
        "A full-stack fashion and lifestyle e-commerce platform with Google Sign-In, email OTP verification, cart and wishlist, admin order management, real-time notifications, COD and SSLCommerz payment integration.",
      technologies: ["Next.js", "NestJS", "React", "TypeScript", "PostgreSQL", "Neon", "Vercel", "Render"],
      liveUrl: "https://nokshi-lane-ecommerce.vercel.app",
      githubUrl: "https://github.com/abdullah-nishat/NokshiLane_Ecommerce",
      image: "/projects/nokshilane.svg",
      featured: true,
      credentials: {
        email: "admin@nokshilane.local",
        password: "Admin123!",
      },
    },
    {
      title: "SalesFlow CRM",
      subtitle: "CRM & Sales Pipeline",
      category: "Full Stack",
      description:
        "A CRM and sales pipeline application for companies, contacts, leads, deals, follow-ups, role-based users, notifications and sales performance, including an interactive dashboard and drag-and-drop pipeline.",
      technologies: ["Next.js", "NestJS", "React", "TypeScript", "PostgreSQL", "Pusher"],
      liveUrl: "https://sales-flow-crm-six.vercel.app/login",
      githubUrl: "https://github.com/abdullah-nishat/Sales-Flow-CRM",
      image: "/projects/salesflow.svg",
      featured: true,
    },
    {
      title: "Product Management System",
      subtitle: "ASP.NET Core Web API",
      category: "Backend",
      description:
        "A three-tier backend application built with ASP.NET Core, Entity Framework Core, SQL Server and AutoMapper, with JSON HTTP requests/responses, generic interfaces and structured business/data-access layers.",
      technologies: ["ASP.NET Core", "C#", "Entity Framework Core", "SQL Server", "AutoMapper", "REST API"],
      githubUrl: "https://github.com/abdullah-nishat/ASP.NET_WEBAPI_PROJECT_ProductManagementSystem/tree/main/ProductManagementSystemAPI/ApiBased",
      image: "/projects/product-management.svg",
      featured: true,
    },
  ] satisfies Project[],

  publication: {
    title: "Evaluating Fairness–Accuracy Trade-offs in Machine Learning Models Under Controlled Training Data Bias: A Comparative Study",
    venue: "ICCA 2026",
    status: "Accepted for Publication",
    authors: [
      "Nafis Hasan",
      "Khondaker Abdullah Nishat",
      "Anika Tahsin Aunu",
      "Md. Tasauf Islam",
      "Sharfuddin Mahmood",
    ],
  },

  education: [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "American International University-Bangladesh (AIUB)",
      year: "2026",
      result: "CGPA 3.77",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Milestone College",
      year: "2021",
      result: "GPA 5.00",
    },
  ],
};

export type PortfolioData = typeof portfolio;
