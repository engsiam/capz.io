import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle,
  DollarSign,
  Handshake,
  Layers,
  LineChart,
  Rocket,
  Search,
  UserPlus,
} from "lucide-react";
import { HowItWorksStep } from "./how-it-works-step";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const entrepreneurSteps = [
  {
    icon: Rocket,
    title: "Submit Your Startup",
    desc: "Create your profile and submit your pitch deck, details, and funding needs.",
  },
  {
    icon: Handshake,
    title: "Get Matched With Mentors",
    desc: "Connect with industry experts to refine your pitch and strategy.",
  },
  {
    icon: DollarSign,
    title: "Connect With Investors",
    desc: "Present to our network of investors who are looking for opportunities like yours.",
  },
  {
    icon: CheckCircle,
    title: "Secure Funding",
    desc: "Close your funding round with legal and technical support from our team.",
  },
];

const investorSteps = [
  {
    icon: UserPlus,
    title: "Join Our Network",
    desc: "Build your investor profile with your investment preferences.",
  },
  {
    icon: Search,
    title: "Discover Opportunities",
    desc: "Browse vetted startups that align with your goals.",
  },
  {
    icon: LineChart,
    title: "Due Diligence Support",
    desc: "Access detailed analytics and insights from our team.",
  },
  {
    icon: Layers,
    title: "Portfolio Management",
    desc: "Track your investments and get regular performance updates.",
  },
];

const Section = ({
  title,
  color,
  steps,
}: {
  title: string;
  color: string;
  steps: { icon: React.ElementType; title: string; desc: string }[];
}) => (
  <motion.div
    className={`bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-${color}-500/50 transition-colors duration-300`}
    variants={itemVariants}
  >
    <h3 className={`text-2xl font-bold mb-6 text-${color}-400`}>
      {title}
    </h3>
    <div className="space-y-8">
      {steps.map((step, index) => (
        <motion.div key={index} variants={itemVariants}>
          <HowItWorksStep
            icon={step.icon}
            title={step.title}
            description={step.desc}
          />
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const HomeStep: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false, // Repeat animation on re-enter
    amount: 0.2,
  });

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-gray-900/50 border-t border-gray-800 relative overflow-hidden"
    >
      {/* Optional animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-purple-900/10 pointer-events-none" />

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              How We Work
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              Our simple process connects great ideas to smart capital and
              unlocks your venture’s potential.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Section
              title="For Entrepreneurs"
              color="cyan"
              steps={entrepreneurSteps}
            />
            <Section
              title="For Investors"
              color="blue"
              steps={investorSteps}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeStep;
