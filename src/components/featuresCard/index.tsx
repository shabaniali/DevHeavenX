import Image from "next/image";

interface Props {
  imageSrc: string;
  title: string;
  badges: string[];
}

export default function FeaturesCard(props: Props) {
  return (
    <div className="border hover:border-primary transition duration-150 p-4 rounded-lg cursor-pointer w-[257px]">
      <Image
        src={props.imageSrc}
        alt="Feature Image"
        width={225}
        height={158}
        priority
      />
      <h2 className="text-[17px] font-bold mt-5">{props.title}</h2>
      <div className="flex gap-[10px] mt-10">
        {props.badges.map((item, index) => {
          return (
            <div
              key={index}
              className="font-normal text-[12px] p-[7px] rounded-[100px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)]"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
