import Image from "next/image";
import Link from "next/link";

const paths = [
  {
    name: "Design",
    icon: "/images/icons/design.svg"
  },
  {
    name: "Development",
    icon: "/images/icons/development.svg"
  },
  {
    name: "IT & Software",
    icon: "/images/icons/it.svg"
  },
  {
    name: "Business",
    icon: "/images/icons/business.svg"
  },
  {
    name: "Marketing",
    icon: "/images/icons/marketing.svg"
  },
  {
    name: "Photography",
    icon: "/images/icons/photography.svg"
  }
];

export default function LearningPaths() {
  return (
    <section className="w-full bg-white flex flex-col items-center pb-[120px]">
      <div className="w-full flex flex-col items-center px-4">
        
        {/* Header Area */}
        <div className="text-center max-w-[860px] mb-12">
          <h2 className="text-heading-m text-neutral-950 font-bold mb-4 leading-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-body-l text-neutral-400">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-10 w-full">
          {paths.map((path, index) => (
            <Link 
              href="#" 
              key={index}
              className="flex flex-col items-center justify-center w-[167px] h-[167px] bg-white border border-neutral-200 rounded-[20px] hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="bg-lime-400 rounded-full flex items-center justify-center mb-4 p-3">
                <div className="relative w-9 h-9 ">
                  <Image 
                    src={path.icon} 
                    alt={path.name} 
                    fill 
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="text-body-m font-medium text-neutral-900">
                {path.name}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
