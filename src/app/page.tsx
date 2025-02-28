import DisabledFeaturesCard from "@/components/disabledFeaturesCard";
import FeaturesCard from "@/components/featuresCard";
import HomeBanner from "@/components/homeBanner";

export default function Home() {
  return (
    <div className="mt-14">
      <div className="flex gap-6">
        <FeaturesCard
          imageSrc="/images/PXtoEM.svg"
          title="Pixel to EM"
          badges={["PX to REM", "PX to Percentages"]}
        />
        <FeaturesCard
          imageSrc="/images/HEXtoRGB.svg"
          title="HEX to RGB"
          badges={["RGB to HEX"]}
        />
        <DisabledFeaturesCard />
      </div>
      <hr className="w-full my-[52px]" />
      <HomeBanner />
    </div>
  );
}
