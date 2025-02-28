import Image from "next/image";

export default function DisabledFeaturesCard() {
  return (
    <div className="p-4 rounded-lg bg-[rgba(243,243,243,1)] flex justify-center items-center w-[257px]">
      <Image
        src={"/images/comingSoon.svg"}
        alt="Feature Image"
        width={197}
        height={88}
        priority
      />
    </div>
  );
}
