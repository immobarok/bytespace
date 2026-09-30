import Image from "next/image";

export default function TrustedBy() {
  const logos = [
    "/images/icons/Vector.svg",
    "/images/icons/logoipsum-sun.svg",
    "/images/icons/Vector (1).svg",
    "/images/icons/Vector (2).svg",
    "/images/icons/Vector (3).svg",
  ];

  return (
    <section className="w-full bg-neutral-50 py-8 lg:py-[80px] px-0 lg:px-[154px] flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

      {/* Desktop View (Static) */}
      <div className="hidden lg:flex w-full max-w-[1200px] items-center justify-between gap-8 flex-wrap opacity-70 px-4 xl:px-0">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="relative flex-shrink-0" style={{ width: '40px', height: '40px' }}>
              <Image src={logo} alt="Logoipsum icon" fill className="object-contain" />
            </div>
            <span className="text-[22px] font-bold text-neutral-400 tracking-tight font-sans">
              Logoipsum
            </span>
          </div>
        ))}
      </div>

      {/* Mobile View (Marquee) */}
      <div className="flex lg:hidden w-full overflow-hidden opacity-70">
        <div className="flex w-max animate-marquee gap-8 pr-8">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center gap-2 shrink-0">
              <div className="relative shrink-0" style={{ width: '32px', height: '32px' }}>
                <Image src={logo} alt="Logoipsum icon" fill className="object-contain" />
              </div>
              <span className="text-[18px] font-bold text-neutral-400 tracking-tight font-sans">
                Logoipsum
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
