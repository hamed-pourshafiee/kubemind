export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  items: string[];
}

export const personalInfo = {
  name: "Hamed Pourshafiee",
  title: "Software Engineer",
  email: "hamed.pourshafiee@gmail.com",
  phone: "+98 903 503 7912",
  location: "Isfahan, Iran",
  summary:
    "Software Engineer with 8+ years of experience across diverse development stacks and infrastructure. Passionate about delivering fast, efficient solutions in collaborative teams using cutting-edge technologies — always pushing for improvement.",
  github: "https://github.com/hamed-pourshafiee",
  linkedin: "https://linkedin.com/in/hamed-pourshafiee",
};

export const experiences: Experience[] = [
  {
    title: "Technical Lead & DevOps Engineer",
    company: "Bluecouch AI",
    location: "Vancouver (Remote), Canada",
    period: "Jun 2021 — Present",
    highlights: [
      "Evaluated and integrated 20+ tools/technologies for MVP and production readiness",
      "Coordinated Backend, Frontend, and Infrastructure teams to build scalable solutions",
      "Translated stakeholder requirements into 10+ actionable product features",
      "Mentored 6 team members through pair programming",
      "Automated release process — reduced deployment to 5 minutes via GitLab CI, ArgoCD, EKS",
      "Leveraged Terraform for IaC, CloudFront & Cloudflare for CDN (A-grade performance)",
      "Built monitoring/alerting with Sentry and DataDog",
    ],
  },
  {
    title: "Senior Backend Developer & DevOps Engineer",
    company: "Bluecouch AI",
    location: "Vancouver (Remote), Canada",
    period: "Sep 2020 — May 2021",
    highlights: [
      "Oversaw and reviewed 3 developers' work for quality and product alignment",
      "Built automated Rate Sheet engine — measurable time and cost savings",
      "Containerized all apps with Kaniko — faster builds, better caching",
      "Deployed on AWS Elastic Beanstalk & Amplify for scalability",
      "Standardized local dev environment with Vagrant across the team",
    ],
  },
  {
    title: "Senior Backend Developer",
    company: "Fekre Bartar",
    location: "Isfahan, Iran",
    period: "Apr 2019 — Sep 2020",
    highlights: [
      "Built a Foursquare-based app in 1 month with React Native",
      "Created dashboard panel with React.js, Redux, and Ant Design",
      "Trained 2 developers to enhance dashboard functionality",
      "Integrated CI/CD with GitLab CI and Heroku for Dockerized apps",
    ],
  },
  {
    title: "Senior Backend Developer",
    company: "Saina",
    location: "Isfahan, Iran",
    period: "Jun 2018 — Apr 2019",
    highlights: [
      "Designed learning paths to grow team competencies",
      "Improved cloud management dashboard UX and functionality",
      "Optimized and customized OpenStack for cloud provider integration",
      "Identified and resolved technical bottlenecks in cloud tools",
    ],
  },
  {
    title: "Senior Backend Developer",
    company: "Tickro",
    location: "Isfahan, Iran",
    period: "Dec 2017 — Jun 2018",
    highlights: [
      "Designed Pick-up Delivery service with advanced navigation algorithms",
      "Built vehicle tracking system for Isfahan Municipality",
      "Automated permit issuance for regulatory compliance",
      "Integrated real-time data tracking and reporting into the platform",
    ],
  },
  {
    title: "Senior Backend Developer",
    company: "Chartex",
    location: "Tehran, Iran",
    period: "May 2015 — Dec 2017",
    highlights: [
      "Architected multi-product startup infrastructure for scalability",
      "Reverse-engineered legacy flight ticketing system",
      "Reduced flight ticket issuance errors to below 1%",
      "Built front-end panel for travel agencies",
      "Automated deployments with Ansible, virtualization with Proxmox",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Negin Tejarat",
    location: "Isfahan, Iran",
    period: "Jun 2014 — May 2015",
    highlights: [
      "Led 6-member tech team for project delivery",
      "Implemented SaaS solution replacing legacy website/mobile dev methods",
      "Directed full-stack development aligned with organizational goals",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Pooya Pendar",
    location: "Isfahan, Iran",
    period: "Oct 2012 — Jan 2014",
    highlights: [
      "Built front-end and back-end for Restaurant Reservation Service",
      "Created desktop app for South Pars Oil & Gas Development",
      "Extensive web development with Angular v1.x",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Rasekhoon",
    location: "Isfahan, Iran",
    period: "Apr 2011 — Oct 2012",
    highlights: [
      "Developed comprehensive CMS — project reached 36th most-viewed site in Iran",
      "Boosted content creation efficiency by 20% with template engine",
      "Improved content loading speed by 40% via caching system",
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    name: "Languages & Frameworks",
    icon: "code",
    items: ["Python", "Django", "Flask", "Bash", "JavaScript", "TypeScript", "React", "React Native"],
  },
  {
    name: "AI & Agentic Applications",
    icon: "brain",
    items: ["Agentic AI Applications", "Google ADK", "LLM Integration", "AI Orchestration"],
  },
  {
    name: "Cloud & Infrastructure",
    icon: "cloud",
    items: ["AWS (EKS, RDS, S3, CloudFront, Lambda, SQS, SNS, API Gateway, VPC)", "GCP (Cloud Run, Cloud Functions, Vertex AI, Cloud Build, Pub/Sub, Cloud Storage)", "Cloudflare", "Terraform"],
  },
  {
    name: "DevOps & CI/CD",
    icon: "rocket",
    items: ["Docker", "Kubernetes", "GitLab CI", "ArgoCD", "Ansible", "Prometheus", "Grafana", "ELK Stack", "Sentry", "DataDog"],
  },
  {
    name: "Operating Systems",
    icon: "terminal",
    items: ["Linux", "macOS"],
  },
];

export const education = {
  degree: "Bachelor's Degree in Computer Software Engineering",
  university: "Islamic Azad University, Najafabad Branch",
  location: "Isfahan, Iran",
};
