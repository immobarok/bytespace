import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="bg-white rounded-[32px] p-8 md:p-[61px] w-full max-w-[580px] shadow-2xl">
      <span className="text-electric-violet-800 text-body-l block mb-2">Sign In</span>
      <h2 className="text-heading-s lg:text-heading-m text-neutral-950 mb-10">
        Welcome Back
      </h2>

      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-label-s text-neutral-950">Email</label>
          <input 
            type="email" 
            placeholder="designer@example.com" 
            className="w-full rounded-[12px] border border-neutral-100 px-6 py-3 text-body-m text-neutral-950 placeholder:text-neutral-400 outline-none focus:border-[#003be2] transition-colors" 
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-label-s text-neutral-950">Password</label>
          <input 
            type="password" 
            placeholder="********" 
            className="w-full rounded-[12px] border border-neutral-100 px-6 py-3 text-body-m text-neutral-950 placeholder:text-neutral-400 outline-none focus:border-[#003be2] transition-colors" 
          />
        </div>

        <div className="flex justify-end mt-6">
          <button type="button" className="bg-lime-400 text-neutral-950 font-medium px-6 py-3 rounded-[24px] hover:bg-lime-500 transition-colors">
            Sign In
          </button>
        </div>
      </form>

      <div className="flex items-center gap-4 my-10">
        <div className="flex-1 h-px bg-neutral-200"></div>
        <span className="text-body-m text-neutral-400">or</span>
        <div className="flex-1 h-px bg-neutral-200"></div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button className="w-[60px] h-[60px] rounded-[24px] border border-neutral-100 flex items-center justify-center hover:bg-neutral-50 transition-colors">
          <Image src="/images/icons/facebook.svg" alt="Facebook" width={24} height={24} className="object-contain" />
        </button>
        <button className="w-[60px] h-[60px] rounded-[24px] border border-neutral-100 flex items-center justify-center hover:bg-neutral-50 transition-colors">
          <Image src="/images/icons/google.svg" alt="Google" width={24} height={24} className="object-contain" />
        </button>
      </div>

      <div className="mt-12 text-center text-body-m text-neutral-700">
        New user? <Link href="/register" className="text-electric-violet-800 hover:underline">Create an account</Link>
      </div>
    </div>
  );
}
