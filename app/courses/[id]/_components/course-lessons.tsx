import Image from "next/image";

const modules = [
  {
    title: "Module 1: Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: "Module 4: User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 5: Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    title: "Module 6: Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

export default function CourseLessons() {
  return (
    <div className="flex flex-col gap-10 pb-20 pt-8">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <h2 className="text-heading-xs text-neutral-950 font-bold">Explore the Modules</h2>
        <p className="text-body-m text-neutral-700 leading-[1.6]">
          Immerse yourself in the course content as we break down each module into comprehensive
          lessons, providing practical insights and hands-on experiences.
        </p>
      </div>

      {/* Lesson List */}
      <div className="flex flex-col gap-4">
        <h3 className="text-heading-xs text-neutral-950 font-bold">Lesson List</h3>
        <div className="flex flex-col gap-6">
          {modules.map((mod, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-[56px] h-[56px] rounded-[16px] bg-lime-400 flex items-center justify-center shrink-0">
                <Image src="/images/icons/webcam.svg" alt="Video" width={28} height={28} />
              </div>
              {/* Text */}
              <div className="flex flex-col gap-1">
                <p className="text-label-m text-neutral-950 font-bold">{mod.title}</p>
                <p className="text-body-m text-neutral-700 leading-[1.6]">{mod.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lesson Content */}
      <div className="flex flex-col gap-3">
        <h3 className="text-heading-xs text-neutral-950 font-bold">Lesson Content</h3>
        <p className="text-body-m text-neutral-700 leading-[1.6]">
          Engage with each lesson through captivating video content, detailed textual explanations,
          and interactive elements. Download resources, complete assignments, and test your
          understanding with quizzes.
        </p>
      </div>

      {/* Lesson Progress Tracking */}
      <div className="flex flex-col gap-4">
        <h3 className="text-heading-xs text-neutral-950 font-bold">Lesson Progress Tracking</h3>
        <p className="text-body-m text-neutral-700 leading-[1.6]">
          Witness your growth as you complete lessons, with an intuitive progress tracking feature
          guiding you through your learning journey.
        </p>

        {/* Progress Card */}
        <div className="w-full border border-neutral-200 rounded-[20px] p-6 flex flex-col gap-4 shadow-sm">
          <p className="text-label-m text-neutral-500">Learning Progress</p>
          <p className="text-heading-s text-neutral-950">55%</p>
          {/* Progress Bar */}
          <div className="w-full h-[8px] bg-neutral-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-lime-400 rounded-full transition-all duration-700"
              style={{ width: "55%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
