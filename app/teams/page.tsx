import TeamMemberCard from "@/components/TeamMemberCard";
import { teamMembers } from "@/src/data/data";

const TeamSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-750 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* <span className="text-[#FE9B15] font-medium text-center">Team Members</span> */}
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-black dark:text-white">
            Meet Our Exceptional Team
          </h2>
          <p className="max-w-3xl mx-auto text-black text-xl dark:text-white">
            Meet the brilliant team at capZ where diverse expertise meets innovative solutions. Our dedicated professionals ensure your project’s success with excellence and creativity.
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
