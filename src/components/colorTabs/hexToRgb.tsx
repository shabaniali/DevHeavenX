"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "react-toastify";

export default function HexToRgb() {
  const [hex, setHex] = useState<string>("");

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied!");
  };

  const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    let formattedHex = hex.replace("#", "");
    if (formattedHex.length === 3) {
      formattedHex = formattedHex
        .split("")
        .map((char) => char + char)
        .join("");
    }
    const r = parseInt(formattedHex.substring(0, 2), 16);
    const g = parseInt(formattedHex.substring(2, 4), 16);
    const b = parseInt(formattedHex.substring(4, 6), 16);
    return { r, g, b };
  };

  const [rgb, setRgb] = useState<{ r: number; g: number; b: number }>(
    hexToRgb("")
  );
  const [error, setError] = useState<string>("");

  const isValidHex = (value: string): boolean => {
    return /^#?[0-9A-Fa-f]{3}$|^#?[0-9A-Fa-f]{6}$/.test(value);
  };

  const handleConvert = () => {
    if (!isValidHex(hex)) {
      setError("Invalid HEX format. Use #000000, #000, 000000, or 000.");
      return;
    }
    setError("");
    setRgb(hexToRgb(hex));
  };

  const handleReset = () => {
    setHex("");
    setRgb(hexToRgb(""));
    setError("");
  };

  return (
    <>
      <div className="border rounded-t-[8px] p-6">
        <h2>HEX to RGB Color Converter</h2>
        <div>
          <h3 className="text-[15px] mt-4">Type color code</h3>
          <div className="mt-2 flex flex-col sm:flex-row">
            <input
              value={hex}
              onChange={(e) => setHex(e.target.value)}
              className="min-h-12 px-2 rounded-[8px] flex-1 sm:mr-6 border"
            />
            <div className="flex mt-6 sm:mt-0">
              <Button
                onClick={handleConvert}
                className="h-12 font-normal w-full mr-4 px-6 rounded-[8px] hover:bg-white hover:text-primary border border-primary shadow-none"
              >
                Convert
              </Button>
              <Button
                onClick={handleReset}
                className="h-12 font-normal rounded-[8px] w-full bg-[#e8e8e8] shadow-none hover:bg-muted text-black px-5"
              >
                Reset
              </Button>
            </div>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>
      <div className="border border-t-0 rounded-b-[8px] mb-14 p-6">
        <div className="flex flex-col sm:flex-row gap-6 justify-between">
          <div className="flex flex-col w-full">
            <span className="flex items-center mb-1">
              <div className="w-[10px] h-[10px] rounded-[3px] mr-1.5 bg-[#ff0000]" />{" "}
              Red
            </span>
            <div className="bg-muted w-full h-12 flex items-center justify-between px-4 rounded-[8px]">
              {rgb.r >= 0 && rgb.r}
              {rgb.r >= 0 && (
                <Image
                  src="/images/copy-2.svg"
                  alt="copy"
                  width={24}
                  height={24}
                  priority
                  onClick={() => copy(JSON.stringify(rgb.r))}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <span className="flex items-center mb-1">
              <div className="w-[10px] h-[10px] rounded-[3px] mr-1.5 bg-[#008000]" />{" "}
              Green
            </span>
            <div className="bg-muted w-full h-12 flex items-center justify-between px-4 rounded-[8px]">
              {rgb.g >= 0 && rgb.g}
              {rgb.g >= 0 && (
                <Image
                  src="/images/copy-2.svg"
                  alt="copy"
                  width={24}
                  height={24}
                  priority
                  onClick={() => copy(JSON.stringify(rgb.g))}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <span className="flex items-center mb-1">
              <div className="w-[10px] h-[10px] rounded-[3px] mr-1.5 bg-[#0000ff]" />{" "}
              Blue
            </span>
            <div className="bg-muted w-full h-12 flex items-center justify-between px-4 rounded-[8px]">
              {rgb.b >= 0 && rgb.b}
              {rgb.b >= 0 && (
                <Image
                  src="/images/copy-2.svg"
                  alt="copy"
                  width={24}
                  height={24}
                  priority
                  onClick={() => copy(JSON.stringify(rgb.b))}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-6">
          <span className="flex items-center mb-1">Css color</span>
          <div className="bg-muted w-full h-12 flex items-center justify-between px-4 rounded-[8px]">
            {rgb.r >= 0 &&
              rgb.g >= 0 &&
              rgb.b >= 0 &&
              `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}
            {rgb.r >= 0 && rgb.g >= 0 && rgb.b >= 0 && (
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
        <div className="flex flex-col w-full mt-6">
          <span className="flex items-center mb-1">Color preview</span>
          <div
            className="w-full h-[135px] flex items-center px-4 rounded-[8px] border border-[#ECECEC]"
            style={
              rgb.r >= 0 && rgb.g >= 0 && rgb.b >= 0
                ? {
                    backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
                  }
                : {}
            }
          />
        </div>
      </div>
    </>
  );
}
