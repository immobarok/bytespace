import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center w-full relative pt-[40px] min-h-[957px]">
      <div
        className="fixed top-0 left-0 w-full h-[957px] bg-electric-violet-600 -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: `120px 120px`,
          backgroundPosition: 'center top'
        }}
      />

      <div className="relative flex flex-col items-center w-full">
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
            className="bg-crimson-400 text-neutral-950 px-6 py-3 rounded-[24px] text-body-m font-semibold hover:bg-crimson-400 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
