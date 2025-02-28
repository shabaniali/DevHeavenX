import DisabledFeaturesCard from "@/components/disabledFeaturesCard";
import FeaturesCard from "@/components/featuresCard";
import HomeBanner from "@/components/homeBanner";

export default function Home() {
  return (
    <>
      <div className="flex gap-6">
        <FeaturesCard
          imageSrc="/images/PXtoEM.svg"
          title="Pixel to EM"
          badges={["PX to REM", "PX to Percentages"]}
          url="unit-converter"
        />
        <FeaturesCard
          imageSrc="/images/HEXtoRGB.svg"
          title="HEX to RGB"
          badges={["RGB to HEX"]}
          url="color-converter"
        />
        <DisabledFeaturesCard />
      </div>
      <hr className="w-full my-[52px]" />
      <HomeBanner />
    </>
  );
}
