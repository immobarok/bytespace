"use client";

import { usePathname } from "next/navigation";

export default function AuthText() {
  const pathname = usePathname();
  const isLogin = pathname === "/login";

  return (
    <div className="max-w-[475px] mb-[58px]">
      <h1 className="text-heading-xs text-neutral-50 mb-4">
        {isLogin ? "Sign in with ease" : "Sign up and come in"}
      </h1>
      <p className="text-body-l text-neutral-50">
        {isLogin 
          ? "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
          : "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
        }
      </p>
    </div>
  );
}
