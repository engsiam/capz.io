import {
  Brain,
  HeartPulse,
  Leaf,
  Lock,
  Server,
  ShieldCheck,
  Sprout,
} from "lucide-react";

export const featuredStartups = [
  {
    id: 1,
    name: "NeuralTech",
    logo: Brain, 
    description: "AI-driven data analytics for enterprise",
    fundingStage: "Series A",
    raised: "$5.2M",
  },
  {
    id: 2,
    name: "CloudSecure",
    logo: ShieldCheck, 
    description: "Zero-trust security for cloud infrastructure",
    fundingStage: "Seed",
    raised: "$1.8M",
  },
  {
    id: 3,
    name: "GreenFinance",
    logo: Sprout, // Sustainable investment
    description: "Sustainable investment platform",
    fundingStage: "Series B",
    raised: "$12M",
  },
  {
    id: 4,
    name: "HealthBridge",
    logo: HeartPulse, // HealthTech
    description: "Remote patient monitoring solutions",
    fundingStage: "Seed",
    raised: "$2.5M",
  },
  {
    id: 5,
    name: "EcoCharge",
    logo: Leaf, // CleanTech
    description: "Renewable energy charging infrastructure",
    fundingStage: "Series A",
    raised: "$7.5M",
  },
  {
    id: 6,
    name: "UrbanFarm",
    logo: Sprout, // AgTech
    description: "Vertical farming technology for urban areas",
    fundingStage: "Seed",
    raised: "$3.2M",
  },
  {
    id: 7,
    name: "DataSync",
    logo: Server, // Data/Enterprise
    description: "Real-time data synchronization platform",
    fundingStage: "Series A",
    raised: "$6.8M",
  },
  {
    id: 8,
    name: "CryptoSecure",
    logo: Lock, // Blockchain/Security
    description: "Blockchain security and compliance tools",
    fundingStage: "Seed",
    raised: "$2.1M",
  },
];

// Sample data for mentors
export const mentors = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Former CTO at TechGiants",
    image: "/placeholder.svg?height=150&width=150",
    quote: "Building the right team is everything in early-stage startups.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Venture Partner at Future Fund",
    image: "/placeholder.svg?height=150&width=150",
    quote: "Focus on solving real problems and the funding will follow.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Serial Entrepreneur, 3 Exits",
    image: "/placeholder.svg?height=150&width=150",
    quote: "Resilience and adaptability determine long-term success.",
  },
];

// Sample data for metrics
export const metrics = [
  { label: "Startups Funded", value: 250, suffix: "+" },
  { label: "Total Investment", value: 75, prefix: "$", suffix: "M" },
  { label: "Successful Exits", value: 28 },
  { label: "Active Mentors", value: 120, suffix: "+" },
];

// partnersData data
export const partnersData = [
  { id: 1, src: './brand/one.png', alt: 'Partner 1' },
  { id: 2, src: './brand/two.png', alt: 'Partner 2' },
  { id: 3, src: './brand/three.jpg', alt: 'Partner 3' },
  { id: 4, src: './brand/four.png', alt: 'Partner 4' },
  { id: 5, src: './brand/five.png', alt: 'Partner 5' },
  { id: 6, src: './brand/six.jpg', alt: 'Partner 6' }
];

export default partnersData;


