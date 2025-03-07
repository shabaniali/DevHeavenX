"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export default function HexToRgb() {
  const [hex, setHex] = useState<string>("ffffff");

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
    hexToRgb("ffffff")
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
    setHex("ffffff");
    setRgb(hexToRgb("ffffff"));
    setError("");
  };

  return (
    <>
      <div className="border rounded-t-[8px] p-6">
        <h2>HEX to RGB Color Converter</h2>
        <div>
          <h3 className="text-[15px] mt-4">Type color code</h3>
          <div className="mt-2 flex">
            <input
              value={hex}
              onChange={(e) => setHex(e.target.value)}
              className="h-12 px-2 rounded-[8px] flex-1 mr-6 border"
            />
            <Button
              onClick={handleConvert}
              className="h-12 font-light mr-4 px-6 rounded-[8px] hover:bg-white hover:text-primary hover:border-primary hover:border shadow-none"
            >
              Convert
            </Button>
            <Button
              onClick={handleReset}
              className="h-12 rounded-[8px] bg-muted shadow-none hover:bg-muted text-black px-5"
            >
              Reset
            </Button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
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
              {rgb.r}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <span className="flex items-center mb-1">
              <div className="w-[10px] h-[10px] rounded-[3px] mr-1.5 bg-[#008000]" />{" "}
              Green
            </span>
            <div className="bg-muted w-full h-12 flex items-center px-4 rounded-[8px]">
              {rgb.g}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <span className="flex items-center mb-1">
              <div className="w-[10px] h-[10px] rounded-[3px] mr-1.5 bg-[#0000ff]" />{" "}
              Blue
            </span>
            <div className="bg-muted w-full h-12 flex items-center px-4 rounded-[8px]">
              {rgb.b}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-6">
          <span className="flex items-center mb-1">Css color</span>
          <div className="bg-muted w-full h-12 flex items-center px-4 rounded-[8px]">
            rgb({rgb.r}, {rgb.g}, {rgb.b})
          </div>
        </div>
        <div className="flex flex-col w-full mt-6">
          <span className="flex items-center mb-1">Color preview</span>
          <div
            className="w-full h-[135px] flex items-center px-4 rounded-[8px] border border-[#ECECEC]"
            style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
          />
        </div>
      </div>
    </>
  );
}
