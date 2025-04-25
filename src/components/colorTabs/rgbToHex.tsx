"use client";

import { useState } from "react";
import { NumericFormat } from "react-number-format";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "react-toastify";

export default function RgbToHex() {
  const [rgb, setRgb] = useState<{
    r: number | null;
    g: number | null;
    b: number | null;
  }>({
    r: null,
    g: null,
    b: null,
  });

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied!");
  };

  const rgbToHex = (
    r: number | null,
    g: number | null,
    b: number | null
  ): string => {
    if (r === null || g === null || b === null) return "";
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
  };

  const handleChange = (color: "r" | "g" | "b", value: number) => {
    setRgb((prev) => {
      const updated = {
        r: prev.r ?? 0,
        g: prev.g ?? 0,
        b: prev.b ?? 0,
        [color]: value,
      };
      return updated;
    });
  };

  const handleReset = () => {
    setRgb({ r: null, g: null, b: null });
  };

  return (
    <>
      <div className="border rounded-t-[8px] p-6">
        <h2>RGB to HEX Color Converter</h2>
        {(["r", "g", "b"] as const).map((color) => (
          <div key={color}>
            <span className="flex items-center mb-1 mt-6">
              <div
                className={`w-[10px] h-[10px] rounded-[3px] mr-1.5 bg-${
                  color === "r"
                    ? "[#ff0000]"
                    : color === "g"
                    ? "[#008000]"
                    : "[#0000ff]"
                }`}
              />
              Type color{" "}
              {color === "r" ? "red" : color === "g" ? "green" : "blue"}
            </span>
            <div className="w-full flex flex-col sm:flex-row items-center">
              <NumericFormat
                className="border h-12 sm:w-[187px] w-full rounded-[8px] mb-6 sm:mb-0 sm:mr-6 px-2"
                value={rgb[color] ?? ""}
                onValueChange={(values) =>
                  handleChange(color, values.floatValue ?? 0)
                }
                allowNegative={false}
                isAllowed={(values) =>
                  (values.floatValue ?? 0) >= 0 &&
                  (values.floatValue ?? 0) <= 255
                }
              />
              <Slider
                rangeClassName={
                  color === "r"
                    ? "bg-[#FF6666]"
                    : color === "g"
                    ? "bg-[#39A339]"
                    : "bg-[#719EFF]"
                }
                value={[rgb[color] ?? 0]}
                onValueChange={(e) => handleChange(color, e[0])}
                max={255}
                step={1}
              />
            </div>
          </div>
        ))}
        <div className="flex flex-col w-full mt-6">
          <span className="flex items-center mb-1">Color preview</span>
          <div
            className="w-full h-[135px] flex items-center px-4 rounded-[8px] border border-[#ECECEC]"
            style={{
              backgroundColor:
                rgb.r !== null && rgb.g !== null && rgb.b !== null
                  ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
                  : "transparent",
            }}
          />
        </div>
        <div className="flex gap-6 mt-6">
          <Button
            onClick={handleReset}
            className="h-12 font-normal rounded-[8px] w-full bg-[#e8e8e8] shadow-none hover:bg-muted text-black"
          >
            Reset
          </Button>
        </div>
      </div>
      <div className="border border-t-0 rounded-b-[8px] p-6">
        <span className="flex items-center mb-1">Hex color</span>
        <div className="bg-muted w-full h-12 flex items-center justify-between px-4 rounded-[8px]">
          {rgbToHex(rgb.r, rgb.g, rgb.b)}
          {rgb.r !== null && rgb.g !== null && rgb.b !== null && (
            <Image
              src="/images/copy-2.svg"
              alt="copy"
              width={24}
              height={24}
              priority
              onClick={() => copy(rgbToHex(rgb.r, rgb.g, rgb.b))}
              className="cursor-pointer"
            />
          )}
        </div>
        <span className="flex items-center mb-1 mt-6">RGB color</span>
        <div className="bg-muted w-full h-12 flex justify-between items-center px-4 rounded-[8px]">
          {rgb.r !== null &&
            rgb.g !== null &&
            rgb.b !== null &&
            `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}

          {rgb.r !== null && rgb.g !== null && rgb.b !== null && (
            <Image
              src="/images/copy-2.svg"
              alt="copy"
              width={24}
              height={24}
              priority
              onClick={() => copy(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
    </>
  );
}
