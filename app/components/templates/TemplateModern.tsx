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
      <h2 className="font-semibold mb-2 border-b pb-1">Family Details</h2>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <p className="text-gray-500">Father</p>
        <p>{f.fatherName}</p>

        <p className="text-gray-500">Occupation</p>
        <p>{f.fatherOccupation}</p>

        <p className="text-gray-500">Mother</p>
        <p>{f.motherName}</p>

        <p className="text-gray-500">Siblings</p>
        <p>{f.siblings}</p>

        <p className="text-gray-500">Family Type</p>
        <p>{f.familyType}</p>
      </div>

      {/* Education */}
      {/* Education & Profession */}
      <div className="mt-6">
        <h2 className="font-semibold border-b pb-1 mb-3">
          Education & Profession
        </h2>

        <div className="grid grid-cols-2 gap-y-2 text-sm">
          <p className="text-gray-600">Qualification</p>
          <p>{biodata.educationProfession?.highestQualification}</p>

          <p className="text-gray-600">College</p>
          <p>{biodata.educationProfession?.college}</p>

          <p className="text-gray-600">Profession</p>
          <p>{biodata.educationProfession?.profession}</p>

          <p className="text-gray-600">Company</p>
          <p>{biodata.educationProfession?.company}</p>

          <p className="text-gray-600">Income</p>
          <p>{biodata.educationProfession?.income}</p>
        </div>
      </div>
    </div>
  );
}
