"use client";

import { useState } from "react";
import { NumericFormat } from "react-number-format";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";

export default function RgbToHex() {
  const [rgb, setRgb] = useState({ r: 255, g: 255, b: 255 });

  const rgbToHex = (r: number, g: number, b: number): string => {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
  };

  const handleChange = (color: "r" | "g" | "b", value: number) => {
    setRgb((prev) => ({ ...prev, [color]: value }));
  };

  const handleReset = () => {
    setRgb({ r: 255, g: 255, b: 255 });
  };

  return (
    <>
      <div className="border rounded-t-[8px] p-6">
        <h2>RGB to HEX Color Converter</h2>
        {["r", "g", "b"].map((color) => (
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
            <div className="w-full flex items-center">
              <NumericFormat
                className="border h-12 w-[187px] rounded-[8px] mr-6 px-2"
                value={rgb[color as "r" | "g" | "b"]}
                onValueChange={(values) =>
                  handleChange(color as "r" | "g" | "b", values.floatValue || 0)
                }
                allowNegative={false}
                isAllowed={(values) =>
                  values.floatValue! >= 0 && values.floatValue! <= 255
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
                value={[rgb[color as "r" | "g" | "b"]]}
                onValueChange={(e) =>
                  handleChange(color as "r" | "g" | "b", e[0])
                }
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
            style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
          />
        </div>
        <div className="flex gap-6 mt-6">
          <Button className="h-12 font-light w-full rounded-[8px] hover:bg-white hover:text-primary hover:border-primary hover:border shadow-none">
            Convert
          </Button>
          <Button
            onClick={handleReset}
            className="h-12 rounded-[8px] w-full bg-muted shadow-none hover:bg-muted text-black"
          >
            Reset
          </Button>
        </div>
      </div>
      <div className="border border-t-0 rounded-b-[8px] p-6">
        <span className="flex items-center mb-1">Hex color</span>
        <div className="bg-muted w-full h-12 flex items-center px-4 rounded-[8px]">
          {rgbToHex(rgb.r, rgb.g, rgb.b)}
        </div>
        <span className="flex items-center mb-1 mt-6">RGB color</span>
        <div className="bg-muted w-full h-12 flex items-center px-4 rounded-[8px]">
          rgb({rgb.r}, {rgb.g}, {rgb.b})
        </div>
      </div>
    </>
  );
}
