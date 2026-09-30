import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="bg-white rounded-[32px] p-8 md:p-12 w-full max-w-[520px] shadow-2xl">
      <span className="text-[#003be2] text-body-s font-medium block mb-2">Welcome Back</span>
      <h2 className="text-heading-l lg:text-heading-xl text-neutral-950 font-bold mb-10 leading-[1.2]">
        Login to ByteSpace
      </h2>

      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-label-m text-neutral-700">Email</label>
          <input 
            type="email" 
            placeholder="designer@example.com" 
            className="w-full h-[56px] rounded-[16px] border border-neutral-200 px-5 text-body-m text-neutral-950 placeholder:text-neutral-400 outline-none focus:border-[#003be2] transition-colors" 
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-label-m text-neutral-700">Password</label>
          <input 
            type="password" 
            placeholder="********" 
            className="w-full h-[56px] rounded-[16px] border border-neutral-200 px-5 text-body-m text-neutral-950 placeholder:text-neutral-400 outline-none focus:border-[#003be2] transition-colors" 
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <Link href="#" className="text-body-s text-neutral-500 hover:text-[#003be2] transition-colors">
            Forgot password?
          </Link>
          <button type="button" className="bg-lime-400 text-neutral-950 font-medium px-8 py-3.5 rounded-[100px] hover:bg-lime-500 transition-colors">
            Login
          </button>
        </div>
      </form>

      <div className="mt-14 text-center text-body-m text-neutral-600">
        Don't have an account? <Link href="/register" className="text-[#003be2] hover:underline">Sign up</Link>
      </div>
    </div>
  );
}
