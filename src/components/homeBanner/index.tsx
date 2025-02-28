import Image from "next/image";

export default function HomeBanner() {
  return (
    <div className="flex justify-between items-center bg-gradient-to-l from-[#005FCC] to-[#003066] h-[208px] w-full rounded-2xl px-12">
      <div>
        <h3 className="text-white text-2xl font-medium">Arian Rezakhani</h3>
        <p className="text-white text-[15px] font-extralight mt-2">
          You can connect with me on LinkedIn
        </p>
        <div className="bg-white mt-7 select-none cursor-pointer w-max flex items-center py-[10px] px-4 rounded-[100px]">
          <p className="mr-2 font-bold text-[15px]">contact me</p>
          <Image
            src="/images/arrow-right.svg"
            alt="arrow-right"
            width={24}
            height={24}
            priority
          />
        </div>
      </div>
      <Image
        src="/images/human.svg"
        alt="human"
        width={208}
        height={208}
        priority
        className="text-primary"
      />
    </div>
  );
}
