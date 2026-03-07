"use client";

export default function BiodataPreview({ biodata }: any) {
  return (
    <div className="border rounded p-4 bg-white">
      <h2 className="text-xl font-semibold">Preview</h2>

      <p>Name: {biodata.personalDetails.fullName}</p>
      <p>Age: {biodata.personalDetails.age}</p>
      <p>Height: {biodata.personalDetails.height}</p>
      <p>Religion: {biodata.personalDetails.religion}</p>
      <p>Caste: {biodata.personalDetails.caste}</p>
      <p>Location: {biodata.personalDetails.location}</p>
      <p>Contact Number: {biodata.personalDetails.contact}</p>
    </div>
  );
}
