"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const pxList = [
  1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 24, 25, 28, 32, 36, 40, 44,
  48, 50, 56, 64, 72, 75, 80, 90, 100,
];
const percentagesList = [1, 3, 5, 8, 10, 15, 20, 30, 40, 50, 80, 100, 150, 200];

export default function Percentages() {
  const [extendView, setExtendView] = useState(false);

  const generatePercentage = (px: number, base: number) => {
    return +((px / base) * 100).toFixed(3);
  };

  const generatePx = (percent: number, base: number) => {
    return +((percent / 100) * base).toFixed(3);
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
            Percentages
          </div>
          <div className="flex justify-between">
            <div className="flex items-end">
              <p className="text-3xl font-bold">6.25</p>
              <span className="text-sm font-extralight ml-1 mt-[-4px]">
                percentages
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
        <h3 className="text-base font-normal">
          PX︎ - Percentages conversion tables
        </h3>
        <div className="flex gap-6 mt-4">
          <div className="flex-1">
            <div className="flex justify-between mb-2 px-2">
              <span className="text-sm font-bold">PX</span>
              <span className="text-sm font-bold">%</span>
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
                    {generatePercentage(item, 16)} %
                  </span>
                </div>
              ))}
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-2 px-2">
              <span className="text-sm font-bold">%</span>
              <span className="text-sm font-bold">PX</span>
            </div>
            {percentagesList.map((item, index) => (
              <div
                key={item}
                className={`flex items-center justify-between h-11 px-2 ${
                  index % 2 === 0 && "bg-[#f5f5f5]"
                }`}
              >
                <span className="text-sm font-normal">{item} %</span>
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
        <h3>Convert Pixels to Percentages</h3>
        <hr className="my-5" />
        <div className="text-sm text-justify leading-[25.83px]">
          <p>
            This calculator converts pixels to percentages. The conversion is
            based on the default font-size of 16 pixel, but can be changed.
          </p>
          <br />
          <p>
            The conversion works of course in both directions, just change the
            opposite input field.
          </p>
        </div>
      </div>
    </>
  );
}
