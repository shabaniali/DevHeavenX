"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { NumericFormat } from "react-number-format";
import { toast } from "react-toastify";

const pxList = [
  1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 24, 25, 28, 32, 36, 40, 44,
  48, 50, 56, 64, 72, 78, 80, 90, 100,
];
const emList = [
  0.01, 0.03, 0.05, 0.08, 0.1, 0.15, 0.2, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 15, 20,
  30, 40, 50, 60, 80, 100,
];

export default function Em() {
  const [extendView, setExtendView] = useState(false);
  const [base, setBase] = useState(16);
  const [inputUnit, setInputUnit] = useState({
    label: "Pixels",
    value: 1,
  });

  const [outputUnit, setOutputUnit] = useState({
    label: "EM",
    value: 0,
  });

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied!");
  };

  const generateEm = (px: number) => {
    return +(px / base).toFixed(3);
  };

  const generatePx = (em: number) => {
    return +(em * base).toFixed(3);
  };

  const generateOutput = () => {
    if (inputUnit.label === "Pixels") {
      setOutputUnit({ ...outputUnit, value: generateEm(inputUnit.value) });
    } else if (inputUnit.label === "EM") {
      setOutputUnit({ ...outputUnit, value: generatePx(inputUnit.value) });
    }
  };

  const switchUints = () => {
    const temp = { ...inputUnit };
    // setInputUnit({ value: 0, label: outputUnit.label });
    setInputUnit(outputUnit);
    setOutputUnit(temp);
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    generateOutput();
  }, [base, inputUnit]);

  return (
    <>
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-center">
        <div className="w-[352px] h-[162px] flex flex-col justify-between bg-primary rounded-2xl text-white p-6">
          <div className="font-normal border-b border-[#FFFFFF33] pb-5 text-base">
            {inputUnit.label}
          </div>
          <div className="flex justify-between">
            <div className="flex items-end">
              <NumericFormat
                className="text-3xl font-bold border-none bg-primary w-full outline-none focus:outline-none"
                allowNegative={false}
                value={inputUnit.value}
                onChange={(e) =>
                  setInputUnit({ ...inputUnit, value: Number(e.target.value) })
                }
              />
            </div>
            <Image
              src="/images/copy.svg"
              alt="copy"
              width={24}
              height={24}
              priority
              onClick={() => copy(JSON.stringify(inputUnit.value))}
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
          className="cursor-pointer mx-1 transform rotate-90 sm:rotate-0 my-8 sm:my-0 relative z-10"
          onClick={() => switchUints()}
        />
        <div className="w-[352px] h-[162px] flex flex-col justify-between bg-primary rounded-2xl text-white p-6">
          <div className="font-normal border-b border-[#FFFFFF33] pb-5 text-base">
            {outputUnit.label}
          </div>
          <div className="flex justify-between">
            <div className="flex items-end">
              <p className="text-3xl font-bold">{outputUnit.value}</p>
              {/* <span className="text-sm font-extralight ml-1 mt-[-4px]">em</span> */}
            </div>
            <Image
              src="/images/copy.svg"
              alt="copy"
              width={24}
              height={24}
              priority
              onClick={() => copy(JSON.stringify(outputUnit.value))}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-10 mb-14 text-sm font-normal">
        Calculation based on a font size of{" "}
        <NumericFormat
          className="mx-1 pt- py-[5px] border rounded-[4px] w-8 text-center font-bold"
          defaultValue={base}
          allowNegative={false}
          onChange={(e) => {
            setBase(Number(e.target.value));
          }}
        />{" "}
        Pixels
      </div>
      <div className="border p-6 gap-6 rounded-[8px]">
        <h3 className="text-[15px] sm:text-base font-normal">
          PX︎ - EM conversion tables
        </h3>
        <div className="flex gap-6 mt-4">
          <div className="flex-1">
            <div className="flex justify-between mb-2 px-2">
              <span className="sm:text-sm text-[13px] font-bold">PX</span>
              <span className="sm:text-sm text-[13px] font-bold">EM</span>
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
                  <span className="sm:text-sm text-[13px] font-normal">
                    {item} px
                  </span>
                  <span className="sm:text-sm text-[13px] font-normal">
                    {generateEm(item)} em
                  </span>
                </div>
              ))}
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-2 px-2">
              <span className="sm:text-sm text-[13px] font-bold">EM</span>
              <span className="sm:text-sm text-[13px] font-bold">PX</span>
            </div>
            {emList
              .filter((item) => extendView || item <= 1)
              .map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center justify-between h-11 px-2 ${
                    index % 2 === 0 && "bg-[#f5f5f5]"
                  }`}
                >
                  <span className="sm:text-sm text-[13px] font-normal">
                    {item} em
                  </span>
                  <span className="sm:text-sm text-[13px] font-normal">
                    {generatePx(item)} px
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
        <h3>Convert Pixels to EM</h3>
        <hr className="my-5" />
        <div className="text-sm text-justify leading-[25.83px]">
          <p>
            This calculator converts pixels to the CSS unit EM. The conversion
            is based on the default font-size of 16 pixel, but can be changed.
          </p>
          <br />
          <p>
            The conversion works of course in both directions, just change the
            opposite input field.
          </p>
          <br />
          <p>An example</p>
          <p>
            So if we take the default size as an example, than 1px represents
            0.0625em and, in the other direction, 1em represents 16px.
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
          <p>REM is the newer unit, older browsers don&apos;t support it.</p>
        </div>
      </div>
    </>
  );
}
