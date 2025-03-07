import HexToRgb from "@/components/colorTabs/hexToRgb";
import RgbToHex from "@/components/colorTabs/rgbToHex";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ColorConverter() {
  return (
    <Tabs defaultValue="HextoRgb">
      <TabsList className="grid w-full grid-cols-2 mb-14">
        <TabsTrigger value="HextoRgb">HEX to RGB</TabsTrigger>
        <TabsTrigger value="RgbtoHex">RGB to HEX</TabsTrigger>
      </TabsList>
      <TabsContent value="HextoRgb">
        <HexToRgb />
      </TabsContent>
      <TabsContent value="RgbtoHex">
        <RgbToHex />
      </TabsContent>
    </Tabs>
  );
}
