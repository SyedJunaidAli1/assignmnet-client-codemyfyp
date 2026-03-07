"use client";

export default function BiodataPreview({ biodata }: any) {
  return (
    <div className="border rounded p-4 bg-white">
      <h2 className="text-xl font-semibold">Preview</h2>

      <p>Name: {biodata.personalDetails.fullName}</p>
      <p>Age: {biodata.personalDetails.age}</p>
    </div>
  );
}