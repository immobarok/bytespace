import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative w-full h-[488px] overflow-hidden bg-[#003be2] flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
      />

      {/* Top Left Lime Spring */}
      <div className="absolute -top-[40px] -left-[40px] w-[200px] h-[200px] z-0 pointer-events-none hidden md:block">
        <Image src="/images/shape/spring_top_left.svg" alt="shape" fill className="object-contain" />
      </div>

      {/* Top Left White Spring */}
      <div className="absolute top-[20px] left-[15%] w-[175px] h-[175px] z-0 pointer-events-none hidden md:block">
        <Image src="/images/shape/hero_small_spring_white.svg" alt="shape" fill className="object-contain" />
      </div>

      {/* Bottom Left White Cone */}
      <div className="absolute bottom-[20px] -left-[20px] w-[180px] h-[180px] z-0 pointer-events-none hidden md:block">
        <Image src="/images/shape/triangle_white.svg" alt="shape" fill className="object-contain" />
      </div>

      {/* Bottom Mid-Left Lime Ring */}
      <div className="absolute -bottom-[80px] left-[10%] w-[300px] h-[300px] z-0 pointer-events-none hidden md:block">
        <Image src="/images/shape/circle_lime_bottom_left.svg" alt="shape" fill className="object-contain" />
      </div>

      {/* Top Right Lime Pyramid */}
      <div className="absolute top-[40px] right-[10%] w-[180px] h-[180px] z-0 pointer-events-none hidden md:block">
        <Image src="/images/shape/triangle.svg" alt="shape" fill className="object-contain" />
      </div>

      {/* Mid Right White Pill/Cone */}
      <div className="absolute top-[10%] -right-[40px] w-[250px] h-[300px] z-0 pointer-events-none hidden md:block">
        <Image src="/images/shape/right_shape_white.svg" alt="shape" fill className="object-contain" />
      </div>

      {/* Bottom Right Lime Spring */}
      <div className="absolute -bottom-[60px] right-[5%] w-[250px] h-[250px] z-0 pointer-events-none hidden md:block">
        <Image src="/images/shape/spring_bottom_right_1.svg" alt="shape" fill className="object-contain" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[900px] mx-auto px-4 xl:px-0 flex flex-col items-center text-center">
        <h2 className="text-neutral-50 text-heading-s lg:text-heading-m mb-6">
          Unlock Your Potential as a<br className="hidden lg:block" /> Creator with ByteSpace
        </h2>
        
        <p className="text-neutral-50 text-body-m lg:text-body-l mb-10 max-w-[800px]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <Link 
          href="#" 
          className="inline-flex items-center justify-center bg-[#CBFC01] hover:bg-[#b5e300] transition-colors text-neutral-950 font-semibold px-6 py-3 rounded-[24px] text-label-l"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
