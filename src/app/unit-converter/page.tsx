import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Em from "@/components/unitTabs/em";
import Percentages from "@/components/unitTabs/percentages";
import Rem from "@/components/unitTabs/rem";

export default function UnitConverter() {
  return (
    <Tabs defaultValue="em">
      <TabsList className="grid w-full grid-cols-3 mb-14">
        <TabsTrigger value="em">PX to EM</TabsTrigger>
        <TabsTrigger value="rem">PX to REM</TabsTrigger>
        <TabsTrigger value="percentages">PX to Percentages</TabsTrigger>
      </TabsList>
      <TabsContent value="em">
        <Em />
      </TabsContent>
      <TabsContent value="rem">
        <Rem />
      </TabsContent>
      <TabsContent value="percentages">
        <Percentages />
      </TabsContent>
    </Tabs>
  );
}
