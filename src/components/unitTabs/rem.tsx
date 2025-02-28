"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const pxList = [
  1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 25, 28, 32, 36, 40, 44, 48,
  50, 56, 64, 72, 80, 90, 100,
];
const remList = [
  0.01, 0.03, 0.05, 0.08, 0.1, 0.15, 0.2, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 15, 20,
  30, 40, 50, 60, 80, 100,
];

export default function Rem() {
  const [extendView, setExtendView] = useState(false);

  const generateRem = (px: number, basis: number) => {
    return +(px / basis).toFixed(3);
  };

  const generatePx = (px: number, basis: number) => {
    return +(px * basis).toFixed(3);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-[352px] h-[162] flex flex-col justify-between bg-primary rounded-2xl text-white p-6">
          <div className="font-light border-b border-[#FFFFFF33] pb-5 text-base">
            Pixels
          </div>
          <div className="flex justify-between">
            <div className="flex items-end">
              <p className="text-3xl font-bold">1</p>
              <span className="text-sm font-extralight ml-1 mt-[-4px]">px</span>
            </div>
            <Image
              src="/images/copy.svg"
              alt="copy"
              width={24}
              height={24}
              priority
              className="cursor-pointer"
            />
          </div>
        </div>
        <Image
          src="/images/arrow-2.svg"
          alt="arrow"
          width={36}
          height={36}
          priority
          className="cursor-pointer"
        />
        <div className="w-[352px] h-[162] flex flex-col justify-between bg-primary rounded-2xl text-white p-6">
          <div className="font-light border-b border-[#FFFFFF33] pb-5 text-base">
            REM
          </div>
          <div className="flex justify-between">
            <div className="flex items-end">
              <p className="text-3xl font-bold">0.063</p>
              <span className="text-sm font-extralight ml-1 mt-[-4px]">
                rem
              </span>
            </div>
            <Image
              src="/images/copy.svg"
              alt="copy"
              width={24}
              height={24}
              priority
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-10 mb-14 text-sm font-normal">
        Calculation based on a font size of{" "}
        <span className="mx-1 pt-2 pb-[6px] pl-2 pr-[10px] border rounded-[4px]">
          16
        </span>{" "}
        Pixels
      </div>
      <div className="border p-6 gap-6 rounded-[8px]">
        <h3 className="text-base font-normal">PX︎ - REM conversion tables</h3>
        <div className="flex gap-6 mt-4">
          <div className="flex-1">
            <div className="flex justify-between mb-2 px-2">
              <span className="text-sm font-bold">PX</span>
              <span className="text-sm font-bold">REM</span>
            </div>
            {pxList
              .filter((item) => extendView || item <= 16)
              .map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center justify-between h-11 px-2 ${
                    index % 2 === 0 && "bg-[#f5f5f5]"
                  }`}
                >
                  <span className="text-sm font-normal">{item} px</span>
                  <span className="text-sm font-normal">
                    {generateRem(item, 16)} rem
                  </span>
                </div>
              ))}
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-2 px-2">
              <span className="text-sm font-bold">REM</span>
              <span className="text-sm font-bold">PX</span>
            </div>
            {remList
              .filter((item) => extendView || item <= 1)
              .map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center justify-between h-11 px-2 ${
                    index % 2 === 0 && "bg-[#f5f5f5]"
                  }`}
                >
                  <span className="text-sm font-normal">{item} rem</span>
                  <span className="text-sm font-normal">
                    {generatePx(item, 16)} px
                  </span>
                </div>
              ))}
          </div>
        </div>
        <Button
          onClick={() => {
            setExtendView((prev) => !prev);
          }}
          className="w-full h-12 mt-6 bg-[#BDD6F2] text-primary hover:text-white font-normal"
        >
          {extendView ? "Less" : "More"}
        </Button>
      </div>
      <div className="border p-6 gap-6 my-14 rounded-[8px]">
        <h3>Convert Pixels to REM</h3>
        <hr className="my-5" />
        <div className="text-sm text-justify leading-[25.83px]">
          <p>
            This calculator converts pixels to the CSS unit REM. The conversion
            is based on the default font-size of 16 pixel, but can be changed.
          </p>
          <br />
          <p>
            With the CSS rem unit you can define a size relative to the
            font-size of the HTML root tag.
          </p>
          <br />
          <p>An example</p>
          <p>
            So if we take the default size as an example, than 1px represents
            0.0625rem and, in the other direction, 1rem represents 16px.
          </p>
          <br />
          <p>EM vs. REM: The differences</p>
          <p>
            Inside a sinlge document, the length of a REM unit is everywhere the
            same, it can just differ between documents. EM on the other side can
            differ between every element, because it is relative to the elements
            own font-size (excpetion is the font-size itself, in it EM is
            relative to the parent).
          </p>
          <br />
          <p>REM is the newer unit, older browsers don't support it.</p>
        </div>
      </div>
    </>
  );
}
