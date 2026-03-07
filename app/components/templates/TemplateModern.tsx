"use client";

import Image from "next/image";

export default function TemplateModern({ biodata }: any) {
  const p = biodata.personalDetails;
  const f = biodata.familyDetails || {};
  const e = biodata.educationProfession || {};

  return (
    <div className="max-w-full mx-auto rounded-xl shadow-lg p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        {biodata.profilePhoto && (
          <Image
            src={biodata.profilePhoto}
            alt="photo"
            className="w-28 h-28 rounded-full object-cover mx-auto mb-3"
          />
        )}

        <h1 className="text-2xl font-bold">{p.fullName || "Full Name"}</h1>

        <p className="text-gray-500">
          {p.age ? `${p.age} years` : ""} {p.location ? `• ${p.location}` : ""}
        </p>
      </div>

      {/* Personal Details */}
      <div>
        <h2 className="font-semibold mb-2 border-b pb-1">Personal Details</h2>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <p className="text-gray-500">Height</p>
          <p>{p.height}</p>

          <p className="text-gray-500">Religion</p>
          <p>{p.religion}</p>

          <p className="text-gray-500">Caste</p>
          <p>{p.caste}</p>

          <p className="text-gray-500">Contact</p>
          <p>{p.contact}</p>
        </div>
      </div>

      {/* Family Details */}
      <div>
        <h2 className="font-semibold mb-2 border-b pb-1">Family Details</h2>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <p className="text-gray-500">Father</p>
          <p>{f.fatherName}</p>

          <p className="text-gray-500">Mother</p>
          <p>{f.motherName}</p>

          <p className="text-gray-500">Siblings</p>
          <p>{f.siblings}</p>
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="font-semibold mb-2 border-b pb-1">
          Education & Profession
        </h2>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <p className="text-gray-500">Qualification</p>
          <p>{e.highestQualification}</p>

          <p className="text-gray-500">Profession</p>
          <p>{e.profession}</p>

          <p className="text-gray-500">Company</p>
          <p>{e.company}</p>
        </div>
      </div>
    </div>
  );
}
