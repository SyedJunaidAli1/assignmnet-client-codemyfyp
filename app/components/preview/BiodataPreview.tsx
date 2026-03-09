"use client";

import TemplateClassic from "../templates/TemplateClassic";
import TemplateModern from "../templates/TemplateModern";

export default function BiodataPreview({ biodata, previewRef }: any) {
  return (
    <div ref={previewRef}>
      {biodata.template === "modern" ? (
        <TemplateModern biodata={biodata} />
      ) : (
        <TemplateClassic biodata={biodata} />
      )}
    </div>
  );
}
