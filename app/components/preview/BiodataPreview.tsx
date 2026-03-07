"use client";

import TemplateClassic from "@/app/components/templates/TemplateClassic";

export default function BiodataPreview({ biodata }: any) {
  return (
    <div className="">
      <TemplateClassic biodata={biodata} />
    </div>
  );
}
