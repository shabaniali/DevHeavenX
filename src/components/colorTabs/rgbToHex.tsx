"use client";
import { NumericFormat } from "react-number-format";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";

export default function RgbToHex() {
  return (
    <>
      <div className="border rounded-t-[8px] p-6">
        <h2>RGB to HEX Color Converter</h2>
        <span className="flex items-center mb-1 mt-6">
          <div className="w-[10px] h-[10px] rounded-[3px] mr-1.5 bg-[#ff0000]" />{" "}
          Type color red
        </span>
        <div className="w-full flex items-center">
          <NumericFormat
            className="border h-12 w-[187px] rounded-[8px] mr-6"
            allowNegative={false}
          />
          <Slider
            rangeClassName="bg-[#FF6666]"
            defaultValue={[255]}
            max={255}
            step={1}
          />
        </div>
        <span className="flex items-center mb-1 mt-6">
          <div className="w-[10px] h-[10px] rounded-[3px] mr-1.5 bg-[#008000]" />{" "}
          Type color green
        </span>
        <div className="w-full flex items-center">
          <NumericFormat
            className="border h-12 w-[187px] rounded-[8px] mr-6"
            allowNegative={false}
          />
          <Slider
            rangeClassName="bg-[#39A339]"
            defaultValue={[255]}
            max={255}
            step={1}
            onValueChange={(e) => {
              console.log(e);
            }}
          />
        </div>
        <span className="flex items-center mb-1 mt-6">
          <div className="w-[10px] h-[10px] rounded-[3px] mr-1.5 bg-[#0000ff]" />{" "}
          Type color blue
        </span>
        <div className="w-full flex items-center">
          <NumericFormat
            className="border h-12 w-[187px] rounded-[8px] mr-6"
            allowNegative={false}
          />
          <Slider
            rangeClassName="bg-[#719EFF]"
            defaultValue={[255]}
            max={255}
            step={1}
          />
        </div>
        <div className="flex flex-col w-full mt-6">
          <span className="flex items-center mb-1">Color preview</span>
          <div className="w-full h-[135px] flex items-center px-4 rounded-[8px] border border-[#ECECEC]" />
        </div>
        <div className="flex gap-6 mt-6">
          <Button className="h-12 font-light w-full rounded-[8px] hover:bg-white hover:text-primary hover:border-primary hover:border shadow-none">
            Convert
          </Button>
          <Button className="h-12 rounded-[8px] w-full bg-muted shadow-none hover:bg-muted text-black">
            Reset
          </Button>
        </div>
      </div>
      <div className="border border-t-0 rounded-b-[8px] p-6">
        <span className="flex items-center mb-1">Hex color</span>
        <div className="bg-muted w-full h-12 flex items-center px-4 rounded-[8px]">
          #ffffff
        </div>
        <span className="flex items-center mb-1 mt-6">RGB color</span>
        <div className="bg-muted w-full h-12 flex items-center px-4 rounded-[8px]">
          rgb(255, 255, 255)
        </div>
      </div>
    </>
  );
}
