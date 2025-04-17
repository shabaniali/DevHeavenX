import HexToRgb from "@/components/colorTabs/hexToRgb";
import RgbToHex from "@/components/colorTabs/rgbToHex";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ColorConverter() {
  return (
    <Tabs defaultValue="HextoRgb">
      <TabsList className="sm:grid w-full sm:grid-cols-2 mb-8">
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