export const teamMembers = [
  {
    id: 1,
    name: "Mostafijur Rahman",
    role: "Founder & CEO",
    image: "./teams/Mithon.png",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/#",
        color: "#1877F2",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/#",
        color: "#1DA1F2",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/#",
        color: "#0A66C2",
      },
    ],
  },
  {
    id: 2,
    name: "Md.Farhad Hossain",
    role: "Co-founder & COO",
    image: "./teams/FarhadHossain.png",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/#",
        color: "#1877F2",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/#",
        color: "#1DA1F2",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/#",
        color: "#0A66C2",
      },
    ],
  },
  {
    id: 3,
    name: "Md.Rakib Hossain",
    role: "CMO",
    image: "./teams/Rakib Babu.png",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/#",
        color: "#1877F2",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/#",
        color: "#1DA1F2",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/#",
        color: "#0A66C2",
      },
    ],
  },
  {
    id: 4,
    name: "Md. Shohag Ahmed",
    role: "Lead Graphic Designer",
    image: "./teams/Shohag.png",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/#",
        color: "#1877F2",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/#",
        color: "#1DA1F2",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/#",
        color: "#0A66C2",
      },
    ],
  },
  {
    id: 5,
    name: "Md. Habibbur Rahman",
    role: "Senior Digital Marketer",
    image: "./teams/habib.jpg",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/#",
        color: "#1877F2",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/#",
        color: "#1DA1F2",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/#",
        color: "#0A66C2",
      },
    ],
  },
  {
    id: 4,
    name: "Md. Shohrab Hossain",
    role: "Software Engineer",
    image: "./teams/siam.jpg",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/#",
        color: "#1877F2",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/#",
        color: "#1DA1F2",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/#",
        color: "#0A66C2",
      },
    ],
  },

  {
    id: 7,
    name: "Md. Aktarul Islam",
    role: "Branch Manager",
    image: "./teams/Aktarul.png",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/#",
        color: "#1877F2",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/#",
        color: "#1DA1F2",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/#",
        color: "#0A66C2",
      },
    ],
  },
  {
    id: 8,
    name: "Md. Al Hasan",
    role: "Social Media Manager",
    image: "./teams/hasan.png",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/#",
        color: "#1877F2",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/#",
        color: "#1DA1F2",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/#",
        color: "#0A66C2",
      },
    ],
  },
  {
    id: 16,
    name: "Hridoy Hashmi",
    role: "Junior Digital Marketer",
    image: "./teams/Hridoy.png",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/#",
        color: "#1877F2",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/#",
        color: "#1DA1F2",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/#",
        color: "#0A66C2",
      },
    ],
  },
  {
    id: 9,
    name: "Md. Rashed Khan Milon",
    role: " Junior Digital Marketer",
    image: "./teams/Rashed Babu.png",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/#",
        color: "#1877F2",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/#",
        color: "#1DA1F2",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/#",
        color: "#0A66C2",
      },
    ],
  },
  {
    id: 10,
    name: "Md.Shohan Paiker",
    role: "Junior Graphic Designer",
    image: "./teams/Shohan.png",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/#",
        color: "#1877F2",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/#",
        color: "#1DA1F2",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/#",
        color: "#0A66C2",
      },
    ],
  },
  {
    id: 11,
    name: "KM. Imam Hossen Cishti",
    role: "Junior Digital Marketer",
    image: "./teams/imam.jpg",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/#",
        color: "#1877F2",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/#",
        color: "#1DA1F2",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/#",
        color: "#0A66C2",
      },
    ],
  },
  {
    id: 17,
    name: "Md.Mukta",
    role: "Junior Digital Marketer",
    image: "./teams/Mukta.png",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/#",
        color: "#1877F2",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/#",
        color: "#1DA1F2",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/#",
        color: "#0A66C2",
      },
    ],
  },
  {
    id: 12,
    name: "Mst. Rupaly Khatun",
    role: "Junior Digital Marketer,",
    image: "./teams/Rupali.png",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/#",
        color: "#1877F2",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/#",
        color: "#1DA1F2",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/#",
        color: "#0A66C2",
      },
    ],
  },
  {
    id: 13,
    name: "Mst. Rumana Khatun",
    role: "Junior Digital Marketer,",
    image: "./teams/Rumana.png",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/#",
        color: "#1877F2",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/#",
        color: "#1DA1F2",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/#",
        color: "#0A66C2",
      },
    ],
  },
  {
    id: 15,
    name: "Ahona Binte Zaman",
    role: "Junior Content Writer",
    image: "./teams/Ohona.png",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/#",
        color: "#1877F2",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/#",
        color: "#1DA1F2",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/#",
        color: "#0A66C2",
      },
    ],
  },
  {
    id: 14,
    name: "Tuba Ahammad",
    role: "Junior Graphics Designer",
    image: "./teams/Tuba.png",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/#",
        color: "#1877F2",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/#",
        color: "#1DA1F2",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/#",
        color: "#0A66C2",
      },
    ],
  },
];
