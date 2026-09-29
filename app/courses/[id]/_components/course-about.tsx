import Image from "next/image";

export default function CourseAbout() {
  const keyPoints = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio"
  ];

  return (
    <div className="flex flex-col gap-10 pb-20 pt-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-heading-xs text-neutral-950 font-bold">Description</h2>
        <div className="text-body-m text-neutral-600 leading-[1.6] space-y-6">
          <p>
            Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
          </p>
          <p>
            In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
          </p>
          <p>
            As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
          </p>
        </div>
      </div>

      {/* Sneak Peak Section */}
      <div className="flex flex-col gap-6">
        <h2 className="text-heading-xs text-neutral-950 font-bold">Sneak Peak</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Rectangle.png', 'Rectangle (1).png', 'Rectangle (2).png', 'Rectangle (3).png'].map((filename, i) => (
            <div key={i} className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-neutral-100 border border-neutral-200 shadow-sm">
              <Image src={`/images/products/${filename}`} alt={`Sneak Peak ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-heading-xs text-neutral-950 font-bold">Key Points</h2>
        <ul className="flex flex-col gap-3">
          {keyPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-electric-violet-800 flex items-center justify-center shrink-0">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-body-m text-neutral-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
