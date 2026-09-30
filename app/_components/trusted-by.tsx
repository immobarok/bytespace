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
    <section className="w-full bg-neutral-50 py-[80px] px-[154px] flex items-center justify-center">
      <div className="w-full max-w-[1200px] flex items-center justify-between gap-8 flex-wrap">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="relative w10 h-10 flex-shrink-0" style={{ width: '40px', height: '40px' }}>
              <Image src={logo} alt="Logoipsum icon" fill className="object-contain" />
            </div>
            <span className="text-[22px] font-bold text-neutral-400 tracking-tight font-sans">
              Logoipsum
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
