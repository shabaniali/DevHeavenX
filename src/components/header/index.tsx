import Image from "next/image";

export default function Header() {
  return (
    <header className="p-6 flex justify-between border-b-[1px]">
      <Image
        src="/images/linkedin.svg"
        alt="linkedin"
        width={48}
        height={48}
        priority
      />
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={201}
        height={21}
        priority
      />
      <div className="w-[48px] h-[48px]"></div>
    </header>
  );
}
