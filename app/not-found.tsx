import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center w-full relative pt-[40px] min-h-[957px]">
      <div
        className="absolute top-0 left-0 w-full h-[957px] bg-electric-violet-800 z-0 overflow-hidden"
      >
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 957"
        >
          {Array.from({ length: 13 }).map((_, i) => {
            const x = Math.round(((i + 1) / 14) * 1440);
            return <line key={`v-${i}`} x1={x} y1={0} x2={x} y2={957} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />;
          })}
          {Array.from({ length: 9 }).map((_, i) => {
            const y = Math.round(((i + 1) / 9) * 957);
            return <line key={`h-${i}`} x1={0} y1={y} x2={1440} y2={y} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />;
          })}
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <div
          className="text-[480px] max-lg:text-[250px] max-md:text-[150px] font-semibold leading-none pointer-events-none select-none relative z-0 flex items-center justify-center"
          style={{
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.01em',
            background: "linear-gradient(180deg, rgba(212,251,32,1) 0%, rgba(212,251,32,0.96) 25%, rgba(212,251,32,0.81) 50%, rgba(212,251,32,0.61) 68%, rgba(255,255,255,0) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </div>

        <div className="absolute top-[330px] max-lg:top-[200px] max-md:top-[120px] flex flex-col items-center text-center z-10 w-full px-4 lg:px-0">
          <h1 className="text-heading-l max-lg:text-heading-m max-md:text-heading-s text-[#ffffff] max-w-[1000px]">
            The page you are looking<br className="hidden md:block" />for doesn’t exist
          </h1>
          <p className="text-body-l max-lg:text-body-m max-md:text-body-s text-neutral-100 my-8 mb-10 max-lg:my-6 max-md:my-4">
            Try to use a correct url or go back to homepage to start again
          </p>
          <Link
            href="/"
            className="bg-lime-400 text-neutral-950 px-6 py-3 rounded-[24px] text-body-m font-semibold hover:bg-lime-400 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
