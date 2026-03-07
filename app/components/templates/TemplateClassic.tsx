"use client";

import Image from "next/image";

export default function TemplateClassic({ biodata }: any) {
  const p = biodata.personalDetails;

  return (
    <div className="shadow-md p-6 max-w-full mx-auto border rounded-xl">
      <h1 className="text-center text-2xl font-bold mb-6">BIODATA</h1>
      {/* Photo */}
      {biodata.profilePhoto && (
        <div className="flex justify-center mb-4">
          <Image
            src={biodata.profilePhoto}
            className="w-32 h-32 object-cover rounded"
            alt="biodata profile photo"
            width={32}
            height={32}
          />
        </div>
      )}

      {/* Personal Details */}
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Name:</span> {p.fullName}
        </p>
        <p>
          <span className="font-semibold">Age:</span> {p.age}
        </p>
        <p>
          <span className="font-semibold">Height:</span> {p.height}
        </p>
        <p>
          <span className="font-semibold">Religion:</span> {p.religion}
        </p>
        <p>
          <span className="font-semibold">Caste:</span> {p.caste}
        </p>
        <p>
          <span className="font-semibold">Location:</span> {p.location}
        </p>
        <p>
          <span className="font-semibold">Contact:</span> {p.contact}
        </p>
      </div>
    </div>
  );
}
