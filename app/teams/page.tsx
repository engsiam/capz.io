import TeamMemberCard from "@/components/TeamMemberCard";
import { teamMembers } from "@/src/data/data";

const TeamSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-750 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-medium">Team Members</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Meet Our Exceptional Team
          </h2>
          <p className="max-w-3xl mx-auto text-white text-lg">
            Get to know the talented individuals who make up our dedicated team
            at capZ. Our experts bring a diverse range of skills and
            experiences to the table, allowing us to provide innovative
            solutions and exceptional service to our clients. Learn more about
            the professionals who drive our success and your project's
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
