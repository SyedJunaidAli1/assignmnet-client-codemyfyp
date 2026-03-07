import TemplateClassic from "@/app/components/templates/TemplateClassic";
import TemplateModern from "@/app/components/templates/TemplateModern";

export default function BiodataPreview({ biodata }: any) {

  if (biodata.template === "modern") {
    return <TemplateModern biodata={biodata} />;
  }

  return <TemplateClassic biodata={biodata} />;
}