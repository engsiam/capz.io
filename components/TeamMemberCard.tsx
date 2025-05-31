"use client";
import { Facebook, Linkedin, Plus, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TeamMemberCard = ({ member }) => {
  // Function to get the appropriate icon based on platform
  const getIcon = (platform) => {
    switch (platform) {
      case "facebook":
        return <Facebook size={18} />;
      case "twitter":
        return <Twitter size={18} />;
      case "linkedin":
        return <Linkedin size={18} />;
      case "more":
        return <Plus size={18} />;
      default:
        return <Plus size={18} />;
    }
  };

  return (
    <div className="group relative rounded-lg overflow-hidden bg-gray-900 shadow-lg">
      {/* Team member image with hover effect */}
      <div className="aspect-[3/4] relative overflow-hidden">
        {/* Image with slow scale effect */}
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-[2000ms] ease-in-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Diagonal overlay effect - slowly appears on hover */}
        {/* <div 
          className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-white/20 to-cyan-500/0 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms] ease-in-out"
          aria-hidden="true"
        ></div> */}

        {/* Alternative diagonal overlay that grows */}
        <div
          className="absolute left-1/2 top-1/2 w-[200%] h-0 -translate-x-1/2 -translate-y-1/2 -rotate-45 
             bg-white/10 z-[1] transition-all duration-[8500ms] ease-linear
             group-hover:h-[250%] group-hover:bg-white/5"
          aria-hidden="true"
        />

        {/* Vertical accent line */}
        {/* <div className="absolute left-8 bottom-0 w-1 h-16 bg-cyan-500"></div> */}
      </div>

      {/* Social media links with staggered appearance */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1 z-10">
        {member.socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className={`w-10 h-10 flex items-center justify-center rounded text-white 
                      opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0
                      hover:scale-110 transition-all duration-700 ease-out`}
            style={{
              backgroundColor: link.color,
              transitionDelay: `${100 + index * 100}ms`,
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {getIcon(link.platform)}
          </Link>
        ))}
      </div>

      {/* Name and role info */}
      <div className="p-4 bg-gray-900/50">
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="text-white">{member.role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
