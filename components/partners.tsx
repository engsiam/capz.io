import { partnersData } from "@/src/data/data";
import Image from "next/image";

interface Partner {
  id: number;
  src: string;
  alt: string;
  partner: string;
}

const PartnersGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
      {partnersData.map((partner) => (
        <div
          key={partner.id}
          className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        >
          <Image
            src={partner.src}
            alt={partner.alt}
            width={200}
            height={40}
            className="max-h-20 w-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default PartnersGrid;
