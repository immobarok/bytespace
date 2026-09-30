import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
      image: "/images/avatars/testimonial_1.png",
    },
    {
      name: "James L.",
      role: "Lifelong Learner",
      text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
      image: "/images/avatars/testimonial_2.png",
    },
    {
      name: "Alex B.",
      role: "Inspired Creator",
      text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
      image: "/images/avatars/testimonial_3.png",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-[120px] bg-[#FAFAFA]">
      {/* Background Gradients */}
      {/* Bottom Left Violet (1137x1137) */}
      <div 
        className="absolute bottom-0 left-0 -translate-x-[60%] translate-y-1/4 z-0 pointer-events-none rounded-full"
        style={{ width: '1137px', height: '1137px', background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 62, 178, 0.3) 0%, rgba(0, 62, 178, 0.1) 50%, transparent 100%)' }}
      />
      
      {/* Top Right Lime (1137x1137) */}
      <div 
        className="absolute top-0 right-0 translate-x-[60%] -translate-y-1/4 z-0 pointer-events-none rounded-full"
        style={{ width: '1137px', height: '1137px', background: 'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.3) 50%, transparent 100%)' }}
      />
      
      {/* Center Top Lime (672x672) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 z-0 pointer-events-none rounded-full"
        style={{ width: '672px', height: '672px', background: 'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.7) 0%, rgba(203, 252, 1, 0.35) 50%, transparent 100%)' }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 xl:px-0 flex flex-col gap-16">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <h2 className="text-heading-m text-neutral-950 font-bold leading-[1.2]">
              Discover What Our<br />Community Is Saying
            </h2>
          </div>
          <div>
            <p className="text-body-l text-neutral-600 leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[24px] p-6 shadow-sm border border-neutral-100 flex flex-col"
            >
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden mb-6 relative">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <h3 className="text-heading-xs font-bold text-neutral-950 mb-1">
                {testimonial.name}
              </h3>
              <p className="text-body-l text-electric-violet-800 font-medium mb-6">
                {testimonial.role}
              </p>
              <p className="text-body-l text-neutral-700 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
