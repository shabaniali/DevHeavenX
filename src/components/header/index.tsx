"use client";

import { usePathname, useRouter } from "next/navigation";
import { House } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="p-6 z-50 sticky top-0 bg-white flex items-center justify-between border-b-[1px]">
      <Image
        src="/images/linkedin.svg"
        onClick={() => {
          window.open("https://www.linkedin.com/in/arian-rezakhani/", "_blank");
        }}
        alt="linkedin"
        width={1}
        height={1}
        priority
        className="cursor-pointer w-[44px] h-[44px] sm:w-[48px] sm:h-[48px]"
      />
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={1}
        height={1}
        priority
        className="w-[173px] h-[18px] sm:w-[201px] sm:h-[21px]"
      />
      <div className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px]">
        {pathname !== "/" && (
          <div
            onClick={() => router.push("/")}
            className="border border-primary w-full h-full cursor-pointer flex items-center transition duration-150 rounded-lg group hover:bg-primary"
          >
            <House
              className="w-full group-hover:text-white transition duration-150"
              strokeWidth={1.3}
            />
          </div>
        )}
      </div>
    </header>
  );
}
