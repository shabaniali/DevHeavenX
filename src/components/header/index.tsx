"use client";

import { usePathname, useRouter } from "next/navigation";
import { House } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="p-6 flex justify-between border-b-[1px]">
      <Image
        src="/images/linkedin.svg"
        alt="linkedin"
        width={48}
        height={48}
        priority
        className="cursor-pointer"
      />
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={201}
        height={21}
        priority
      />
      <div className="w-[48px] h-[48px]">
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
