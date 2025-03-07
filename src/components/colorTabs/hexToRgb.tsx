"use client";

import { Button } from "../ui/button";

export default function HexToRgb() {
  return (
    <>
      <div className="border rounded-t-[8px] p-6">
        <h2>HEX to RGB Color Converter</h2>
        <div>
          <h3 className="text-[15px] mt-4">Type color code</h3>
          <div className="mt-2 flex">
            <input
              defaultValue={"005fcc"}
              className="h-12 px-2 rounded-[8px] flex-1 mr-6 border"
            />
            <Button className="h-12 font-light mr-4 px-6 rounded-[8px] hover:bg-white hover:text-primary hover:border-primary border shadow-none">
              Convert
            </Button>
            <Button className="h-12 rounded-[8px] bg-muted shadow-none hover:bg-muted text-black px-5">
              Reset
            </Button>
          </div>
        </div>
      </div>
      <div className="border border-t-0 rounded-b-[8px] p-6">
        <div className="flex gap-6 justify-between">
          <div className="flex flex-col w-full">
            <span className="flex items-center mb-1">
              <div className="w-[10px] h-[10px] rounded-[3px] mr-1.5 bg-[#ff0000]" />{" "}
              Red
            </span>
            <div className="bg-muted w-full h-12 flex items-center px-4 rounded-[8px]">
              71
            </div>
          </div>
          <div className="flex flex-col w-full">
            <span className="flex items-center mb-1">
              <div className="w-[10px] h-[10px] rounded-[3px] mr-1.5 bg-[#008000]" />{" "}
              Green
            </span>
            <div className="bg-muted w-full h-12 flex items-center px-4 rounded-[8px]">
              71
            </div>
          </div>
          <div className="flex flex-col w-full">
            <span className="flex items-center mb-1">
              <div className="w-[10px] h-[10px] rounded-[3px] mr-1.5 bg-[#0000ff]" />{" "}
              Blue
            </span>
            <div className="bg-muted w-full h-12 flex items-center px-4 rounded-[8px]">
              71
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-6">
          <span className="flex items-center mb-1">Css color</span>
          <div className="bg-muted w-full h-12 flex items-center px-4 rounded-[8px]">
            rgb(71 71 71)
          </div>
        </div>
        <div className="flex flex-col w-full mt-6">
          <span className="flex items-center mb-1">Color preview</span>
          <div className="bg-[#005fcc] w-full h-[135px] flex items-center px-4 rounded-[8px]" />
        </div>
      </div>
    </>
  );
}
