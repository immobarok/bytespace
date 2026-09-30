import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="bg-white rounded-[32px] p-8 md:p-[61px] w-full max-w-[580px] shadow-2xl">
      <span className="text-electric-violet-800 text-body-l block mb-2">Create an Account</span>
      <h2 className="text-heading-s lg:text-heading-m text-neutral-950 mb-10">
        Welcome to <br></br> ByteSpace
      </h2>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-label-s text-neutral-950">Full Name</label>
          <input 
            type="text" 
            placeholder="Jamie Davis" 
            className="w-full rounded-[12px] border border-neutral-100 px-6 py-3 text-body-m text-neutral-950 placeholder:text-neutral-400 outline-none focus:border-[#003be2] transition-colors" 
          />
        </div>
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
            Continue
          </button>
        </div>
      </form>

      <div className="mt-[122px] text-center text-body-m text-neutral-700">
        Already have an account? <Link href="/login" className="text-electric-violet-800 hover:underline">Login</Link>
      </div>
    </div>
  );
}
