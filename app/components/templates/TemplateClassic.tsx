"use client";

import Image from "next/image";

export default function TemplateClassic({ biodata }: any) {
  const p = biodata.personalDetails || {};
  const f = biodata.familyDetails || {};

  return (
    <div className="shadow-md p-6 max-w-full mx-auto border">
      {/* Title */}
      <h1 className="text-center text-2xl font-bold mb-6">BIODATA</h1>

      {/* Photo */}
      {biodata.profilePhoto && (
        <div className="flex justify-center mb-6">
          <Image
            src={biodata.profilePhoto}
            alt="profile photo"
            width={120}
            height={120}
            className="object-cover rounded border"
          />
        </div>
      )}

      {/* Personal Details */}
      <div className="mb-6">
        <h2 className="font-semibold border-b pb-1 mb-3">Personal Details</h2>

        <div className="grid grid-cols-2 gap-y-2 text-sm">
          <p className="text-gray-600">Name</p>
          <p>{p.fullName}</p>

          <p className="text-gray-600">Age</p>
          <p>{p.age}</p>

          <p className="text-gray-600">Height</p>
          <p>{p.height}</p>

          <p className="text-gray-600">Religion</p>
          <p>{p.religion}</p>

          <p className="text-gray-600">Caste</p>
          <p>{p.caste}</p>

          <p className="text-gray-600">Location</p>
          <p>{p.location}</p>

          <p className="text-gray-600">Contact</p>
          <p>{p.contact}</p>
        </div>
      </div>

      {/* Family Details */}
      <div>
        <h2 className="font-semibold border-b pb-1 mb-3">Family Details</h2>

        <div className="grid grid-cols-2 gap-y-2 text-sm">
          <p className="text-gray-600">Father</p>
          <p>{f.fatherName}</p>

          <p className="text-gray-600">Father Occupation</p>
          <p>{f.fatherOccupation}</p>

          <p className="text-gray-600">Mother</p>
          <p>{f.motherName}</p>

          <p className="text-gray-600">Siblings</p>
          <p>{f.siblings}</p>

          <p className="text-gray-600">Family Type</p>
          <p>{f.familyType}</p>
        </div>
      </div>
    </div>
  );
}
